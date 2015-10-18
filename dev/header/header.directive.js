(function () {

angular
	.module('drApp.Header')
	.directive('header', header);

	header.$inject = ['$compile'];

	function header($compile){
		return{
			restrict: 'A', 
			templateUrl: './header/header.html'
		}
	}

})();