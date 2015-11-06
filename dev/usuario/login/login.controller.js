(function () {

	angular
		.module('drApp.Usuario')
		.controller('LoginController', LoginController);

		LoginController.$inject = ['$scope', '$state', 'LoginService', 'UsuarioFactory', 'PacienteFactory', 'HelpersFactory'];

		function LoginController($scope, $state, LoginService, UsuarioFactory, PacienteFactory, HelpersFactory){ 
			var helper = HelpersFactory;
			var usuario = UsuarioFactory;
			var paciente = PacienteFactory;

			$scope.usr = {};
			$scope.login = function(){
				LoginService
					.login($scope.usr)
					.then(function(res){
						if(res.tipoUsuario === 'paciente'){
							usuario.setTipoUsuario(res.tipoUsuario);
							delete res.tipoUsuario;
							paciente.setInfo(res);
							$state.reload();
							helper.popupClose();
						}
					})
					.catch(function(res){
						console.log(res);
					});
			}
		}

})();