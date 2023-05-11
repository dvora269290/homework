const express = require('express');
const cors =require('cors');
const user = require('./routes/user')
 const vaccineManufacturer = require('./routes/vaccineManufacturer')
const detailsAboutCovid = require('./routes/detailsAboutCovid')
const app=express();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
  extended:true
}));
const port=6200;
app.use(cors());
app.use(express.json());
app.use('/api/user', user);
app.use('/api/vaccineManufacturer',vaccineManufacturer);
app.use('/api/detailsAboutCovid',detailsAboutCovid);
app.use(cors())
app.use(express.static('images'));
app.listen(port, () => {
  console.log('server is up and running');
})





