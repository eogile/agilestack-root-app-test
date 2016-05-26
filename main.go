package main

import (
	"net/http"

	"log"

	"github.com/eogile/agilestack-utils/plugins"
	"github.com/eogile/agilestack-utils/plugins/components"
	"github.com/eogile/agilestack-utils/plugins/menu"
	"github.com/eogile/agilestack-utils/plugins/registration"
)

func main() {
	http.HandleFunc("/status", plugins.HandleHttpStatusUrl)
	go initPlugin()
	http.ListenAndServe(":8080", nil)
}

func initPlugin() {

	config := plugins.FullRegistration{
		PluginName:  "agilestack-root-app-test",
		SourcesPath: "/sources/",
		Components: &components.Components{
			PluginName:    "agilestack-root-app-test",
			AppComponent:  "App",
			MainComponent: "Main",
		},
		Menu: &menu.Menu{
			PluginName: "agilestack-root-app-test",
			Entries: []menu.MenuEntry{
				menu.MenuEntry{
					Name:    "Home",
					Route:   "/",
					Weight:  10,
					Entries: []menu.MenuEntry{},
				},
				menu.MenuEntry{
					Name:    "Login",
					Route:   "/login",
					Weight:  10,
					Entries: []menu.MenuEntry{},
				},
				menu.MenuEntry{
					Name:    "Todo application",
					Route:   "/todo-list",
					Weight:  10,
					Entries: []menu.MenuEntry{},
				},
				menu.MenuEntry{
					Name:   "Outer",
					Route:  "/outer",
					Weight: 10,
					Entries: []menu.MenuEntry{
						menu.MenuEntry{
							Name:    "Inner",
							Route:   "/outer/inner",
							Weight:  10,
							Entries: []menu.MenuEntry{},
						},
					},
				},
			},
		},
		Config: &registration.PluginConfiguration{
			PluginName: "agilestack-root-app-test",
			Reducers: []string{
				"todoList",
				"reducer2",
			},
			Routes: []registration.Route{
				registration.Route{
					Href:          "/login",
					ComponentName: "LoginPage",
					Routes:        []registration.SubRoute{},
					Type:          "full-screen-route",
					IsIndex:       false,
				},
				registration.Route{
					ComponentName: "HomePage",
					Routes:        []registration.SubRoute{},
					Type:          "content-route",
					IsIndex:       true,
				},
				registration.Route{
					Href:          "/todo-list",
					ComponentName: "TodoApp",
					Routes:        []registration.SubRoute{},
					Type:          "content-route",
					IsIndex:       false,
				},
				registration.Route{
					Href:          "/outer",
					ComponentName: "OuterComponent",
					Routes: []registration.SubRoute{
						registration.SubRoute{
							Href:          "inner",
							ComponentName: "InnerComponent",
							Routes:        []registration.SubRoute{},
						},
					},
					Type:    "content-route",
					IsIndex: false,
				},
			},
		},
	}
	if err := plugins.Register(config); err != nil {
		log.Fatalln("Error while initializing the plugin:", err)

	}
}
