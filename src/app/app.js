require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECT,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const routes = require('./routes/routes');

const app = express();
app.use(express.json());

app.use(routes);


module.exports = app;
