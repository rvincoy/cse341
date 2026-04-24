const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/',lesson1Controller.michelleRoute);
routes.get('/ashley',lesson1Controller.ashleyRoute);
routes.get('/ryan',lesson1Controller.ryanRoute);

module.exports = routes;