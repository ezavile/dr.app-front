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
				template: "<header-doc class='Header-perfil' collapse-header-menu></header-doc><div ui-view></div>" 
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

			.state('admin', {
				url: '/admin',
				template: "<div ui-view></div>"
			})

				/************ ADMIN DOC ************************/

				.state('admin.doctor', {
					url: '/doc',
					template: "<header-doc class='Header-perfil' collapse-header-menu></header-doc><div ui-view></div>"
				})
				.state('admin.doctor.perfil',{
					url: '/perfil',
					templateUrl: './doctor/admin/perfil/perfil.html'
				})
				.state('admin.doctor.comentarios',{
					url: '/comentarios',
					templateUrl: './doctor/admin/comentarios/comentarios.html'
				})
				.state('admin.doctor.mensajes',{
					url: '/mensajes',
					templateUrl: './doctor/admin/mensajes/mensajes.html'
				})
				.state('admin.doctor.citas',{
					url: '/citas',
					templateUrl: './doctor/admin/citas/citas.html'
				})


				/************ ADMIN USER ********************/
				.state('admin.usuario', {
					url: '/usr',
					template: "<header header></header><div ui-view></div>"
				})

				.state('admin.usuario.perfil',{
					url: '/perfil',
					templateUrl: './doctor/admin/perfil/perfil.html'
				})


	}])


})();
