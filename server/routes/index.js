/* eslint-disable global-require */
import 'dotenv/config';
import reactApp from './views/app';

const routes = (app) => {

  app.get('/api/github', require('./api/github'));
  app.get('/api/lastfm', require('./api/lastfm'));

  app.get('/api/resume', require('./api/resume'));

  reactApp(app); // set up react routes
};

export default routes;
/* eslint-enable global-require */
