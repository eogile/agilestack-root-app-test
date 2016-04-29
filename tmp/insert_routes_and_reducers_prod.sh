#!/bin/bash

curl -v \
    -XPOST \
    -d '{"moduleName":"agilestack-root-app-test", "routes":[{"href":"/todo-list", "ComponentName":"TodoApp", "moduleName":"agilestack-root-app-test"}], "reducers":[{"name":"todoList", "moduleName":"agilestack-root-app-test"}, {"name":"reducer2", "moduleName":"agilestack-root-app-test"}]}'  \
    http://192.168.99.100:8080/api/root/plugins

