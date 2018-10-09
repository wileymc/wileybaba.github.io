var mongoose = require('mongoose');

// Set proper environment
var env = process.env.NODE_ENV || 'development';

var config = require('./config/mongo')[env];

module.exports = () => {

  //Set the production MongoDB URL if Production config
  var envUrl = process.env[config.use_env_variable];

  //Define local URL var if not in production
  var localUrl = `mongodb://${ config.host }/${ config.database }`;

  // Set the connection URL
  var mongoUrl = envUrl ? envUrl : localUrl;

  // Connect
  return mongoose.connect(mongoUrl);
};
