const express = require('express');
const router = express.Router();
router.get('/teste', function (req, res, next) {
    res.send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

router.get('/ec2', function (req, res, next) {
    res.send({
        title: "EC2 Ok"
    });
});
module.exports = router;
