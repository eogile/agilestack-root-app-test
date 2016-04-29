#!/bin/bash

curl -v -XPOST \
    -d '[{"pluginName":"root-app-test", "name":"Todo list application", "route":"/todo-list", "weight":1}]' \
    http://192.168.99.100:8080/api/root/menu-entries