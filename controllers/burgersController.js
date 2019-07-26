
var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');


router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgersObj = {
            burgers: data
        };
        console.log(burgersObj);
        res.render("index", burgersObj);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured],
        function (result) {
            res.json({ id: result.insertId });
        });
});

router.put('/api/burgers/:id', function(req, res) {
    burger.update(req.params.id, function(result) {
        console.log(result);
        res.sendStatus(200);
    });
});

router.delete('/api/burgers/:id', function(req, res) {
    burger.delete(req.params.id, function(result) {
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;