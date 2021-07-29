const exampleRouter = require('express').Router();


exampleRouter.get('/', function(req, res) {
	res.send('Hi!');
})

module.exports = exampleRouter;