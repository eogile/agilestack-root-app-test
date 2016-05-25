'use strict';

var reducers = require('./lib/reducers');
var components = require('./lib/components_todo');
var otherComponents = require('./lib/components');
var appComponents = require('./lib/app.component');
var homeComponent = require('./lib/home.component');
var loginComponent = require('./lib/login.component');
var outerComponent = require('./lib/outer.component');
var innerComponent = require('./lib/inner.component');

module.exports = {
  todoList: reducers.todoList,
  reducer2: reducers.reducer2,
  TodoListComponent : components.TodoList,
  TodoComponent : components.Todo,
  AddTodoButtonComponent : components.AddTodoButton,
  TodoApp:otherComponents.component2,
  App: appComponents.App,
  Main: appComponents.Main,
  HomePage: homeComponent.HomePage,
  LoginPage: loginComponent.LoginPage,
  InnerComponent: innerComponent.InnerComponent,
  OuterComponent: outerComponent.OuterComponent
};
