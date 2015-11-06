(function(){

	angular
		.module('drApp.Paciente')
		.controller('PacienteAdminAgendarController', PacienteAdminAgendarController);

		PacienteAdminAgendarController.$inject = ['$scope', 'PacienteService', 'PacienteFactory', 'HelpersFactory'];

		function PacienteAdminAgendarController($scope, PacienteService, PacienteFactory, HelpersFactory){
			var helper = HelpersFactory;
			var paciente = PacienteFactory.getInfo();
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

			PacienteService
				.getCitas(paciente.paciente)
				.then(function(res){
					PacienteFactory.setCitas(res);
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

		}

})();