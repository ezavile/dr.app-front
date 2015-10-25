(function(){
	angular.module('drApp.Usuario')
	.controller('UsuarioPerfilController', UsuarioPerfilController);

	UsuarioPerfilController.$inject=['$stateParams', '$scope', '$compile', 'DoctorFactory', 'DoctorService'];

	function UsuarioPerfilController($stateParams, $scope, $compile, DoctorFactory, DoctorService){
		console.log($stateParams.id);
		$scope.doctor = {};
		$scope.doctor.imagenes = ['./img/buscador_bg.jpg', './img/doctor1.jpg'];

		/*$scope.doctor.agendarCita = function(){
			//DoctorService.addDoctor({'nombre':'Alex', 'edad': 16})
			//console.log(DoctorService.getDoctores())
		}*/
	}

})();