(function(){
	//appTec - modulo principal (aplicacion)
	//modulo de rutas - ui-router
	angular.module('drApp', [
			'ui.router',
			'drApp.Helpers',
			'drApp.Usuario',
			'drApp.Doctor',
			'drApp.Paciente'
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
					templateUrl: './usuario/listado/listado.html',
					controller: 'UsuarioListadoController'
				})
				.state('usuario.perfil',{
					url: '/:id',
					templateUrl: './usuario/perfil/perfil.html',
					controller: 'UsuarioPerfilController'
				})

			/************ DOC ************************/

			.state('doctor', {
				url: '/doctor',
				templateUrl: './doctor/doctor.html'
			})
				.state('doctor.perfil',{
					url: '/perfil',
					templateUrl: './doctor/perfil/perfil.html'
				})
				.state('doctor.comentarios',{
					url: '/comentarios',
					templateUrl: './doctor/comentarios/comentarios.html'
				})
				.state('doctor.mensajes',{
					url: '/mensajes',
					templateUrl: './doctor/mensajes/mensajes.html'
				})
				.state('doctor.citas',{
					url: '/citas',
					templateUrl: './doctor/citas/citas.html'
				})

			/************ Paciente ************************/

			.state('paciente', {
				url: '/paciente',
				templateUrl: './paciente/paciente.html'
			})
				.state('paciente.perfil',{
					url: '/perfil',
					templateUrl: './paciente/perfil/perfil.html'
				})

	}])


})();
