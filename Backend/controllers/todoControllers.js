const Todo = require('../models/todoModels');

// Get all todos
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single todo by ID
const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(404).json({ error: 'Todo not found' });
        res.json(todo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new todo
const createTodo = async (req, res) => {
    try {
        const { task, status } = req.body;
        const newTodo = new Todo({ task, status });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a todo by ID
const updateTodo = async (req, res) => {
    try {
        const { task, status } = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { task, status },
            { new: true }
        );
        if (!updatedTodo) return res.status(404).json({ error: 'Todo not found' });
        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a todo by ID
const deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) return res.status(404).json({ error: 'Todo not found' });
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
};
