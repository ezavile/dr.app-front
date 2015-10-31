(function(){
	angular.module('drApp.Paciente')
	.directive('comentariosDoc', comentariosDoc);

	function comentariosDoc(){
		return {
			restrict: 'E',
			templateUrl: './paciente/comentarios/comentarios.html'
		}
	}

})();