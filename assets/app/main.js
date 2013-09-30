
// Create an application module for our demo.
var Demo = angular.module( "Demo", ['angularNestedViews'] );

// Configure the routing. The $routeProvider will be automatically injected into 
// the configurator.
Demo.config(
	function( $actionRouteProvider ){

		// Typically, when defining routes, you will map the route to a Template to be
		// rendered; however, this only makes sense for simple web sites. When you are 
		// building more complex applications, with nested navigation, you probably need 
		// something more complex. In this case, we are mapping routes to render "Actions" 
		// rather than a template.
        $actionRouteProvider
			.whenAction("splash.home", "/home")

            .abstractAction("standard.pets", "/pets")
			.whenAction("standard.pets.categories", "")
            .whenAction('standard.pets.list', "/:categoryID")

            .abstractAction("standard.pets.detail", "/:categoryID/:petID")
            .whenAction("standard.pets.detail.background", "")
            .whenAction("standard.pets.detail.diet", "/diet")
            .whenAction("standard.pets.detail.medicalHistory", "/medical-history")

            .whenAction("standard.contact", "/contact")

            .otherwise({redirectTo: "/home"})
		;

	}
);
