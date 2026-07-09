const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

const cors = require('cors');
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
const prices = {
    "1": [
        { dealer: "Dealer A", price: 1000 },
        { dealer: "Dealer B", price: 1050 }
    ],
    "2": [
        { dealer: "Dealer C", price: 600 },
        { dealer: "Dealer D", price: 650 }
    ],
    "3": [
        { dealer: "Dealer E", price: 300 },
        { dealer: "Dealer F", price: 350 }
    ]
};

app.get('/prices/:productId', (req, res) => {
    const productId = req.params.productId;
    const result = prices[productId] || [];
    res.json(result);
});

app.listen(port, () => {
    console.log(`Dealer prices service running on port ${port}`);
});