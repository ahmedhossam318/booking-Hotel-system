const winston = require('winston')
require('winston-mongodb')

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [

         new winston.transports.File({
             filename: 'error.log',
             level: 'info',
             format:winston.format.combine(winston.format.timestamp(),winston.format.json())
         }),
        new winston.transports.MongoDB({
            db: 'mongodb://127.0.0.1:27017/employees',
            options:{useUnifiedTopology:true},
            level: 'info'
        })

    ],
});

module.exports = logger