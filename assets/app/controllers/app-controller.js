(function( ng, app ){

	"use strict";

	app.controller(
		"AppController",
		function( $scope, $route, $routeParams, $location, _ ) {


			// --- Define Controller Methods. ------------------- //





			// --- Define Scope Methods. ------------------------ //


			// I get the current time for use when display the time a controller was rendered.
			// This way, we can see the difference between when a controller was instantiated
			// and when it was re-populated with data.
			$scope.getInstanceTime = function() {

				var now = new Date();
				var timeString = now.toTimeString();
				var instanceTime = timeString.match( /\d+:\d+:\d+/i );

				return( instanceTime[ 0 ] );

			};


			// TODO: Flesh this out - for now, just trying to create a wrapper for alert().
			$scope.openModalWindow = function( modalType ) {

				alert( arguments[ 1 ] || "Opps: Something went wrong." );

			};


			// I update the title tag.
			$scope.setWindowTitle = function( title ) {

				$scope.windowTitle = title;

			};


			// --- Define Controller Variables. ----------------- //





			// --- Define Scope Variables. ---------------------- //


			// Set up the default window title.
			$scope.windowTitle = "Adopt-A-Pet";


			// --- Bind To Scope Events. ------------------------ //





			// --- Initialize. ---------------------------------- //


			// ...


		}
	);

})( angular, Demo );