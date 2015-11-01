(function(){
	angular
		.module('drApp.Usuario')
		.controller('PrincipalController', PrincipalController);

		PrincipalController.$inject = ['$compile', '$scope', 'DoctorService', 'UsuarioFactory'];

		function PrincipalController($compile, $scope, DoctorService, UsuarioFactory){

			var header = angular.element(document).find('header');
			$scope.usuario = UsuarioFactory;

			if($scope.usuario.isLogeado()){
				header[0].innerHTML = " ";
				if($scope.usuario.tipoUsuario() == 'doctor'){
					header.append($compile("<header-doctor class='Header-perfil' collapse-header-menu />")($scope));
				}
				if($scope.usuario.tipoUsuario() == 'paciente'){
					header.append($compile("<header-paciente class='Header-perfil' collapse-header-menu />")($scope));
				}
			} else {
				header[0].innerHTML = " ";
				header.append($compile("<header-usuario class='Header'/>")($scope));
			}

			//obtener las especialidades
			DoctorService.getEspecialidades()
				.then(function(res){
					$scope.especialidades = res;
					$scope.especialidad = res[0].idEspecialidad;
				})
				.catch(function(res){
					console.log(res);
				});
		}
})();