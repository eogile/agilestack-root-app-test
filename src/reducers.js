'use strict';

export function todoList(state=[], action) {
  switch (action.type) {
    case "ADD_TODO":
      console.log("Reducer - add Todo");
      return [
        ...state,
        {text: action.text}
      ];
    default:
      return state;
  }
}

export function reducer2(state={}) {
  console.log("Reducer2 power");
  return state;
}