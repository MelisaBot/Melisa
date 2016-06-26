

var m = require('./index.js');

var APP_ID='8565709124926448';
var SECRET_KEY= 'QVovhGGEqfcpTeuIPsfoF0RZn27Yxzm9';
//var ACCESS_TOKEN='APP_USR-8565709124926448-062516-8e80b1718d4a16eb0e38cae6d286d5a0__M_L__-86850218';

var ml = new m.Meli(APP_ID, SECRET_KEY);

module.exports =ml;
