import express from 'express';
import path from 'path';
import { SeverityNumber } from '@opentelemetry/api-logs';
import { logger } from './logger';
import {getHtml} from './html/getHtml';

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
  res.send(getHtml());
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
