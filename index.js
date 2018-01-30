const moment = require('moment');
module.exports = ()=> {
  return moment().format('YYYY-MM-D | HH:mm:ss:SSS');	
};