(function(){

	angular
		.module('drApp.Doctor')
		.controller('DoctorCitasController', DoctorCitasController);

		DoctorCitasController.$inject = ['$state', '$scope', 'HelpersService', 'HelpersFactory', 'DoctorService', 'DoctorFactory'];

		function DoctorCitasController($state, $scope, HelpersService, HelpersFactory, DoctorService, DoctorFactory){
			var helper = HelpersFactory;
			var doctor = DoctorFactory.getDoctor();
			$scope.citas = [];
 
			//deshabilitar los botones de las citas pasadas
			$scope.isDisabledCita = function(fecha){
				var isDisabledCita = false;
				var today = new Date();
				today = helper.dateYYYYMMDD(today);

				if(fecha < today){
					isDisabledCita = true;
				}

				return isDisabledCita;
			}

			DoctorService
				.getCitas(doctor.doctor)
				.then(function(res){
					$scope.citas = res;
				})
				.catch(function(err){
					console.log(err);
				});

			$scope.$watchCollection('citas', function(v){
				$scope.citas = v;
				angular.forEach($scope.citas, function(cita){
					cita.month = helper.getNameMonth(cita.fecha);
					cita.year = helper.getYear(cita.fecha);
					cita.yearMonth = cita.year + '-' + cita.month;
				});

				var checkYearMonth = "";
				$scope.citasPerMonths = [];
				var x = 0;

				for(var i = 0; i < $scope.citas.length; i++){
					if(checkYearMonth != $scope.citas[i].yearMonth){
						checkYearMonth = $scope.citas[i].yearMonth;
						var result = $scope.citas.filter(function(cita){
							return cita.yearMonth == checkYearMonth;
						});
						$scope.citasPerMonths.push(result);
					}
				}
			});

			$scope.cancelarCita = function(cita){
				if(doctor){
					var req = {
						'fecha': cita.fecha,
						'hora': cita.hora,
						'doctor': doctor.doctor,
						'paciente': cita.paciente.paciente,
						'estatus': 'CANCELADA'
					}

					HelpersService
						.putCita(req)
						.then(function(res){
							$state.reload();
							helper.notify(res);
						})
						.catch(function(res){
							console.log(res);
						})
				}
			}


			$scope.deleteCita = function(cita){

				var req = {
					"doctor": doctor.doctor,
					"paciente": cita.paciente.paciente,
					"fecha": cita.fecha,
					"hora": cita.hora
				}

				HelpersService
					.deleteCita(req)
					.then(function(res){
						$state.reload();
						helper.notify(res);
					})
					.catch(function(err){
						helper.notify(err);
					});
			}

			$scope.confirmarCita = function(cita){
				if(doctor){
					var req = {
						'fecha': cita.fecha,
						'hora': cita.hora,
						'doctor': doctor.doctor,
						'paciente': cita.paciente.paciente,
						'estatus': 'CONFIRMADA'
					}

					HelpersService
						.putCita(req)
						.then(function(res){
							$state.reload();
							helper.notify(res);
						})
						.catch(function(res){
							$state.reload();
							helper.notify(res);
						})
				}
			}

		}

})();