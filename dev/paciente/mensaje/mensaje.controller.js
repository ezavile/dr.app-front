(function(){
	angular
		.module('drApp.Paciente')
		.controller('PacienteMensajeController', PacienteMensajeController);

		PacienteMensajeController.$inject = ['$scope', 'DoctorFactory', 'PacienteFactory', 'HelpersService', 'HelpersFactory'];

		function PacienteMensajeController($scope, DoctorFactory, PacienteFactory, HelpersService, HelpersFactory){
			$scope.paciente = PacienteFactory.getInfo();
			var doctor = DoctorFactory.getDoctor();
			var helper = HelpersFactory;

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
							helper.notify(res);
							helper.popupClose();
						})
						.catch(function(res){
							helper.notify(res);
						});
				}
			}
		}
})();