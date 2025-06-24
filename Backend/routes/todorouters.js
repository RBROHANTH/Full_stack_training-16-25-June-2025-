const express = require('express')
const todoRoute = express.Router();
const {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todoControllers');

todoRoute.get('/', getTodos);
todoRoute.get('/:id', getTodoById);
todoRoute.post('/', createTodo);
todoRoute.put('/:id', updateTodo);
todoRoute.delete('/:id', deleteTodo);

module.exports = todoRoute;