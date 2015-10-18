(function(){
	angular.module('drApp.Doctor')
	.directive('comentariosDoc', comentariosDoc);

	function comentariosDoc(){
		return {
			restrict: 'E',
			templateUrl: './doctor/comentarios/comentarios.html'
		}
	}

})();