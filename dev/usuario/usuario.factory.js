(function(){
	angular
		.module('drApp.Usuario')
		.factory('UsuarioFactory', UsuarioFactory);


		UsuarioFactory.$inject = ['$sessionStorage'];

		function UsuarioFactory($sessionStorage){
			var Usuario = {};

			Usuario.setTipoUsuario = function(tipoUsuario){
				$sessionStorage.put('tipoUsuario', tipoUsuario);
			}
			Usuario.getTipoUsuario = function(tipoUsuario){
				return $sessionStorage.get('tipoUsuario') || undefined;
			}
			Usuario.logout = function(tipoUsuario){
				$sessionStorage.empty();
			}

			return Usuario;

		}
})();