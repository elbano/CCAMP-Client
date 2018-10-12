import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverBaseURL } from '../../shared/serverBasedUrl';
import { environment } from '../../../environments/environment';
import { LoggingLevels } from './loggingLevels';
import * as _ from 'lodash';

/**
 * The LogService class
 * Logs to the console and server
*/
@Injectable()
export class LogService {

    /**
     * Constructor of LogService
     * @param {HttpClient} http
    */
    constructor(private http: HttpClient) { }

    /**
     * Log a message to the console and optionally the server.
     * @param message string - the content of the log message
     */
    log(message: string): void;
    // tslint:disable-next-line:unified-signatures
    log(message: string, level: string): void;
    // tslint:disable-next-line:unified-signatures
    log(message: string, level?: string, logToServer?: boolean): void;

    log(message: string, level?:  string, logToServer?: boolean): void {
        let logOptions: LogOptions = <LogOptions>{};
        logOptions.timestamp = new Date();
        logOptions.text = message;

        // Logging based on what loggingLevel value is set in environment variables.
        const clientLoggingLevel: number = environment.clientLoggingLevel;

        // Check if the logging Level from the caller is valid or not.
        // Note : here _.has is returning boolean whether "LoggingLevel" object has "level" Key or not.
        const isLevelValid = _.has(LoggingLevels, level);
        if ( isLevelValid && level !== undefined) {
            logOptions.level = level;
        } else {
            logOptions.level = 'ALL';
        }

        logToServer = logToServer === undefined ? true : logToServer;

       /**
        * Logging Levels:
        * All   : will console log everything.
        * DEBUG : will log DEBUG type log and higher severity
        * INFO  : will log INFO  type log and higher severity
        * WARN  : will log WARN  type log and higher severity
        * ERROR : will log ERROR type log and higher severity
        * FATAL : will log FATAL type log and higher severity
        *
        *
        * Examples :
        *
        * this.logger.log('testing logging', 'DEBUG'); Will print if Debug Enum value is higher than Env clientLoggingLevel
        * this.logger.log('testing logging'); // means no logging level, we default it to ALL(ENUM value 1)
        * this.logger.log('testing logging', 'XXXXX'); // means invalid logging level, we default it to ALL(ENUM value 1)
        * Default value 1 means this.logger.log('testing logging');
        */

        // get the ENUM value of LoggingLevels at "level" index, if not found return default value 1;
        const loggingEnumValue = _.get(LoggingLevels, level, 1);
        if (clientLoggingLevel <= loggingEnumValue) {
          console.log(message);
        }


        if (logToServer) {
            this.http.post<LogOptions>(serverBaseURL + 'api/log', logOptions).subscribe(res => {
                logOptions = res;
            }, error => console.error(error));
        }
    }
}

/**
 * Defines the structure of the logger data
 */
interface LogOptions {
    /**
     * Indicates the level of the log
     */
    level?: string;

    /**
     * Indicates when the log was recorded
    */
    timestamp: Date;

    /**
     * Contains the text/message of the log
     */
    text?: string;
}
