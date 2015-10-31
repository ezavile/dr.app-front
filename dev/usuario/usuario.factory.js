(function(){
	angular
		.module('drApp.Usuario')
		.factory('UsuarioFactory', UsuarioFactory);


		UsuarioFactory.$inject = ['$sessionStorage'];

		function UsuarioFactory($sessionStorage){
			var Usuario = {};
			var usuarioActual;

			Usuario.getStatus = function(){
				usuarioActual = $sessionStorage.get('usuarioActual') || undefined;
			}

			Usuario.tipoUsuario = function(){
				return usuarioActual.tipoUsuario;
			}

			Usuario.isLogeado = function(){
				this.getStatus();
				var logeado = false;

				if(usuarioActual){
					logeado = true;
				}

				return logeado;
			}

			Usuario.setStatus = function(usr){
				this.getStatus();
				usuarioActual = usr;
				$sessionStorage.put('usuarioActual', usr);
			}

			Usuario.logout = function(){
				this.getStatus();
				usuarioActual = undefined;
				$sessionStorage.empty();
			}

			return Usuario;
		}
})();