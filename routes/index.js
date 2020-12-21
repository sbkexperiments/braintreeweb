var express = require('express');
var braintree = require("braintree");

var router = express.Router();

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "tp8vwjnt27cvmgzf",
  publicKey: "xnfhhpzf6kdwhs7q",
  privateKey: "3da220970a4510dfa077acd4479716fc"
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/client-token", function (req, res) {
  gateway.clientToken.generate({}, function (err, response) {
    res.send({ clientToken: response.clientToken });
  });
});

module.exports = router;
