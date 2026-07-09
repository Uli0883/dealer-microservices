const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

const prices = {
    "1": [
        { dealer: "Dealer A", price: 1000 },
        { dealer: "Dealer B", price: 1050 },
        { dealer: "Dealer C", price: 980 }
    ],
    "2": [
        { dealer: "Dealer D", price: 600 },
        { dealer: "Dealer E", price: 650 }
    ],
    "3": [
        { dealer: "Dealer F", price: 300 },
        { dealer: "Dealer G", price: 350 },
        { dealer: "Dealer H", price: 320 }
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