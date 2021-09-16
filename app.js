require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const routeIndex = require('./controller/index');


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/v1/pet', routeIndex);

//

// module.exports = app;
module.exports = app;
