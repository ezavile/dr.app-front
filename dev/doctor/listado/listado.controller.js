(function(){
	angular.module('drApp.Doctor')
	.controller('DoctorListadoController', DoctorListadoController);

	DoctorListadoController.$inject=['$stateParams', 'DoctorFactory', 'DoctorService'];

	function DoctorListadoController($stateParams, DoctorFactory, DoctorService){
		console.log($stateParams.especialidad);

		/*console.log(DoctorFactory.getDoctores())
		console.log("Primer insercion")
		DoctorFactory.addDoctor({'nombre':'Alex', 'edad': 16})
		console.log(DoctorFactory.getDoctores())*/

		console.log(DoctorService.getDoctores())
		DoctorService.addDoctor({'nombre':'Alex', 'edad': 16})
		console.log(DoctorService.getDoctores())
	
	}

})();