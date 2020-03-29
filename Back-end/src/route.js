const express = require('express');
const Ong = require('./controllers/Ong');
const Incident = require('./controllers/Incident');
const ProfileControllers = require('./controllers/ProfileControllers');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


routes.post('/session',SessionController.create);

routes.get('/ongs',Ong.index);
routes.post('/ongs',Ong.create);

routes.get('/profile',ProfileControllers.index);

routes.get('/incidents',Incident.index);
routes.post('/incidents',Incident.create);
routes.delete('/incidents/:id',Incident.delete);

module.exports = routes;