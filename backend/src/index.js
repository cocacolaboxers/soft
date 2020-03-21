const express = require('express');
const cors = require('cors');
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use(require('./routes/authentication'));

//Starting the servers
app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});
