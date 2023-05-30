require('dotenv').config();
const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

const options = {
    key: fs.readFileSync("localhost1.key"),
    cert: fs.readFileSync("localhost1.crt")
  };

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end("Hello World\n");
}).listen(process.env.PORT);
