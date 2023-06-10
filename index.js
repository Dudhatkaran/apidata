const express = require("express");
const { json } = require('express');
const app = express();


const cors = require('cors');
app.use(cors());
app.use(json());

require('./DB/Connection')

app.listen(9898, () => {
    console.log("Sever Start...");
});

app.use('/api', require('./API/Crudapi'));
// const api = require('./API/Crudapi');
