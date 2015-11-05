(function(){
	angular
		.module('drApp.Paciente')
		.controller('PacienteComentariosController', PacienteComentariosController);

		PacienteComentariosController.$inject = ['$scope', 'DoctorFactory', 'UsuarioFactory', 'PacienteService'];

		function PacienteComentariosController($scope, DoctorFactory, UsuarioFactory, PacienteService){
			$scope.usuarioActual = UsuarioFactory.getStatus();
			var doctor = DoctorFactory.getStatus();
			//scope comentarios coming from verDoc
			//$scope.comentarios
			$scope.postComentario = function(){
				if($scope.usuarioActual.tipoUsuario === 'paciente'){
					var req = {
						'paciente': $scope.usuarioActual.paciente,
						'doctor': doctor.doctor,
						'comentario': $scope.comentario
					}

					PacienteService
						.postComentario(req)
						.then(function(res){
							var comentario = {
								'paciente': {
									'paciente':$scope.usuarioActual.paciente,
									'nombre':$scope.usuarioActual.nombre,
									'imgPerfil':$scope.usuarioActual.imgPerfil
								},
								'fecha':res.fecha,
								'comentario':res.comentario
							}
							doctor.comentarios.unshift(comentario);
							$scope.comentario = '';
						})
						.catch(function(res){
							console.log(res);
						});
				}
			}
		}
})();