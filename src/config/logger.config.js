const { createLogger, format } = require("winston");
const { ATLAS_LOG_DB_URL } = require("./server.config");

const { Console } = require("winston/lib/winston/transports");
const { MongoDB } = require('winston-mongodb');
const { File } = require("winston/lib/winston/transports");
// ============================================ Define Custom Formats ===================================== 
const upperCaseLevel = format((info) => {
  info.level = info.level.toUpperCase();
  return info;
});

const customFormat = format.printf((log) => {
  return `${log.timestamp} [${log.level}]: ${log.message}`;
});

// ============================================ Add Transports ============================================ 
const allowedTransport = [];

allowedTransport.push(
  new Console({
    format: format.combine(format.colorize({all: true})),
  }),
);

allowedTransport.push(new MongoDB({
    level: 'error',
    db: ATLAS_LOG_DB_URL,
    collection: 'logs',
    
    decolorize:true,
    storeHost:true,

    capped: true,
    cappedSize: 10000, // 100 KB 
    cappedMax: 5
}))

allowedTransport.push(new File({
    level: 'error',
    filename:'logs/error.log',
    format: format.json()
}))

// ============================================ Global Pipeline ============================================ 
const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',

  format: format.combine(
    format.errors({ stack: true }),
    format.json(),
    upperCaseLevel(),
    format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
    customFormat,
  ),
  transports: allowedTransport,
});

module.exports = logger;
