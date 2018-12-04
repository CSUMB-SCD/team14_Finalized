const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/ng6'));

app.listen(process.env.PORT || 8080);

app.get('/*', () =>{
  console.log('Server started');
})


