(function () {

	angular
		.module('drApp.Usuario')
		.controller('LoginController', LoginController);

		LoginController.$inject = ['$scope', '$state', 'UsuarioFactory', 'HelpersFactory'];

		function LoginController($scope, $state, UsuarioFactory, HelpersFactory){ 
			var helper = HelpersFactory;
			var usuario = UsuarioFactory;

			$scope.usr = {};
			$scope.login = function(){
				if($scope.usr.usuario === 'paciente' && $scope.usr.password === 'paciente'){
					$scope.usr.tipo = 'paciente';
				}
				if($scope.usr.usuario === 'doctor' && $scope.usr.password === 'doctor'){
					$scope.usr.tipo = 'doctor';
				}
				console.log($scope.usr)
				usuario.setStatus($scope.usr);
				$state.reload();
				helper.popupClose(); 
			}
		}

})();