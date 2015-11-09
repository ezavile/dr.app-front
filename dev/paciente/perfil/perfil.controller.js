(function(){

	angular
		.module('drApp.Paciente')
		.controller('PacientePerfilController', PacientePerfilController);

		PacientePerfilController.$inject = ['$state', '$scope', 'PacienteFactory', 'PacienteService', 'HelpersFactory', 'UsuarioFactory'];

		function PacientePerfilController($state, $scope, PacienteFactory, PacienteService, HelpersFactory, UsuarioFactory){
			$scope.paciente = angular.copy(PacienteFactory.getInfo());
			var helper = HelpersFactory;
			var usuario = UsuarioFactory;

			$scope.reset = function(){
				$scope.paciente = angular.copy(PacienteFactory.getInfo());
			}

			$scope.deletePaciente = function(){
				PacienteService
					.deletePaciente($scope.paciente)
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

			$scope.putPaciente = function(){
				PacienteService
					.putPaciente($scope.paciente)
					.then(function(res){
						PacienteFactory.setInfo(res.paciente);
						helper.notify(res);
						$state.reload();
					})
					.catch(function(res){
						helper.notify(res);
					});
			}
		}
})();