(function(){

	angular
		.module('drApp.Doctor')
		.controller('DoctorMensajesController', DoctorMensajesController);

		DoctorMensajesController.$inject = ['$scope', 'HelpersService', 'HelpersFactory', 'DoctorService', 'DoctorFactory'];

		function DoctorMensajesController($scope, HelpersService, HelpersFactory, DoctorService, DoctorFactory){
			var helper = HelpersFactory;
			var doctor = DoctorFactory.getDoctor();
			$scope.pacientes = [];
			$scope.allMensajes = [];


			//Obtener los doctores sin duplicarse
			function getPacientes(arr){
				var checkPac = "";
				var pacientes = [];
				angular.forEach(arr, function(pac){
					if(checkPac != pac.paciente.paciente){
						pacientes.push(pac.paciente);
						checkPac = pac.paciente.paciente;
					}
				})
				return pacientes;
			}


			function mensajesByPac(pac){
				$scope.paciente = pac;
				$scope.mensajes = [];
				var res = $scope.allMensajes.filter(function(p){
					return (p.paciente.paciente == pac.paciente);
				});
				$scope.mensajes = res;
			}


			DoctorService
				.getMensajes(doctor.doctor)
				.then(function(res){
					$scope.pacientes = getPacientes(res);
					$scope.allMensajes = res;
					mensajesByPac($scope.pacientes[0]);
				})
				.catch(function(err){
					console.log(err)
				});

			$scope.mensajesByPac = function(pac){
				mensajesByPac(pac);
			}


			$scope.postMensaje = function(){
				var req = {
					'paciente': $scope.paciente.paciente,
					'doctor': doctor.doctor,
					'mensaje': $scope.mensaje,
					'autor': doctor.nombre
				}

				HelpersService
					.postMensaje(req)
					.then(function(res){
						var mensaje = {
							'paciente': {
								'paciente':$scope.paciente.paciente,
								'imgPerfil':$scope.paciente.imgPerfil,
								'nombre':$scope.paciente.nombre
							},
							'autor':res.autor,
							'mensaje':res.mensaje,
							'fecha': res.fecha
						}
						$scope.mensajes.unshift(mensaje);
						$scope.allMensajes.unshift(mensaje);
						$scope.mensaje = '';
					})
					.catch(function(res){
						console.log(res);
					});
			}

		}

})();