'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var addTodo = function addTodo() {
  return {
    type: "ADD_TODO",
    text: "New todo (" + new Date().toString() + ")"
  };
};

exports.addTodo = addTodo;