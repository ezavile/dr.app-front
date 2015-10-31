(function () {

angular
	.module('drApp.Paciente')
	.directive('headerPaciente', headerPaciente);

	function headerPaciente(){
		return{
			restrict: 'E', 
			templateUrl: './paciente/header/header.html'
		}
	}

})();