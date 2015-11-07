(function(){

	angular
		.module('drApp.Doctor')
		.controller('DoctorComentariosController', DoctorComentariosController);

		DoctorComentariosController.$inject = ['$scope', 'HelpersFactory', 'DoctorFactory', 'DoctorService'];

		function DoctorComentariosController($scope, HelpersFactory, DoctorFactory, DoctorService){
			var helper = HelpersFactory;
			var doctor = DoctorFactory.getDoctor();
			$scope.comentarios = [];

			DoctorService
				.getComentarios(doctor.doctor)
				.then(function(res){
					$scope.comentarios = res;
				})
				.catch(function(err){
					console.log(err);
				});
			$scope.$watchCollection('comentarios', function(v){
				$scope.comentarios = v;
				angular.forEach($scope.comentarios, function(comentario){
					comentario.month = helper.getNameMonth(comentario.fecha);
					comentario.year = helper.getYear(comentario.fecha);
					comentario.yearMonth = comentario.year + '-' + comentario.month;
				});

				var checkYearMonth = "";
				$scope.comentariosPerMonths = [];
				var x = 0;

				for(var i = 0; i < $scope.comentarios.length; i++){
					if(checkYearMonth != $scope.comentarios[i].yearMonth){
						checkYearMonth = $scope.comentarios[i].yearMonth;
						var result = $scope.comentarios.filter(function(cita){
							return cita.yearMonth == checkYearMonth;
						});
						$scope.comentariosPerMonths.push(result);
					}
				}
			});

		}

})();