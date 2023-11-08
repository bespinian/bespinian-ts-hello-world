"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello, World!</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
        <style>
          body {
            margin: 0;
            padding: 0;
            background: url('/background.jpg') no-repeat center center fixed;
            background-size: cover;
            font-family: 'Roboto', sans-serif;
            color: #ffffff;
            text-align: center;
          }
          .content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        </style>
      </head>
      <body>
        <div class="content">
          <h1>Hello, World!</h1>
        </div>
      </body>
    </html>
  `);
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
