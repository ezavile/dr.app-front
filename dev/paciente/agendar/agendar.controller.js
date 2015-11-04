(function(){
	angular
		.module('drApp.Paciente')
		.controller('PacienteAgendarController', PacienteAgendarController);

		PacienteAgendarController.$inject = ['$scope', 'HelpersFactory', 'DoctorFactory', 'UsuarioFactory', 'PacienteService'];

		function PacienteAgendarController($scope, HelpersFactory, DoctorFactory, UsuarioFactory, PacienteService){
			$scope.usuarioActual = UsuarioFactory.getStatus();
			var doctor = DoctorFactory.getStatus();
			var helper = HelpersFactory;
			$scope.msjHorasDisponibles = "Solo se muestran las horas disponibles.";

			$scope.$watch('fecha', function(date){
				$scope.horas = ['9','10','11','12','13','14','15','16','17','18'];
				$scope.horasOcupadas = [];

				date = helper.dateYYYYMMDD(date);

				angular.forEach(doctor.citas, function(cita) {
					if(cita.fecha == date){
						$scope.horasOcupadas.push(cita.hora);
					}
				});

				isHoraOcupada($scope.horasOcupadas);
			});

			function isHoraOcupada(horas){
				var hours = [];
				var hour;

				//deja las horas disponibles
				angular.forEach(horas, function(hra) {
					$scope.horas = $scope.horas.filter(function(hora) {
						return hora!=hra;
					});
				});

				if($scope.horas.length ==0 ){
					$scope.msjHorasDisponibles = "Ya no hay horas disponibles.";
				} else {
					$scope.msjHorasDisponibles = "Solo se muestran las horas disponibles.";
				}

				$scope.hora = $scope.horas[0];
			}

			$scope.addCita = function(){
				if($scope.usuarioActual.tipoUsuario === 'paciente'){
					var req = {
						'fecha': helper.dateYYYYMMDD($scope.fecha),
						'hora': $scope.hora,
						'doctor': doctor.doctor,
						'paciente': $scope.usuarioActual.paciente,
						'asunto': $scope.asunto
					}

					PacienteService
						.addCita(req)
						.then(function(res){
							console.log(res);
						})
						.catch(function(res){
							console.log(res);
						});
				}
			}
		}
})();