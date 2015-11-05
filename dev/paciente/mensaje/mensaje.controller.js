(function(){
	angular
		.module('drApp.Paciente')
		.controller('PacienteMensajeController', PacienteMensajeController);

		PacienteMensajeController.$inject = ['$scope', 'DoctorFactory', 'UsuarioFactory', 'PacienteService'];

		function PacienteMensajeController($scope, DoctorFactory, UsuarioFactory, PacienteService){
			$scope.usuarioActual = UsuarioFactory.getStatus();
			var doctor = DoctorFactory.getStatus();

			$scope.postMensaje = function(){
				if($scope.usuarioActual.tipoUsuario === 'paciente'){
					var req = {
						'paciente': $scope.usuarioActual.paciente,
						'doctor': doctor.doctor,
						'mensaje': $scope.mensaje
					}

					PacienteService
						.postMensaje(req)
						.then(function(res){
							console.log(res)
							$scope.comentario = '';
						})
						.catch(function(res){
							console.log(res);
						});
				}
			}
		}
})();