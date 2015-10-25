(function () {

angular
	.module('drApp.Usuario')
	.directive('header', header);

	function header(){
		return{
			restrict: 'A', 
			templateUrl: './usuario/header/header.html'
		}
	}

})();