(function(){
	//appTec - modulo principal (aplicacion)
	//modulo de rutas - ui-router
	angular.module('drApp', [
			'ui.router',
			'swxSessionStorage',
			'drApp.Constants',
			'drApp.Helpers',
			'drApp.Usuario',
			'drApp.Doctor',
			'drApp.Paciente'
		]
	)
	.config(config)
	.run(run);


	config.$inject = ['$stateProvider','$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('usuario', {
				abstract: true,
				url: '',
				templateUrl: './usuario/usuario.html',
				controller: 'UsuarioController'
			})
				.state('usuario.principal',{
					url: '/',
					templateUrl: "./usuario/principal/principal.html",
					controller: 'PrincipalController'
				})
				.state('usuario.listado',{
					url: '/doctores/:especialidad',
					templateUrl: './usuario/listado/listado.html',
					controller: 'UsuarioListadoController'
				})
				.state('usuario.perfil',{
					url: '/doc/:id',
					templateUrl: './usuario/perfil/perfil.html',
					controller: 'UsuarioPerfilController'
				})

			/************ DOC ************************/

			.state('doctor', {
				abstract: true,
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
				abstract: true,
				url: '/paciente',
				templateUrl: './paciente/paciente.html'
			})
				.state('paciente.perfil',{
					url: '/perfil',
					templateUrl: './paciente/perfil/perfil.html'
				})

	}

	run.$inject = ['$rootScope','$state','$stateParams','UsuarioFactory'];

	function run($rootScope, $state, $stateParams, UsuarioFactory) {
		var usuario = UsuarioFactory;

		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
			//validando rutas segun el usuario logeado
			var state = toState.name.split(".");
			state = state[0];
			if(usuario.isLogeado()){
				if(state === 'doctor' && usuario.tipoUsuario() !== 'doctor'){
					$state.go('usuario.principal');
					event.preventDefault();
				}
				if(state === 'paciente' && usuario.tipoUsuario() !== 'paciente'){
					$state.go('usuario.principal');
					event.preventDefault();
				}
			}

		});
	}


})();
