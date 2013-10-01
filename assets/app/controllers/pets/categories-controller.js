(function( ng, app ){

	"use strict";

	app.controller(
		"pets.CategoriesController",
		function( $scope, categoryService, _ ) {


			// --- Define Controller Methods. ------------------- //


			// I apply the remote data to the local view model.
			function applyRemoteData( categories ) {

				$scope.categories = _.sortOnProperty( categories, "name", "asc" );

			}


			// I load the "remote" data from the server.
			function loadRemoteData() {

				$scope.isLoading = true;

				var promise = categoryService.getCategories();

				promise.then(
					function( response ) {

						$scope.isLoading = false;

						applyRemoteData( response );

					},
					function( response ) {

						$scope.openModalWindow( "error", "For some reason we couldn't load the categories. Try refreshing your browser." );

					}
				);

			}


			// --- Define Scope Methods. ------------------------ //


			// ...


			// --- Define Controller Variables. ----------------- //





			// --- Define Scope Variables. ---------------------- //


			// I flag that data is being loaded.
			$scope.isLoading = true;

			// I hold the categories to render.
			$scope.categories = [];


			// --- Bind To Scope Events. ------------------------ //





			// --- Initialize. ---------------------------------- //


			// Set the window title.
			$scope.setWindowTitle( "Pets" );

			// Load the "remote" data.
			loadRemoteData();


		}
	);

})( angular, Demo );