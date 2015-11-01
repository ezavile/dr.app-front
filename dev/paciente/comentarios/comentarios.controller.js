(function(){
	angular
		.module('drApp.Paciente')
		.controller('PacienteComentariosController', PacienteComentariosController);

		PacienteComentariosController.$inject = ['$scope', 'UsuarioFactory', 'PacienteService'];

		function PacienteComentariosController($scope, UsuarioFactory, PacienteService){
			$scope.usuarioActual = UsuarioFactory.getStatus();
			//scope comentarios coming from verDoc
			//$scope.comentarios
			$scope.addComentario = function(){
				if($scope.usuarioActual.tipoUsuario === 'paciente'){
					var req = {
						'paciente': $scope.usuarioActual.tipoUsuario(),
						'doctor': 'ilse',
						'comentario': $scope.comentario
					}

					PacienteService
						.addComentario(req)
						.then(function(res){
							$scope.comentarios.push(res);
						})
						.catch(function(res){
							console.log(res);
						});
				}
			}
		}
})();