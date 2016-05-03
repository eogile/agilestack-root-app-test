'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todoList = todoList;
exports.reducer2 = reducer2;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function todoList() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case "ADD_TODO":
      console.log("Reducer - add Todo");
      return [].concat(_toConsumableArray(state), [{ text: action.text }]);
    default:
      return state;
  }
}

function reducer2() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  console.log("Reducer2 power");
  return state;
}