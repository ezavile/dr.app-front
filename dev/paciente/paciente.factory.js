(function(){
	angular
		.module('drApp.Paciente')
		.factory('PacienteFactory', PacienteFactory);


		PacienteFactory.$inject = ['$sessionStorage'];

		function PacienteFactory($sessionStorage){
			var Paciente = {};

			Paciente.getInfo = function(){
				return $sessionStorage.get('Paciente') || undefined;
			}

			Paciente.setInfo = function(gral){
				$sessionStorage.put('Paciente', gral);
			}
			/*Paciente.getCitas = function(){
				return $sessionStorage.get('PacienteCitas') || undefined;
			}

			Paciente.setCitas = function(citas){
				$sessionStorage.put('PacienteCitas', citas);
			}
			
			Paciente.getMensajes = function(){
				return $sessionStorage.get('PacienteMensajes') || undefined;
			}

			Paciente.setMensajes = function(citas){
				$sessionStorage.put('PacienteMensajes', citas);
			}*/

			return Paciente;
		}
})();