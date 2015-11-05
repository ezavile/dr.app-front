(function(){
	angular
		.module('drApp.Paciente')
		.controller('PacienteHeaderController', PacienteHeaderController);

		PacienteHeaderController.$inject = ['$scope', 'PacienteFactory'];

		function PacienteHeaderController($scope, PacienteFactory){
			$scope.paciente = PacienteFactory.getInfo();
		}
})();