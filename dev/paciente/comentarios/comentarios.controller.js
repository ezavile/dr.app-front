(function(){
	angular
		.module('drApp.Paciente')
		.controller('PacienteComentariosController', PacienteComentariosController);

		PacienteComentariosController.$inject = ['$scope'];

		function PacienteComentariosController($scope){
			//scope comentarios coming from verDoc
			//$scope.comentarios
		}
})();