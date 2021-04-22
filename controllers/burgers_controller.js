const express = require("express");

const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
burger.all((data) => {
        const hbsObject = {
            burgers: data,
        };
console.log(hbsObject);
res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burgers.create(['burger_name', 'eaten'], [req.body.burger_name, req.body.eaten], (result) => {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
    console.log('condition', condition);

    burgers.update(
        {
            eaten: req.body.eaten,
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

router.delete('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    burgers.delete(condition, (result) => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;
