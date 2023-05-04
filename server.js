const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const mysql = require('mysql');
const multer = require('multer');
var upload = multer();
const { body, validationResult } = require('express-validator');

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
})
  module.exports = connection

  app.get('/data', (req, res) => {
    const { offset = 0, limit = 9 } = req.query;
  
    const query = `SELECT * FROM drivers LIMIT ${limit} OFFSET ${offset}`;
  
    connection.query(query, (err, rows) => {
      if (err) throw err;
      res.json(rows);
    });
  });

app.post('/data',
  body('drivername').isLength({
    min: 1
  }),
  body('surname').isLength({
    min: 1
  }),
  body('documentnumber').isLength({
    min: 1
  }),
  (req, res) => {
    const id = req.body.documentnumber
    const nm = req.body.drivername
    const sn = req.body.surnamem
    const ct = req.body.countryList
   const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(400).json({
      success: false,
      errors: errors.array()
    })
  }else{
    connection.query(`INSERT INTO drivers (id, name, surname, visitedCountries) VALUES ("${id}", "${nm}", "${sn}", "${ct}")`, function(err, result){
      if (err) throw err;
      res.status(200).json({response: true})
      });
    }
  });

  app.delete('/data/:id',(req,res) => {
    const idDn = req.params.id
    
    connection.query(`DELETE FROM drivers.drivers WHERE id='${idDn}'`, function(err, rows){
      if(err) throw err;
      res.status(200).json(rows)
    })
  })

  app.put('/data/:id',
    body('drivernamemodify').isLength({
      min: 1
    }),
    body('surnamemodify').isLength({
      min: 1
    }),
    body('documentnumbermodify').isLength({
      min: 1
    }),
    (req,res) => {
      const idDn = req.params.id
      const idm = req.body.documentnumbermodify
      const nmm = req.body.drivernamemodify
      const snm = req.body.surnamemodify
      const ctm = req.body.countryListModify
      const errors = validationResult(req)

      if(!errors.isEmpty()){
        return res.status(400).json({
          success: false,
          errors: errors.array()
        })
      }else{
        connection.query(`UPDATE drivers SET id='${idm}',name='${nmm}',surname='${snm}',visitedCountries='${ctm}' WHERE id='${idDn}'`, function(err, rows){
          if(err) throw err;
          res.status(200).json(rows)
        })
      }
    })

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
