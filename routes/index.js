const express = require('express');
const inicis = require('../lib/inicis')
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('payment.ejs');
});

router.post('/result', function (req, res, next) {
    inicis.mobile(req.body)
    res.send('ok')
});

module.exports = router;
