import { LoggingLevels } from '../app/core/services/loggingLevels';

export const environment = {
  production: true,
  serverBaseURL: 'http://' + window.location.hostname + ':44371/',
  clientBaseURL: 'http://' + window.location.hostname + ':4200/',
  authClientID: 'CKPL72Xufu3KBu6ok2Ki0o65YX0dDGQf',
  authDomain: 'ccampapi.auth0.com',
  clientBaseURLPort: window.location.protocol + '//' +
    window.location.hostname + ':' + window.location.port + '/',
  clientLoggingLevel: LoggingLevels.WARN
};
