(function () {

	angular
		.module('drApp.Usuario')
		.controller('HeaderController', HeaderController);

		HeaderController.$inject = ['$scope', '$sessionStorage', '$compile', '$element'];

		function HeaderController($scope, $sessionStorage, $compile, $element){
			var usuarioActual = $sessionStorage.get('usuarioActual') || undefined;
			if(usuarioActual){
				$element[0].innerHTML = " ";
				if(usuarioActual.tipo == 'doctor'){
					$element.append($compile("<header-doctor class='Header-perfil' collapse-header-menu />")($scope));
				}
				if(usuarioActual.tipo == 'paciente'){
					$element.append($compile("<header-paciente class='Header-perfil' collapse-header-menu />")($scope));
				}
			}
		}

})();