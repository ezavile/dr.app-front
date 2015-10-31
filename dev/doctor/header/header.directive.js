(function () {

angular
	.module('drApp.Doctor')
	.directive('headerDoctor', headerDoctor);

	function headerDoctor(){
		return{
			restrict: 'E',
			templateUrl: './doctor/header/header.html'
		}
	}

})();