(function(){
	angular.module('drApp.Usuario')
	.controller('UsuarioVerDocController', UsuarioVerDocController);

	UsuarioVerDocController.$inject=['$stateParams', '$scope', 'DoctorService', 'DoctorFactory', 'PacienteFactory'];

	function UsuarioVerDocController($stateParams, $scope, DoctorService, DoctorFactory, PacienteFactory){
		var id = $stateParams.doctor;
		$scope.paciente = PacienteFactory.getInfo();

		$scope.doctor = {};

		DoctorService
			.doctorById(id)
			.then(function(res){
				$scope.doctor = res;
				$scope.galeria = [$scope.doctor.foto1, $scope.doctor.foto2, $scope.doctor.foto3];
				DoctorFactory.setDoctor(res);
			})
			.catch(function(res){
				console.log(res);
			});

		DoctorService
			.getComentarios(id)
			.then(function(res){
				DoctorFactory.setComentarios(res);
				$scope.comentarios = res;
			})
			.catch(function(res){
				console.log(res);
			});

		DoctorService
			.getCitas(id)
			.then(function(res){
				DoctorFactory.setCitas(res);
			})
			.catch(function(res){
				console.log(res);
			});

	}

})();