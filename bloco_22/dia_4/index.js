const express = require('express');
const pingMiddleware = require('./middlewares/ping');
const hello = require('./middlewares/hello');
const greetings = require('./middlewares/greetings');
const bodyParser = require('body-parser');
const users = require('./middlewares/users');

const app = express();
app.use(bodyParser.json())

app.listen(3000, () => console.log('rodando porta 3000'))
app.get('/ping', pingMiddleware)
app.post('/hello', hello)
app.post('/greetings', greetings)
app.put('/users/:name/:age', users)