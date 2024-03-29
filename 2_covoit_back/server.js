const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
const cors = require('cors');
app.use(cors());

if(!process.env.HOST_DB) {
	var config = require('./config-exemple')
} else {
	var config = require('./config')
}

const mysql = require('promise-mysql');

//ici on appelera nos routes
const CovoitRoutes = require('./routes/CovoitRoutes');
const ReponseRoutes = require('./routes/ReponseRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes')

const host = process.env.HOST_DB || config.db.host;
const database = process.env.DATABASE_DB || config.db.database;
const user = process.env.USER_DB || config.db.user;
const password = process.env.PASSWORD_DB || config.db.password;
//const port = process.env.PORT || config.db.port;

mysql.createConnection({
	host: host,
	user: user,
	password: password,
	database: database
	//port: port
}).then((db) => {
    console.log('connecté bdd');
	setInterval(async function () {
		let res = await db.query('SELECT 1');
	}, 10000);
	
	app.get('/', (req, res, next)=>{
		res.json({msg: 'Welcome to your CRM api', status: 200})
	})

    //appel de nos routes
    CovoitRoutes(app, db)
    ReponseRoutes(app, db)
    userRoutes(app, db)
    authRoutes(app, db)
    
})
.catch(err=>console.log(err))

const PORT = process.env.PORT || 9500;

app.listen(PORT, ()=>{
	console.log('Connecté sur le host '+host+' avec le port: '+PORT+ 'à la BDD : '+database );
})