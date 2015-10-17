(function(){
	//appTec - modulo principal (aplicacion)
	//modulo de rutas - ui-router
	angular.module('app', [
		'ui.router',
		'app.Operacion'
		]
	)
	.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){ 

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('operacion', {
				url: '/',
				templateUrl: './operacion/operacion.html',
				controller: 'OperacionController'
			})

	}])


})();
