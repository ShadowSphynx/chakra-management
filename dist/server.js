const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require('path');

// app.get('/', (req, res) => res.send('Hello World!'))

// console.log(path.join(__dirname, "/chakra-managament"));

app.use(express.static(path.join(__dirname, "/chakra-managament")));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))