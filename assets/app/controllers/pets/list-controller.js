(function( ng, app ){

	"use strict";

	app.controller(
		"pets.ListController",
		function( $scope, $location, $q, $routeParams, categoryService, petService, _ ) {


			// --- Define Controller Methods. ------------------- //


			// I apply the remote data to the local view model.
			function applyRemoteData( category, pets ) {

				$scope.category = category;
				$scope.pets = _.sortOnProperty( pets, "name", "asc" );

				$scope.setWindowTitle( category.name );
				
			}


			// I load the remote data from the server.
			function loadRemoteData() {

				$scope.isLoading = true;

				var promise = $q.all(
					[
						categoryService.getCategoryByID( $scope.categoryID ),
						petService.getPetsByCategoryID( $scope.categoryID )
					]
				);

				promise.then(
					function( response ) {

						$scope.isLoading = false;

						applyRemoteData( response[ 0 ], response[ 1 ] );

					},
					function( response ) {

						// The category couldn't be loaded for some reason - possibly someone hacking with the URL. 
						$location.path( "/pets" );

					}
				);

			}


			// --- Define Scope Methods. ------------------------ //


			// ...


			// --- Define Controller Variables. ----------------- //





			// --- Define Scope Variables. ---------------------- //


			// Get the ID of the category.
			$scope.categoryID = $routeParams[ "categoryID" ];

			// I flag that data is being loaded.
			$scope.isLoading = true;

			// I am the category and the list of pets that are being viewed.
			$scope.category = null;
			$scope.pets = null;


			// --- Bind To Scope Events. ------------------------ //





			// --- Initialize. ---------------------------------- //


			// Set the interim title.
			$scope.setWindowTitle( "Loading Category" );

			// Load the "remote" data.
			loadRemoteData();


		}
	);

})( angular, Demo );