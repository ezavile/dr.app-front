(function () {

	angular
		.module('drApp.Usuario')
		.controller('UsuarioController', UsuarioController);

		UsuarioController.$inject = ['$scope', '$compile', 'UsuarioFactory'];

		function UsuarioController($scope, $compile, UsuarioFactory){ 
			var header = angular.element(document).find('header');
			var usuarioActual = UsuarioFactory.getStatus();

			if(usuarioActual){
				header[0].innerHTML = " ";
				if(usuarioActual.tipoUsuario == 'doctor'){
					header.append($compile("<header-doctor class='Header-perfil' collapse-header-menu />")($scope));
				}
				if(usuarioActual.tipoUsuario == 'paciente'){
					header.append($compile("<header-paciente class='Header-perfil' collapse-header-menu />")($scope));
				}
			} else {
				header[0].innerHTML = " ";
				header.append($compile("<header-usuario class='Header'/>")($scope));
			}
		}

})();