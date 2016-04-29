#!/bin/bash

curl -v \
    -XPOST \
    -d '{"moduleName":"agilestack-root-app-test", "routes":[{"href":"/todo-list", "ComponentName":"TodoApp", "moduleName":"root-app-test"}], "reducers":[{"name":"todoList", "moduleName":"root-app-test"}, {"name":"reducer2", "moduleName":"root-app-test"}]}'  \
    http://localhost:8080/plugins

