'use strict';

const addTodo = () => {
  return {
    type: "ADD_TODO",
    text: "New todo (" + new Date().toString() + ")"
  }
};

export {addTodo};