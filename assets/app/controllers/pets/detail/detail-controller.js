(function( ng, app ){

	"use strict";

	app.controller(
		"pets.detail.DetailController",
		function( $scope, $location, $q, $routeParams, categoryService, petService, _ ) {


			// --- Define Controller Methods. ------------------- //


			// I apply the remote data to the local view model.
			function applyRemoteData( category, pet ) {

				$scope.category = category;
				$scope.pet = pet;

				$scope.setWindowTitle( pet.name + " - " + pet.breed );

			}


			// I load the "remote" data from the server.
			function loadRemoteData() {

				$scope.isLoading = true;

				var promise = $q.all(
					[
						categoryService.getCategoryByID( $scope.categoryID ),
						petService.getPetByID( $scope.petID )
					]
				);

				promise.then(
					function( response ) {

						$scope.isLoading = false;

						applyRemoteData( response[ 0 ], response[ 1 ] );

					},
					function( response ) {

						// The pet couldn't be loaded for some reason - possibly someone hacking with the URL. 
						$location.path( "/pets/" + $scope.categoryID );

					}
				);

			}


			// --- Define Scope Methods. ------------------------ //


			// ...


			// --- Define Controller Variables. ----------------- //





			// --- Define Scope Variables. ---------------------- //


			// Get the relevant route IDs.
			$scope.categoryID = $routeParams[ "categoryID" ];
			$scope.petID = Number($routeParams[ "petID" ]);

			// I flag that data is being loaded.
			$scope.isLoading = true;

			// I hold the category and pet to render.
			$scope.category = null;
			$scope.pet = null;


			// --- Bind To Scope Events. ------------------------ //





			// --- Initialize. ---------------------------------- //


			// Set the window title.
			$scope.setWindowTitle( "Loading Pet" );

			// Load the "remote" data.
			loadRemoteData();


		}
	);

})( angular, Demo );