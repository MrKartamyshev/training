'use strict';

let path = require('path');

module.exports = {
  mode: 'development', // режим в катором работает веб пак/ develo - режим разработки работает быстрее   
  entry: './js/script.js',// файс с которого будем начинать / все зависимости / если необходимо создать несколько делаем обьект 

  output: { // файл выхода 
    filename: 'bundle.js',
    path: __dirname + '/js' 
  },
  watch: true,// вепак отслеживает изменения и автоматом вносит изменения

  devtool: "source-map",//информация о исходниках 

  module: {}
};
