(function(){
	angular
		.module('drApp.Paciente')
		.controller('PacienteAgendarController', PacienteAgendarController);

		PacienteAgendarController.$inject = ['$scope', 'HelpersFactory', 'DoctorFactory', 'PacienteFactory', 'PacienteService'];

		function PacienteAgendarController($scope, HelpersFactory, DoctorFactory, PacienteFactory, PacienteService){
			$scope.paciente = PacienteFactory.getInfo();
			var doctor = DoctorFactory.getDoctor();
			var doctor_citas = DoctorFactory.getCitas();
			var helper = HelpersFactory;
			$scope.msjHorasDisponibles = "Solo se muestran las horas disponibles.";

			$scope.$watch('fecha', function(date){
				$scope.horas = ['9','10','11','12','13','14','15','16','17','18'];
				$scope.horasOcupadas = [];

				date = helper.dateYYYYMMDD(date);

				angular.forEach(doctor_citas, function(cita) {
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

			$scope.postCita = function(){
				if($scope.paciente){
					var req = {
						'fecha': helper.dateYYYYMMDD($scope.fecha),
						'hora': $scope.hora,
						'doctor': doctor.doctor,
						'paciente': $scope.paciente.paciente,
						'asunto': $scope.asunto
					}

					PacienteService
						.postCita(req)
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