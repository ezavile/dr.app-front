(function(){
	angular.module('drApp.Doctor')
	.controller('DoctorListadoController', DoctorListadoController);

	DoctorListadoController.$inject=['$stateParams'];

	function DoctorListadoController($stateParams){
		console.log($stateParams.especialidad);
	}

})();