package main

import (
	"log"
	"net/http"

	"github.com/eogile/agilestack-utils/files"
	"github.com/eogile/agilestack-utils/plugins"
	"github.com/eogile/agilestack-utils/plugins/registration"
	"github.com/eogile/agilestack-utils/plugins/menu"
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

	if err := launchBuild(); err != nil {
		log.Fatalln("Error while building the application:", err)
	}

	if err := publishMenu(); err != nil {
		log.Fatalln("Error while publishing menu:", err)
	}
}

func moveSources() error {
	destination := "/shared/root-app-builder/web_modules/agilestack-root-app-test"
	from := "/sources/"
	return files.CopyDir(from, destination)
}

func publishRoutesAndReducers() error {
	config := registration.PluginConfiguration{
		PluginName: "agilestack-root-app-test",
		Reducers:   []string{
			"todoList",
			"reducer2",
		},
		Routes:     []registration.Route{
			registration.Route{
				Href:"/todo-list",
				ComponentName:"TodoApp",
			},
		},
	}
	return registration.StoreRoutesAndReducers(&config)
}

func launchBuild() error {
      return registration.LaunchApplicationBuild()
}

func publishMenu() error {
	m := menu.Menu{
		PluginName:"agilestack-root-app-test",
		Entries: []menu.MenuEntry{
			menu.MenuEntry{
				Name:"Todo application",
				Route:"/todo-list",
				Weight: 10,
				Entries: []menu.MenuEntry{},
			},
		},
	}
	return menu.StoreMenu(&m)
}
