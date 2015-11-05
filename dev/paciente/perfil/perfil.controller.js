(function(){

	angular
		.module('drApp.Paciente')
		.controller('PacientePerfilController', PacientePerfilController);

		PacientePerfilController.$inject = ['$state', '$scope', 'PacienteFactory', 'PacienteService'];

		function PacientePerfilController($state, $scope, PacienteFactory, PacienteService){
			$scope.paciente = angular.copy(PacienteFactory.getInfo());

			$scope.reset = function(){
				$scope.paciente = angular.copy(PacienteFactory.getInfo());
			}

			$scope.putPaciente = function(){
				PacienteService
					.putPaciente($scope.paciente)
					.then(function(res){
						PacienteFactory.setInfo(res);
						$state.reload();
					})
					.catch(function(res){
						console.log(res);
					});
			}
		}
})();