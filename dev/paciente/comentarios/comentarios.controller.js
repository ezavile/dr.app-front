(function(){
	angular
		.module('drApp.Paciente')
		.controller('PacienteComentariosController', PacienteComentariosController);

		PacienteComentariosController.$inject = ['$scope', 'DoctorFactory', 'PacienteFactory', 'PacienteService', 'HelpersFactory'];

		function PacienteComentariosController($scope, DoctorFactory, PacienteFactory, PacienteService, HelpersFactory){
			$scope.paciente = PacienteFactory.getInfo();
			var doctor = DoctorFactory.getDoctor();
			var doctor_comentarios = DoctorFactory.getComentarios();
			var helper = HelpersFactory;
			//scope comentarios coming from verDoc
			//$scope.comentarios
			$scope.postComentario = function(){
				if($scope.paciente){
					var req = {
						'paciente': $scope.paciente.paciente,
						'doctor': doctor.doctor,
						'comentario': $scope.comentario
					}

					PacienteService
						.postComentario(req)
						.then(function(res){
							var comentario = {
								'paciente': {
									'paciente':$scope.paciente.paciente,
									'nombre':$scope.paciente.nombre,
									'imgPerfil':$scope.paciente.imgPerfil
								},
								'fecha':res.comentario.fecha,
								'comentario':res.comentario.comentario
							}
							doctor_comentarios.unshift(comentario);
							$scope.comentario = '';
						})
						.catch(function(res){
							helper.notify(res);
						});
				}
			}
		}
})();