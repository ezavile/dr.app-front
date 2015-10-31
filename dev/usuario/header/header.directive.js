(function () {

	angular
		.module('drApp.Usuario')
		.directive('headerUsuario', headerUsuario);

		function headerUsuario(){
			return{
				restrict: 'E',
				templateUrl: './usuario/header/header.html'
			}
		}

})();