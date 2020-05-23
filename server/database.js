const connection = require('pg').Pool;

const db = new connection({
	user : 'postgres',
	password : 'root',
	host : 'localhost',
	port : 5433,
	database : 'pern_todo' 
});

module.exports = db;