(function () {

angular
	.module('drApp.Doctor')
	.directive('headerDoc', headerDoc);

	function headerDoc(){
		return{
			restrict: 'E', 
			templateUrl: './doctor/header/header.html'
		}
	}

})();