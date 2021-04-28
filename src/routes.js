const {Router} = require('express');

const routes=Router();

const testeController = require('./Controllers/testeController')

const apiWatson = require('./middleware/apiWatson')
const msgController = require('./Controllers/msgController')

//padrão
  routes.get('/',testeController.index);
  routes.get('/create', apiWatson.createSession,msgController.createSession)
  routes.post('/send', apiWatson.sendMessage, msgController.sendMessage)


  module.exports=routes; 