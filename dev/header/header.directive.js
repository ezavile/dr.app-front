(function () {

angular
	.module('drApp.Header')
	.directive('header', header);

	function header(){
		return{
			restrict: 'A', 
			templateUrl: './header/header.html'
		}
	}

})();