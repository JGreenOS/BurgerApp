//import model
//require express
const express = require("express");
const router = express.Router();
const burger = require("../models/burger");
//routes

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
router.post('/api/burger', (req, res) => {
    burger.insertOne(['burger_name', 'eaten'], [req.body.burger_name, req.body.eaten], (result) => {
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