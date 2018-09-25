export const environment = {
  production: false,
  serverBaseURL: 'http://' + window.location.hostname + ':44958/',
  clientBaseURL: 'http://' + window.location.hostname + ':4200/',
  authClientID: '',
  authDomain: 'ccamp.auth0.com',
  clientBaseURLPort: window.location.protocol + '//' +
      window.location.hostname + ':' + window.location.port + '/'
};
