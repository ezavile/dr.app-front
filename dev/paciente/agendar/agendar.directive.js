(function(){
	
	angular.module('drApp.Paciente')
	.directive('agendarCita',  agendarCita);

	function agendarCita(){
		return {
			templateUrl: './paciente/agendar/agendar.html'
		}
	}

})();