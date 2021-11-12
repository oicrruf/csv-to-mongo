
const mongoose = require('mongoose');
require('dotenv').config()

const SesionCliente = require('./SesionCliente');

mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.mml2l.mongodb.net/${process.env.DBNAME}?authSource=admin&replicaSet=atlas-fxlrc3-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`, { useNewUrlParser: true });

module.exports = {
  SesionCliente,
};
