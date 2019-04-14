var path = require("path");
var express = require("express");
var app = express();  // make express app
const engines = require('consolidate')
const expressLayouts = require('express-ejs-layouts')
const mysql = require('mysql')
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration
//DB connection to MYSQL database server
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react_server'
})

// specify desired view engine
app.engine('ejs', engines.ejs)
app.get('/persons', (req, res) => {
    // connection.connect();
    connection.query('SELECT * FROM `persons`', (error, results, fields) => {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    })
    // connection.end();
})

// Listen for an application request on port 8081
app.listen(8080, function () {
    console.log("Server started and currently in /app.js")
    console.log('GDP-Node app listening on http://127.0.0.1:' + 8080);
});
module.exports = app
