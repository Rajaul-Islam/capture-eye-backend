const express = require("express")

const products= require('./data/products')

const app=express();

require('dotenv').config()

const cors=require('cors')

app.use(cors())
 
app.use(express.json());
const port = process.env.PORT || 5000;



app.get('/',(req,res)=>{
    res.send('from node js')
})


app.get('/products',(req,res)=>{
    res.json(products);
})
app.get('/products/:id',(req,res)=>{
    const product=products.find(p=>p.id==req.params.id);
    res.json(product);
})


app.listen(port, () => {
    console.log('Listening to port', port);
})