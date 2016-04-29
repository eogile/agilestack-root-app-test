'use strict';

var reducers = require('./lib/reducers');
var components = require('./lib/components_todo');
var otherComponents = require('./lib/components');

module.exports = {
  todoList: reducers.todoList,
  reducer2: reducers.reducer2,
  TodoListComponent : components.TodoList,
  TodoComponent : components.Todo,
  AddTodoButtonComponent : components.AddTodoButton,
  TodoApp:otherComponents.component2
};