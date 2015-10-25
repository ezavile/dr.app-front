(function () {

	angular
		.module('drApp.Usuario')
		.directive('login', login);

		login.$inject = ['$sessionStorage'];

		function login($sessionStorage){
			return{
				restrict: 'E',
				templateUrl: './usuario/login/login.html',
				controller: ['$sessionStorage', function(){
					$sessionStorage.put('myKey', 'myValue');
				}]
			}
		}

})();