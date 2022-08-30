var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/",function(req, res) {
	res.send("Wellcome and Backend is Running");
});

module.exports = router;
