import {
  LoggerProvider,
  BatchLogRecordProcessor,
} from '@opentelemetry/sdk-logs';
import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http';

const otlpHost = process.env.OTLP_ENDPOINT || 'http://otel.default.svc.cluster.local:4318';

const collectorOptions = {
  url: `${otlpHost}/v1/logs`,
  concurrencyLimit: 1,
};
const logExporter = new OTLPLogExporter(collectorOptions);
const loggerProvider = new LoggerProvider();

loggerProvider.addLogRecordProcessor(new BatchLogRecordProcessor(logExporter));

export const logger = loggerProvider.getLogger('default', '1.0.0');
