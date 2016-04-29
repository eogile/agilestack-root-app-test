package main

import (
	"log"
	"net/http"

	"github.com/eogile/agilestack-utils/files"
	"github.com/eogile/agilestack-utils/plugins"
)

func main() {
	http.HandleFunc("/status", plugins.HandleHttpStatusUrl)
	go initPlugin()
	http.ListenAndServe(":8080", nil)
}

func initPlugin() {
	err := moveSources()
	if err != nil {
		log.Fatalln("Error while moving sources:", err)
	}

	err = publishRoutesAndReducers()
	if err != nil {
		log.Fatalln("Error while publishing routes and reducers:", err)
	}
}

func moveSources() error {
	destination := "/shared/root-app-builder/web_modules/agilestack-root-app-test"
	from := "/sources/"
	return files.CopyDir(from, destination)
}

func publishRoutesAndReducers() error {
	return nil
}
