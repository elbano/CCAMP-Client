/**
 * Logging Levels:
 * All   : will console log everything.
 * DEBUG : will log DEBUG type log and higher severity
 * INFO  : will log INFO  type log and higher severity
 * WARN  : will log WARN  type log and higher severity
 * ERROR : will log ERROR type log and higher severity
 * FATAL : will log FATAL type log and higher severity
 */
export enum LoggingLevels {
  OFF   = 0,
  ALL   = 1,
  DEBUG = 2,
  INFO  = 3,
  WARN  = 4,
  ERROR = 5,
  FATAL = 6
}
