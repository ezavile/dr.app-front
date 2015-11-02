(function(){
	angular
		.module('drApp.Usuario')
		.factory('UsuarioFactory', UsuarioFactory);


		UsuarioFactory.$inject = ['$sessionStorage'];

		function UsuarioFactory($sessionStorage){
			var Usuario = {};



			Usuario.getStatus = function(){
				return $sessionStorage.get('usuarioActual') || undefined;
			}

			Usuario.setStatus = function(usr){
				$sessionStorage.put('usuarioActual', usr);
			}

			Usuario.logout = function(){
				$sessionStorage.empty();
			}

			return Usuario;
		}
})();