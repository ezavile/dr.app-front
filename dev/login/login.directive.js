(function () {

	angular
		.module('drApp.Login')
		.directive('login', login);

		function login(){
			return{
				restrict: 'E',
				templateUrl: './login/login.html',
				link: function(){
					
				}
			}
		}

})();