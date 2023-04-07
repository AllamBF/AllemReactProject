const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const http =require('http');

/*** Connection to database */
mongoose
  .connect("mongodb+srv://Allem_BF:allem2020@tasca.svqrax9.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser:true})
  .then(() => {
    console.log('Connected to my Local MongoDB');
  })
  .catch(err => {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
    process.exit();
  });

/** End Connection Database */

