'use strict';

//// 利用dotenv載入config
require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//// login 路由
var loginRouter = require('./controller/loginController');
var helloworldRouter = require('./controller/helloworldController');

//// port 預設3002
let port = process.env.PORT || 3002;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//// 監聽路由
loginRouter(app);
helloworldRouter(app);

app.listen(port, () => {
    console.log('express listen on port:' + port);
})
