//import model
//require express
const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');
//routes
//get
router.get('/', (req, res) => {
burger.all((data) => {
    res.render('index', {burger: data});
    });
});


//post-create
router.post('/api/burger/:id', (req, res) => {
    burger.insertOne(['burger_name'], [req.body.name], (result) => {
res.json({ id: result.insertId });

    });
});

//put-update
router.put('/api/burger/:id', (req, res) => {
const condition = `${req.params.id}`;
console.log('condition', condition);
console.log(req.body)
burger.update(
    {
        eaten: req.body.eaten,
    },
    condition,
    (result) => {
        if(result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    }
);
});


//export routes for server.js
module.exports = router;