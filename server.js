const express = require('express');
const serverStatic = require('server-static');

const app = express();

app.use('/', serverStatic(path.join(__dirname, '/dist')))

let port = 8080
app.listen(port);

console.log('Listen on port: ' + port)