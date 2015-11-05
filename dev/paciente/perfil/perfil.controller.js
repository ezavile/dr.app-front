(function(){

	angular
		.module('drApp.Paciente')
		.controller('PacientePerfilController', PacientePerfilController);

		PacientePerfilController.$inject = ['$state', '$scope', 'UsuarioFactory', 'PacienteService'];

		function PacientePerfilController($state, $scope, UsuarioFactory, PacienteService){
			$scope.paciente = angular.copy(UsuarioFactory.getStatus());

			$scope.reset = function(){
				$scope.paciente = angular.copy(UsuarioFactory.getStatus());
			}

			$scope.update = function(){
				console.log($scope.paciente.imgPerfil);
				PacienteService
					.updatePaciente($scope.paciente)
					.then(function(res){
						UsuarioFactory.setStatus(res);
						$state.reload();
					})
					.catch(function(res){
						console.log(res);
					});
			}
		}
})();