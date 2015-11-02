(function(){
	angular
		.module('drApp.Paciente')
		.controller('PacienteHeaderController', PacienteHeaderController);

		PacienteHeaderController.$inject = ['$scope', 'UsuarioFactory'];

		function PacienteHeaderController($scope, UsuarioFactory){
			$scope.paciente = UsuarioFactory.getStatus();
		}
})();