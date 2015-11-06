(function(){
	angular
		.module('drApp.Paciente')
		.controller('PacienteCitaUpdateController', PacienteCitaUpdateController);

		PacienteCitaUpdateController.$inject = ['$state', '$scope', 'HelpersFactory', 'DoctorService', 'PacienteFactory', 'PacienteService'];

		function PacienteCitaUpdateController($state, $scope, HelpersFactory, DoctorService, PacienteFactory, PacienteService){
			var helper = HelpersFactory; 
			var paciente = PacienteFactory.getInfo();

			$scope.upCita = angular.copy($scope.cita);
			$scope.upCita.fecha = helper.stringToDate($scope.upCita.fecha);
			
			$scope.msjHorasDisponibles = "Solo se muestran las horas disponibles.";
			
			//citas del doctor
			$scope.citas = [];
			DoctorService
				.getCitas($scope.upCita.doctor.doctor)
				.then(function(res){
					$scope.citas = res;
				})
				.catch(function(err){
					console.log(err);
				})
			
			
			$scope.$watch('citas', function(v){
				if(v){
					$scope.$watch('upCita.fecha', function(date){
						$scope.horas = ['9','10','11','12','13','14','15','16','17','18'];
						$scope.horasOcupadas = [];

						date = helper.dateYYYYMMDD(date);

						angular.forEach($scope.citas, function(cita) {
							if(cita.fecha == date){
								if(cita.hora != $scope.upCita.hora){
									$scope.horasOcupadas.push(cita.hora);
								}
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
				}
			});

			$scope.putCita = function(){
				if(paciente){
					var req = {
						'fecha': $scope.cita.fecha,
						'newFecha': helper.dateYYYYMMDD($scope.upCita.fecha),
						'hora': $scope.cita.hora,
						'newHora': $scope.upCita.hora,
						'doctor': $scope.cita.doctor.doctor,
						'paciente': paciente.paciente,
						'asunto': $scope.upCita.asunto
					}

					PacienteService
						.putCita(req)
						.then(function(res){
							$scope.cita.fecha = res.newFecha;
							$scope.cita.hora = res.newHora;
							$scope.cita.asunto = res.asunto;
						})
						.catch(function(res){
							console.log(res);
						});
				}
			}
		}
})();