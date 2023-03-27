const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

const refreshAll = require('./database')
refreshAll() ;
const router = require('./routes/covidTally')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router) ;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  

module.exports = app;