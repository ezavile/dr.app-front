(function () {

	angular
		.module('drApp.Usuario')
		.controller('LoginController', LoginController);

		LoginController.$inject = ['$scope', '$state', 'LoginService', 'UsuarioFactory', 'HelpersFactory'];

		function LoginController($scope, $state, LoginService, UsuarioFactory, HelpersFactory){ 
			var helper = HelpersFactory;
			var usuario = UsuarioFactory;

			$scope.usr = {};
			$scope.login = function(){
				LoginService
					.login($scope.usr)
					.then(function(res){
						if(res.tipoUsuario){
							usuario.setStatus(res);
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