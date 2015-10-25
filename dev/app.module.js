(function(){
	//appTec - modulo principal (aplicacion)
	//modulo de rutas - ui-router
	angular.module('drApp', [
			'ui.router',
			'drApp.Helpers',
			'drApp.Usuario',
			'drApp.Doctor'
		]
	)
	.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){ 

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('usuario', {
				url: '',
				templateUrl: './usuario/usuario.html'
			})
				.state('usuario.principal',{
					url: '/',
					templateUrl: "./usuario/principal/principal.html" 
				})
				.state('usuario.listado',{
					url: '/doctores/:especialidad',
					templateUrl: './doctor/listado/listado.html',
					controller: 'DoctorListadoController'
				})
				.state('usuario.perfil',{
					url: '/doctor/:id',
					templateUrl: './doctor/perfil/perfil.html',
					controller: 'DoctorPerfilController'
				})

				/************ DOC ************************/

			.state('doctor', {
				url: '',
				templateUrl: './doctor/doctor.html'
			})
				.state('doctor.perfil',{
					url: '/perfil',
					templateUrl: './doctor/admin/perfil/perfil.html'
				})
				.state('doctor.comentarios',{
					url: '/comentarios',
					templateUrl: './doctor/admin/comentarios/comentarios.html'
				})
				.state('doctor.mensajes',{
					url: '/mensajes',
					templateUrl: './doctor/admin/mensajes/mensajes.html'
				})
				.state('doctor.citas',{
					url: '/citas',
					templateUrl: './doctor/admin/citas/citas.html'
				})

	}])


})();
