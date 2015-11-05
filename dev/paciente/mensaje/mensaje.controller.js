(function(){
	angular
		.module('drApp.Paciente')
		.controller('PacienteMensajeController', PacienteMensajeController);

		PacienteMensajeController.$inject = ['$scope', 'DoctorFactory', 'PacienteFactory', 'PacienteService'];

		function PacienteMensajeController($scope, DoctorFactory, PacienteFactory, PacienteService){
			$scope.paciente = PacienteFactory.getInfo();
			var doctor = DoctorFactory.getDoctor();

			$scope.postMensaje = function(){
				if($scope.paciente){
					var req = {
						'paciente': $scope.paciente.paciente,
						'doctor': doctor.doctor,
						'mensaje': $scope.mensaje
					}

					PacienteService
						.postMensaje(req)
						.then(function(res){
							console.log(res)
							$scope.comentario = '';
						})
						.catch(function(res){
							console.log(res);
						});
				}
			}
		}
})();