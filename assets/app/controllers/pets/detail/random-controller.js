(function( ng, app ){

	"use strict";

	app.controller(
		"pets.detail.RandomController",
		function( $scope, $routeParams, petService, _ ) {


			// --- Define Controller Methods. ------------------- //


			// I apply the remote data to the local view model.
			function applyRemoteData( pet ) {

				$scope.pet = pet;

			}


			// I load the "remote" data from the server.
			function loadRemoteData() {

				$scope.isLoading = true;

				var promise = petService.getRandomPetExcluding( $scope.categoryID, $scope.petID );

				promise.then(
					function( response ) {

						$scope.isLoading = false;

						applyRemoteData( response );

					},
					function( response ) {

						$scope.openModalWindow( "error", "For some reason we couldn't load a random pet. Try refreshing your browser." );

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

			// I hold the pet to render.
			$scope.pet = null;


			// --- Bind To Scope Events. ------------------------ //





			// --- Initialize. ---------------------------------- //


			// Load the "remote" data.
			loadRemoteData();


		}
	);

})( angular, Demo );