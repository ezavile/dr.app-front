(function(){
	//appTec - modulo principal (aplicacion)
	//modulo de rutas - ui-router
	angular.module('drApp', [
			'ui.router',
			'drApp.Helpers',
			'drApp.Header',
			'drApp.Login',
			'drApp.Doctor',
			'drApp.Registro'
		]
	)
	.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){ 

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('main', {
				url: '/',
				templateUrl: './principal/principal.html'
			})

			.state('doctor',{
				url: '/doctor',
				template: "<div ui-view></div>" 
			})

			.state('doctor.listado',{
				url: '/listado/:especialidad',
				templateUrl: './doctor/listado/listado.html',
				controller: 'DoctorListadoController'
			})
			.state('doctor.perfil',{
				url: '/:id',
				templateUrl: './doctor/perfil/perfil.html',
				controller: 'DoctorPerfilController'
			})

	}])


})();
