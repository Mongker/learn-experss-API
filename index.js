/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong Le Van on 8/18/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
// require('dotenv').load()
const port = process.env.PORT || 2121;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let todoRoutes = require('./api/routes'); //importing route
app.use(cors({
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }));
app.use(todoRoutes);

// app.use(todoRoutes);

app.listen(port);

console.log('RESTful API server started on: ' + port);