# bespinian hello world app (typescript)

This is a demo application for bespinian trainings etc.

## Express app

```bash
# install dependencies
npm i

# build app
npm run build

# start locally
npm start
```

## Azure FaaS

```bash
# install dependencies
npm i

# build app
npm run build

# start locally
func start
```

## Docker setup

```bash
# build image
docker build -t ghcr.io/bespinian/bespinian-ts-hello-world:main .


# run image
docker run -p 3000:3000 ghcr.io/bespinian/bespinian-ts-hello-world:main
```
