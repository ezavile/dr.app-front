(function () {

	angular
		.module('drApp.Usuario')
		.controller('LoginController', LoginController);

		LoginController.$inject = ['$scope', '$sessionStorage', '$state', 'HelpersFactory'];

		function LoginController($scope, $sessionStorage, $state, HelpersFactory){ 
			var helper = HelpersFactory;
			$scope.usr = {};
			$scope.login = function(){
				if($scope.usr.usuario === 'paciente' && $scope.usr.password === 'paciente'){
					$scope.usr.tipo = 'paciente';
				}
				if($scope.usr.usuario === 'doctor' && $scope.usr.password === 'doctor'){
					$scope.usr.tipo = 'doctor';
				}
				$sessionStorage.put('usuarioActual', $scope.usr);
				$state.reload();
				helper.popupClose(); 
			}
		}

})();