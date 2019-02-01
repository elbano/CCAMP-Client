import { LoggingLevels } from '../app/core/services/loggingLevels';

export const environment = {
  production: false,
  serverBaseURL: 'http://' + window.location.hostname + ':44958/',
  clientBaseURL: 'http://' + window.location.hostname + ':4200/',
  authClientID: 'CKPL72Xufu3KBu6ok2Ki0o65YX0dDGQf',
  authDomain: 'ccampapi.auth0.com',
  clientBaseURLPort: window.location.protocol + '//' +
    window.location.hostname + ':' + window.location.port + '/',
  clientLoggingLevel: LoggingLevels.ALL,
  googleClientId: 'VICTOR NO SE CUAL ES'
};
