import { LoggingLevels } from '../app/core/services/loggingLevels';

export const environment = {
  production: true,
  serverBaseURL: 'http://' + window.location.hostname + ':44371/',
  clientBaseURL: 'http://' + window.location.hostname + ':4200/',
  authClientID: 'oIPI9hJUvCaynZlgfWhxWhYOm7eqs6Mp',
  authDomain: 'ccampapi.auth0.com',
  clientBaseURLPort: window.location.protocol + '//' +
    window.location.hostname + ':' + window.location.port + '/',
  clientLoggingLevel: LoggingLevels.WARN
};
