var QuickBooks = require('node-quickbooks');

module.exports = new QuickBooks(
	'AByvgAe44fVPRkObL1rT9vg7BLZEkzTGFHxF2iv5v5OavDSE4D',
	'CjnWd2CAov5sjbM3Gk0Q3LkmOGiCoIibsXDOpfZF',
	'eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..d1q6-OAXAsnI0ZbJMCmO_g.fNY4XOkv8j2c2cPA3wuCOkNxHPSoTnGSvcJ3-rRhP3YELiCj3DAxVTTUZp3mgzPuXrMS0h3QY7hv2C6AGSleONRCgucX-WOIUzi5Xg0scKwz-W6UDN7-pKzPzVlUZhMuOJ_TIhdKLzgT9ask2bCDccGFtk7owfA3Xy3OZkqkk9wcgWrczXhIck_WZiDUDo6aTgz7gbtg-vvw6ecYZAKnlp3zOfBGz9PDqW01T0Dc75GgFfDZjgXWv52U18lz4sIJmkl5HuCKn8jDTMIrNZ-1Cns6AwODk91qEpKckncLyKiFfHtp86hYhWNMP8ra4658AKw9Y5UlYoIM6GHEgt_XUwLt00Nz5_IHpArFdTs__BAHwd5BgtKOhwdZ4fY3up4P7dFXv1JFfq_SkCH7W-Bu1BYHEhOAIn1f1CX36Bp46mtzqsnZ5j3fH4Yt6D4lWr8gMt7X3p1VVvrLGAOTVD0ymkiZ0qFXcgWfgUzdoFpUMUkWyCiPmDpZcDt-a4qZZxq6KZMloFbXytxYD9Q28al0_Th8MNSPfedHaOBCX054e4JbKkWgio1Ru0B1gKydgcxnrFxEdoXxPjwQU2AUeVG3cpr1pbi3_WHmvh1GPQXJXMnqYat9X6J65Dd_tSsrXx9est2i0_uJC7e9wVud9rpmj1n5F62TeLBAKw6AWrg528vY7Ce2k6wBVPTGXASLXg7BtRrwFDrCIJy-Qyktrv0oFiFMNrXk8UmAbG_HibGivDA.r56Feo3ExIE286XMr31XTw',
	false, // no token secret for oAuth 2.0
	'4620816365043257540',
	true, // use the sandbox?
	true, // enable debugging?
	47, // set minorversion, or null for the latest version
	'2.0', //oAuth version
	'AB11594864403f7f9crhkzWLa8rc4KV2qAW2E4DOf3SkLKpwl2'
);
