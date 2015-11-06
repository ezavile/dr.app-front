(function(){
	angular
		.module('drApp.Paciente')
		.controller('PacienteMensajeController', PacienteMensajeController);

		PacienteMensajeController.$inject = ['$scope', 'DoctorFactory', 'PacienteFactory', 'HelpersService'];

		function PacienteMensajeController($scope, DoctorFactory, PacienteFactory, HelpersService){
			$scope.paciente = PacienteFactory.getInfo();
			var doctor = DoctorFactory.getDoctor();

			$scope.postMensaje = function(){
				if($scope.paciente){
					var req = {
						'paciente': $scope.paciente.paciente,
						'doctor': doctor.doctor,
						'mensaje': $scope.mensaje,
						'autor': $scope.paciente.nombre
					}

					HelpersService
						.postMensaje(req)
						.then(function(res){
							console.log(res)
						})
						.catch(function(res){
							console.log(res);
						});
				}
			}
		}
})();