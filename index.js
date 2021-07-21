const express = require("express");
const app = express();
const PORT = process.env.PORT || 2900;

const productRoute = require('./routes/Product.js');
const userRoute = require('./routes/User.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{
    res.status(200).send('EVERYTHING GUCCI')
});

app.use('/products', productRoute);

app.use('/user', userRoute);


app.listen(PORT, ()=>{
    console.log(`Serving On http://127.0.0.1:${PORT}`)
});