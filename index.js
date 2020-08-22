var express = require('express');
var http = require('http');
const path = require('path');

var app = express();
 
var staticServe = express.static(`${ __dirname }/public`);

app.use(express.static('/'));

app.use('/', express.static(__dirname + '/'));

app.use("/", staticServe);
app.use("*",staticServe);

app.get('/Test',async (req, res) => {

    res.sendFile(path.join(__dirname + '/src/content/getusermedia/audio/index.html'));
  
  });


const PORT = process.env.PORT || 3545;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

