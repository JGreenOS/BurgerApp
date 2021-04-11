//import model
const burger = require('../models/burger.js');

//require express
const express = require('express');
const router = express.Router();

//routes
//get
router.get('/', (req, res) => {
burger.all((data) => {
    const hbsObject = {
        burger: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
});
});
//post-create
router.post('/api/burger/:id', (req, res) => {
    burger.create(['burger_name', 'devoured'], [req.body.burger, req.body.devoured], (result) => {
res.json({ id: result.insertId });

    });
});

//put-update
router.put('/api/burger/:id', (req, res) => {
const condition = `id = ${req.params.id}`;
console.log('condition', condition);
burger.update(
    {
        devoured: req.body.devoured,
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

//delete
router.delete ('api/burger/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    burger.delete(condition, (result) => {
        if(result.affectedRows === 0){
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

//export routes for server.js
module.exports = router;