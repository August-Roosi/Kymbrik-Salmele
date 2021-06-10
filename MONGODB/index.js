const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/productStore', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("mongo connection open!")
    })
    .catch(err => {
        console.log("mongo connection ERROR!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send("WOOF!")
})

app.listen(3000, () => {
    console.log("App is listening on port 3000")
})