import express from 'express';
import path from 'path';
import { SeverityNumber } from '@opentelemetry/api-logs';
import { logger } from './logger';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  logger.emit({
    severityNumber: SeverityNumber.INFO,
    severityText: 'info',
    body: 'GET request on route / received',
    attributes: { 'log.type': 'custom' },
  });
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
  logger.emit({
    severityNumber: SeverityNumber.INFO,
    severityText: 'info',
    body: `Server is listening on port ${port}`,
    attributes: { 'log.type': 'custom' },
  });
});
