require('dotenv').config()
require("./src/DB/db")
const express = require('express');
var bodyParser = require('body-parser')
const routes = require("./src/routes")

const app = express();
const port = process.env.PORT || 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/", routes);

app.listen(port, () => {
    console.log(`server listing on ${port}`);
});
