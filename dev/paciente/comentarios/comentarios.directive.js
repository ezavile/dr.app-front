(function(){
	angular.module('drApp.Paciente')
	.directive('comentariosDoc', comentariosDoc);

	function comentariosDoc(){
		return {
			restrict: 'E',
			scope: {
				comentarios: '='
			},
			controller: 'PacienteComentariosController',
			templateUrl: './paciente/comentarios/comentarios.html'
		}
	}

})();