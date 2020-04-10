require('dotenv').config();
var QuickBooks = require('node-quickbooks');

module.exports = new QuickBooks(
	process.env.CONSUMER_ID,
	process.env.CONSUMER_SECRET,
	process.env.OAUTH_TOKEN,
	false, // no token secret for oAuth 2.0
	process.env.REAL_M_ID,
	true, // use the sandbox?
	true, // enable debugging?
	null, // set minorversion, or null for the latest version
	'2.0', //oAuth version
	process.env.REFRESH_TOKEN
);
