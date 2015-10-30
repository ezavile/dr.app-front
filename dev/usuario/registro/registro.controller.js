(function(){
	angular
		.module('drApp.Usuario')
		.controller('RegistroController', RegistroController);

		RegistroController.$inject = ['$scope', 'URL', 'DoctorService'];

		function RegistroController($scope, URL, DoctorService){
			$scope.doctor = {};
			$scope.doctor.imgPerfil = URL.URL_IMG_DEFAULT;

			//obtener las especialidades
			DoctorService.getEspecialidades()
				.then(function(res){
					$scope.especialidades = res;
				})
				.catch(function(res){
					console.log(res);
				});

			$scope.doctor.foto1 = 'foto1';
			$scope.doctor.foto2 = 'foto2';
			$scope.doctor.foto3 = 'foto3';

			$scope.addDoctor = function(){ 
				DoctorService.addDoctor($scope.doctor)
					.then(function(res){
						console.log(res);
					})
					.catch(function(res){
						console.log(res);
					});
			}

		}
})();