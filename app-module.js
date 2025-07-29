const express = require('express');
const app = express();
const port = 4000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Homepage');
    })

app.get('/products', (req, res) => {
    const product = [
    {
        id: 1,
        label: 'Product 1'
    },
    {
        id: 2,
        label: 'Product 12'
    },
    {
        id: 3,
        label: 'Product 3'
    }
    ]
    for (let i = 0; i < product.length; i++) {
        if (product[i].id == 2){
            console.log(product[i].label);
            res.json(product[i]);
        }
    }
}
)
app.get('/products/:id', (req, res) => {
    const productID = parseInt(req.params.id);
    console.log("Req:",req,"\n\nreq.params.id:",req.params.id,"\n\nproductID:",productID);

    products = [
    {
        id: 1,
        label: 'Alpha Particles'
    },
    {
        id: 2,
        label: 'Aqua Regia'
    },
    {
        id: 3,
        label: 'Apothem'
    }
    ]

    const getSingleProduct = products.find(product => product.id === productID);
    console.log(getSingleProduct)
    console.log(req.params);
    if (getSingleProduct){
        res.json(getSingleProduct);
        }
    else{
        res.status(404).send('Product not found, Please try with a different ID');
    }
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})