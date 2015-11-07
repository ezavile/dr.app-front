(function(){

	angular
		.module('drApp.Doctor')
		.controller('DoctorPerfilController', DoctorPerfilController);

		DoctorPerfilController.$inject = ['$state', '$scope', 'DoctorFactory', 'DoctorService'];

		function DoctorPerfilController($state, $scope, DoctorFactory, DoctorService){
			$scope.doctor = angular.copy(DoctorFactory.getDoctor());

			$scope.reset = function(){
				$scope.doctor = angular.copy(DoctorFactory.getDoctor());
			}

			//obtener las especialidades
			DoctorService.getEspecialidades()
				.then(function(res){
					$scope.especialidades = res;
				})
				.catch(function(res){
					console.log(res);
				});

			$scope.putDoctor = function(){
				DoctorService
					.putDoctor($scope.doctor)
					.then(function(res){
						DoctorFactory.setDoctor(res);
						$state.reload();
					})
					.catch(function(res){
						console.log(res);
					});
			}
		}
})();