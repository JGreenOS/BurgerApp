//import model
//require express
const express = require("express");
const burgers = require("../models/burger.js");
const router = express.Router();
const burger = require("../models/burger.js");
//routes

router.get('/', (req, res) => {
burgers.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
    });
});


//post-create
router.post('/api/burgers', (req, res) => {
    burgers.insertOne(['burger_name', 'eaten'], [req.body.burger_name, "1"], (result) => {
res.json({ id: result.insertId });

    });
});

//put-update
router.put('/api/burgers/:id', (req, res) => {
const condition = `${req.params.id}`;
console.log('condition', condition);
console.log(req.body)
burgers.update(
    {
        eaten: req.body.eaten,
    },
    condition,
    (result) => {
        if(result.changedRows === 0) {
            console.log("if statement here");
            return res.status(404).end();
        }
        res.status(200).end();
    }
);
});


//export routes for server.js
module.exports = router;