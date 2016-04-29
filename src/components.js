'use strict';

import React from 'react';
import { connect } from 'react-redux';
import {TodoList, AddTodoButton} from './components_todo';
import {addTodo} from './actions';

/*
 * Presentational component
 */
const component1 = ({todoList, onClickHandler}) => (
  <div>
    <h1>To-do application</h1>
    <TodoList todoList={todoList} />
    <AddTodoButton onClickHandler={onClickHandler} />
  </div>
);

/**
 * Container component
 *
 */
const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickHandler: () => {
      dispatch(addTodo())
    }
  }
};

const component2 = connect(
  mapStateToProps,
  mapDispatchToProps
)(component1);

export {component1, component2};