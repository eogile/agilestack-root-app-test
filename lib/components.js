'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.component2 = exports.component1 = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _components_todo = require('./components_todo');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Presentational component
 */
var component1 = function component1(_ref) {
  var todoList = _ref.todoList;
  var onClickHandler = _ref.onClickHandler;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'To-do application'
    ),
    _react2.default.createElement(_components_todo.TodoList, { todoList: todoList }),
    _react2.default.createElement(_components_todo.AddTodoButton, { onClickHandler: onClickHandler })
  );
};

/**
 * Container component
 *
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    todoList: state.todoList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClickHandler: function onClickHandler() {
      dispatch((0, _actions.addTodo)());
    }
  };
};

var component2 = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(component1);

exports.component1 = component1;
exports.component2 = component2;