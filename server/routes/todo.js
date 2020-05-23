const router = require('express').Router();
const todo = require('../controllers/todo');

// ALL TODO ROUTES
router.get('/',  async (req, res) => await todo.all(req, res));

router.get('/:id', async (req, res) => await todo.find(req, res));

router.post('/', async (req, res) => await todo.store(req, res));

router.put('/:id', async (req, res) => await todo.update(req, res));

router.delete('/:id', async (req, res) => await todo.destroy(req, res));

module.exports = router;