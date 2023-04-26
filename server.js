var express = require('express');
var config = require('./config.json');

var api = express();

// Remova as seguintes duas linhas
// api.use(express.urlencoded());
// api.use(express.json());

// Substitua as linhas acima por esta única linha
api.use(express.json());

api.use('/api/produtorio', require('./controller/api/produtorioController'));

var apiPort = config.port;

var serverAPI = api.listen(apiPort, function () {
  console.log('Server API listening at http://' + serverAPI.address().address + ':' + serverAPI.address().port);
});