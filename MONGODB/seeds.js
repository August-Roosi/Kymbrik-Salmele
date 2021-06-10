const mongoose = require('mongoose');
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/productStore', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("mongo connection open!")
    })
    .catch(err => {
        console.log("mongo connection ERROR!")
        console.log(err)
    })

const p = new Product({
    name: "Holyday Card",
    price: 2.50,
    category: "a3"
})
p.save()
    .then(p => {
        console.log(p)
    })
    .catch(e => {
        console.log(e)
    })