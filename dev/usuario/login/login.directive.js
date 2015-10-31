(function () {

	angular
		.module('drApp.Usuario')
		.directive('login', login);

		function login(){
			return{
				restrict: 'E',
				templateUrl: './usuario/login/login.html',
				controller: 'LoginController'
			}
		}

})();