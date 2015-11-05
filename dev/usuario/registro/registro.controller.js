(function(){
	angular
		.module('drApp.Usuario')
		.controller('RegistroController', RegistroController);

		RegistroController.$inject = ['$scope', 'URL', 'DoctorService', 'PacienteService'];

		function RegistroController($scope, URL, DoctorService, PacienteService){
			$scope.doctor = {};
			$scope.doctor.imgPerfil = URL.URL_IMG_PERFIL_DEFAULT;
			$scope.doctor.foto1 = URL.URL_IMG_GALERIA_DEFAULT;
			$scope.doctor.foto2 = URL.URL_IMG_GALERIA_DEFAULT;
			$scope.doctor.foto3 = URL.URL_IMG_GALERIA_DEFAULT;

			//obtener las especialidades
			DoctorService.getEspecialidades()
				.then(function(res){
					$scope.especialidades = res;
				})
				.catch(function(res){
					console.log(res);
				});

			$scope.postDoctor = function(){ 
				DoctorService.postDoctor($scope.doctor)
					.then(function(res){
						console.log(res);
					})
					.catch(function(res){
						console.log(res);
					});
			}

			$scope.paciente = {};
			$scope.paciente.imgPerfil = URL.URL_IMG_PERFIL_DEFAULT;

			$scope.postPaciente = function(){ 
				PacienteService.postPaciente($scope.paciente)
					.then(function(res){
						console.log(res);
					})
					.catch(function(res){
						console.log(res);
					});
			}
		}
})();