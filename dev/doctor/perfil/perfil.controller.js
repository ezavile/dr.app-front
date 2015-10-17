(function(){
	angular.module('drApp.Doctor')
	.controller('DoctorPerfilController', DoctorPerfilController);

	DoctorPerfilController.$inject=['$stateParams', '$scope'];

	function DoctorPerfilController($stateParams, $scope){
		console.log($stateParams.id);
		$scope.doctor = {};
		$scope.doctor.imagenes = ['./img/buscador_bg.jpg', './img/doctor1.jpg'];

		$scope.doctor.agendarCita = function(){
			console.log("agendar")
		}
	}

})();