const express = require('express');
const app = express();
const router = require('./src/server');
const configureAppVariables = require('./src/config/appVariables');
const cookieParser = require('cookie-parser')

configureAppVariables(app);

app.listen(app.get('PORT'), () => {
  console.log('We are listening on port', app.get('PORT'));
});

app.use(cookieParser())

app.use(router);

app.get('/*', function (req, res) {
  res.sendFile(app.get('indexHTML'));
});

app.use(require('./src/server/utils/errorCatcher'));