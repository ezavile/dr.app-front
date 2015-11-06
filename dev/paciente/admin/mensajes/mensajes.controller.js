(function(){

	angular
		.module('drApp.Paciente')
		.controller('PacienteAdminMensajesController', PacienteAdminMensajesController);

		PacienteAdminMensajesController.$inject = ['$scope', 'HelpersService', 'HelpersFactory', 'PacienteService', 'PacienteFactory'];

		function PacienteAdminMensajesController($scope, HelpersService, HelpersFactory, PacienteService, PacienteFactory){
			var helper = HelpersFactory;
			var paciente = PacienteFactory.getInfo();
			$scope.doctores = [];
			$scope.allMensajes = [];


			//Obtener los doctores sin duplicarse
			function getDoctores(arr){
				var checkDoc = "";
				var doctores = [];
				angular.forEach(arr, function(doc){
					if(checkDoc != doc.doctor.doctor){
						doctores.push(doc.doctor);
						checkDoc = doc.doctor.doctor;
					}
				})
				return doctores;
			}


			function mensajesByDoc(doc){
				$scope.doctor = doc;
				$scope.mensajes = [];
				var res = $scope.allMensajes.filter(function(dr){
					return (dr.doctor.doctor == doc.doctor);
				});
				$scope.mensajes = res;
			}


			PacienteService
				.getMensajes(paciente.paciente)
				.then(function(res){
					$scope.doctores = getDoctores(res);
					$scope.allMensajes = res;
					mensajesByDoc($scope.doctores[0]);
				})
				.catch(function(err){
					console.log(err)
				});


			$scope.mensajesByDoc = function(doc){
				mensajesByDoc(doc);
			}


			$scope.postMensaje = function(){
				var req = {
					'paciente': paciente.paciente,
					'doctor': $scope.doctor.doctor,
					'mensaje': $scope.mensaje,
					'autor': paciente.nombre
				}

				HelpersService
					.postMensaje(req)
					.then(function(res){
						var mensaje = {
							'doctor': {
								'doctor':$scope.doctor.doctor,
								'imgPerfil':$scope.doctor.imgPerfil,
								'nombre':$scope.doctor.nombre
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