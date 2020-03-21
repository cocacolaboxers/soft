const express = require('express');
const router = express.Router();

const db = require('../database');

router.get('/', (req, res) => {
	console.log('Authencication');
});

module.exports = router;
