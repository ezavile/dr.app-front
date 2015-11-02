(function(){
	angular.module('drApp.Paciente')
	.directive('mensajeDoc', mensajeDoc);

	function mensajeDoc(){
		return {
			restrict: 'E',
			controller: 'PacienteMensajeController',
			templateUrl: './paciente/mensaje/mensaje.html'
		}
	}

})();