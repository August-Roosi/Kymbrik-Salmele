const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/productStore', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("mongo connection open!")
    })
    .catch(err => {
        console.log("mongo connection ERROR!")
        console.log(err)
    })

app.use(express.static('public'))


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/K%C3%BCmbrik' , (req, res) => {
    res.render('MAIN.ejs')
})


app.get('/K%C3%BCmbrik/pood', (req, res) => {
    res.render('POOD.ejs')
})

app.get('/products', async (req, res) => {
    const products = await Product.find({}) 
    console.log(products)
    res.send("Delivering thy products...")
})

app.get('*', (req, res) => {
    res.send("INVALID URL :8")
})

app.listen(3000, () => {
    console.log("App is listening on port 3000")
})


