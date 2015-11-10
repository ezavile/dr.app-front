(function(){

	angular
		.module('drApp.Doctor')
		.controller('DoctorPerfilController', DoctorPerfilController);

		DoctorPerfilController.$inject = ['$state', '$scope', 'HelpersFactory', 'DoctorFactory', 'DoctorService', 'UsuarioFactory'];

		function DoctorPerfilController($state, $scope, HelpersFactory, DoctorFactory, DoctorService, UsuarioFactory){
			$scope.doctor = angular.copy(DoctorFactory.getDoctor());
			var helper = HelpersFactory;
			var usuario = UsuarioFactory;

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
						DoctorFactory.setDoctor(res.doctor);
						helper.notify(res);
						$state.reload();
					})
					.catch(function(res){
						helper.notify(res);
					});
			}


			$scope.deleteDoctor = function(){
				DoctorService
					.deleteDoctor($scope.doctor)
					.then(function(res){
						helper.notify(res);
						if(res.estatus=='success'){
							usuario.logout();
							$state.go('usuario.principal');
						}
					})
					.catch(function(res){
						console.log(res);
						helper.notify(res);
					});
			}
		}
})();