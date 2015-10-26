(function(){
	angular.module('drApp.Usuario')
	.controller('UsuarioListadoController', UsuarioListadoController);

	UsuarioListadoController.$inject=['$stateParams', 'DoctorFactory', 'DoctorService'];

	function UsuarioListadoController($stateParams, DoctorFactory, DoctorService){
		//console.log($stateParams.especialidad);

		/*console.log(DoctorFactory.getDoctores())
		console.log("Primer insercion")
		DoctorFactory.addDoctor({'nombre':'Alex', 'edad': 16})
		console.log(DoctorFactory.getDoctores())*/

		//console.log(DoctorService.getDoctores())
		DoctorService.addDoctor({'nombre':'Alex', 'edad': 16})
		//console.log(DoctorService.getDoctores())
	
	}

})();