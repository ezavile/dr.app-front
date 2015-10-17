(function(){
	//appTec - modulo principal (aplicacion)
	//modulo de rutas - ui-router
	angular.module('drApp', [
			'ui.router',
			'drApp.Helpers',
			'drApp.Header',
			'drApp.Login',
			'drApp.Registro'
		]
	)
	.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){ 

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('principal', {
				url: '/',
				templateUrl: './principal/principal.html'
			})

	}])


})();
