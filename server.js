const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');

app.get('/',lesson1Controller.ryanRoute);
app.get('/ashley',lesson1Controller.ashleyRoute);

const port = 3000;

app.listen(process.env.port || port);
console.log('Web Server is listening at port ' + (process.env.port || port));
