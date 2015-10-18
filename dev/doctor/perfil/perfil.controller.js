(function(){
	angular.module('drApp.Doctor')
	.controller('DoctorPerfilController', DoctorPerfilController);

	DoctorPerfilController.$inject=['$stateParams', '$scope', '$compile', 'DoctorFactory', 'DoctorService'];

	function DoctorPerfilController($stateParams, $scope, $compile, DoctorFactory, DoctorService){
		console.log($stateParams.id);
		$scope.doctor = {};
		$scope.doctor.imagenes = ['./img/buscador_bg.jpg', './img/doctor1.jpg'];

		/*$scope.doctor.agendarCita = function(){
			//DoctorService.addDoctor({'nombre':'Alex', 'edad': 16})
			//console.log(DoctorService.getDoctores())
		}*/
	}

})();