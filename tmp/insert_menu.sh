#!/bin/bash

curl -v -XPOST \
    -d '[{"pluginName":"root-app-test", "name":"Todo list application", "route":"/todo-list", "weight":1}]' \
    http://localhost:8080/menu-entries