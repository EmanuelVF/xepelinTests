const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

//Sending the login html
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});

//Checking credentials
app.post('/auth', function(request, response) {
	let username = request.body.username;
	let password = request.body.password;
	if (username && password) {
		//The credentials could be read from a DB.
        if (username === 'admin' && password === 'admin'){
				request.session.loggedin = true;
				request.session.username = username;
				//Redirect to /main
				response.redirect('/main');
        }else{
			//The credential are wrong.
            response.send('Incorrect Username and/or Password!');
        }
        response.end();
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

app.get('/main', function(request, response) {
	//If the user is logged in, the main.html is returned.
	if (request.session.loggedin) {
		response.sendFile(path.join(__dirname + '/main.html'));
	} else {
        response.send('Please login to view this page!');
        response.end();
	}
});

app.listen(3000);