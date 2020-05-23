const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todo');

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use('/todo', todoRoutes);

app.listen(5000, () => {
	console.log(`app running on port 5000`);
});