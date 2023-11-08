# === Build Stage ===
FROM node:18 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# === Run Stage ===
FROM node:18-slim
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/public ./public
RUN npm install --only=production
RUN groupadd -r nodejs && useradd -r -g nodejs nodejs
RUN chown -R nodejs:nodejs /usr/src/app
USER nodejs
EXPOSE 3000
CMD [ "npm", "start" ]
