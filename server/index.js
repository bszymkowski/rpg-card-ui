const express = require('express');
const app = express();

app.use(express.static(__dirname + './../build/webapp'));

app.listen(3000);