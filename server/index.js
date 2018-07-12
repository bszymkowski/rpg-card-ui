const express = require('express');
const proxy = require('express-http-proxy');
const app = express();

app.use(express.static(__dirname + './../build/webapp'));
app.use("/", proxy(process.env.BACKEND_ADDRESS));

app.listen(process.env.PORT);