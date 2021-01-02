const express = require('express');
const path = require('path');
const app = express()
//Test
const port = 3000

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/public/index.css', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.css'));
});

app.get('/public/main.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/main.js'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
