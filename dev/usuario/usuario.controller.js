(function () {

	angular
		.module('drApp.Usuario')
		.controller('UsuarioController', UsuarioController);

		UsuarioController.$inject = ['$scope', '$compile', 'UsuarioFactory'];

		function UsuarioController($scope, $compile, UsuarioFactory){ 
			var header = angular.element(document).find('header');
			var usuario = UsuarioFactory;

			if(usuario.isLogeado()){
				header[0].innerHTML = " ";
				if(usuario.tipoUsuario() == 'doctor'){
					header.append($compile("<header-doctor class='Header-perfil' collapse-header-menu />")($scope));
				}
				if(usuario.tipoUsuario() == 'paciente'){
					header.append($compile("<header-paciente class='Header-perfil' collapse-header-menu />")($scope));
				}
			} else {
				header[0].innerHTML = " ";
				header.append($compile("<header-usuario class='Header'/>")($scope));
			}
		}

})();