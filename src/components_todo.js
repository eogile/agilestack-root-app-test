'use strict';

import React from 'react';

const Todo = ({todo}) => (<li>{todo.text}</li>);

const TodoList = ({todoList}) => {
  return (
    <ul>
      {
        todoList.map((todo, index) => <Todo key={'todo'+index} todo={todo}/>)
      }
    </ul>
  );
}

const AddTodoButton = ({onClickHandler}) => (<button onClick={onClickHandler}>Add to-do</button>);

export {Todo, TodoList, AddTodoButton}