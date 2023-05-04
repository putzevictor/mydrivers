const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require('cors');
const mysql = require('mysql');
const multer = require('multer')
var upload = multer();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(upload.array())
app.use(express.static('public'))

app.use(express())
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
  
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ar2pir89',
  database: 'drivers'
})
  
connection.connect(function(err){
  if (err){
    return console.error(err.message)
  }
  console.log('Connected to the MySQL server')
  /*connection.query("SELECT * FROM drivers", function (err, result) {
    if (err) throw err;
    console.log(result);})*/
})
  module.exports = connection

  app.get('/data', (req, res) => {
    connection.query(`SELECT * FROM drivers`, function(err, rows){
      //connection.end()
      if (err) throw err;
      res.status(200).json(rows)
      //res.sendStatus(200)
    })
  });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/data', (req, res) => {
  const id = req.body.documentnumber
  const nm = req.body.drivername
  const sn = req.body.surname
  const ct = req.body.countryList

  connection.query(`INSERT INTO drivers (id, name, surname, visitedCountries) VALUES ("${id}", "${nm}", "${sn}", "${ct}")`, function(err, result){
    if (err) throw err;
    res.status(200).json({response: true})
    })
  });

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
