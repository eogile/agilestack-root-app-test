'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddTodoButton = exports.TodoList = exports.Todo = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo = function Todo(_ref) {
  var todo = _ref.todo;
  return _react2.default.createElement(
    'li',
    null,
    todo.text
  );
};

var TodoList = function TodoList(_ref2) {
  var todoList = _ref2.todoList;

  return _react2.default.createElement(
    'ul',
    null,
    todoList.map(function (todo, index) {
      return _react2.default.createElement(Todo, { key: 'todo' + index, todo: todo });
    })
  );
};

var AddTodoButton = function AddTodoButton(_ref3) {
  var onClickHandler = _ref3.onClickHandler;
  return _react2.default.createElement(
    'button',
    { onClick: onClickHandler },
    'Add to-do'
  );
};

exports.Todo = Todo;
exports.TodoList = TodoList;
exports.AddTodoButton = AddTodoButton;