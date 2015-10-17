(function(){
	
	angular.module('drApp.Doctor')
	.directive('agendarCita',  agendarCita);

	function agendarCita(){
		return {
			templateUrl: './doctor/agendar/agendar.html'
		}
	}

})();