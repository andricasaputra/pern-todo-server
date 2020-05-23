const db = require('../database');

// GET ALL TODOS
const all = async (req, res) => {
	try{

		const getTodos = await db.query('SELECT * FROM todo ORDER BY id DESC');

		res.status(200);

		res.json({
			succes: true,
			data: getTodos.rows
		});

	} catch(err) {	
		console.error(err.message);
	}
};

//GET SINGLE TODO
const find = async (req, res) => {
	try{
		
		const { id } = req.params;
		const getTodo = await db.query('SELECT * FROM todo WHERE id = $1', [id]);

		res.status(200);

		res.json({
			succes: true,
			data: getTodo.rows
		});

	} catch(err){
		console.error(err.message);
	}
}

// CRAETE TODO
const store = async (req, res) => {

	try{

		const { description } = req.body;

		if(description == '') return;

		const craeteTodo = await db.query('INSERT INTO todo (description) VALUES($1) RETURNING *', [description]);

		res.status(200);

		res.json({
			succes: true,
			message: 'New data added',
			data: craeteTodo.rows[0]
		});
			
	} catch(err) {	
		console.error(err.message);
	}

};

// UPDATE TODO
const update = async (req, res) => {
	try{
		
		const { id } = req.params;
		const { description } = req.body;

		if(description == '') return;

		const update = await db.query('UPDATE todo SET description = $1 WHERE id = $2 RETURNING *', [description, id]);

		res.status(200);

		res.json({
			succes: true,
			message: 'Data updated',
			data: update.rows
		});

	}catch(err){	
		console.error(err.message);
	}
};

// DELETE TODO
const destroy = async (req, res) => {
	try{
		
		const { id } = req.params;
		const remove = await db.query('DELETE FROM todo WHERE id = $1', [id]);

		if(remove.rowCount > 0){

			res.status(204);

			res.json({
				succes: true,
				message: 'Data deleted'
			});

		} else {

			res.status(400);

			res.json({
				succes: false,
				message: 'Data not found'
			});
		}

	}catch(err){
		console.error(err.message);
	}
};


module.exports = { all, find, store, update, destroy };