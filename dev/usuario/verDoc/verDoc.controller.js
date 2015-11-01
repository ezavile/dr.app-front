(function(){
	angular.module('drApp.Usuario')
	.controller('UsuarioVerDocController', UsuarioVerDocController);

	UsuarioVerDocController.$inject=['$stateParams', '$scope', 'DoctorService'];

	function UsuarioVerDocController($stateParams, $scope, DoctorService){
		var id = $stateParams.doctor;

		$scope.doctor = {};

		DoctorService
			.doctorById(id)
			.then(function(res){
				$scope.doctor = res;
				$scope.galeria = [$scope.doctor.foto1, $scope.doctor.foto2, $scope.doctor.foto3];
			})
			.catch(function(res){
				console.log(res);
			});


	}

})();