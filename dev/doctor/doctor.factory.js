(function(){
	angular
		.module('drApp.Doctor')
		.factory('DoctorFactory', DoctorFactory);


		DoctorFactory.$inject = ['$sessionStorage'];

		function DoctorFactory($sessionStorage){
			var Doctor = {};

			Doctor.getDoctor = function(){
				return $sessionStorage.get('Doctor') || undefined;
			}

			Doctor.setDoctor = function(doc){
				$sessionStorage.put('Doctor', doc);
			}
			Doctor.getComentarios = function(){
				return $sessionStorage.get('DoctorComentarios') || undefined;
			}

			Doctor.setComentarios = function(doc){
				$sessionStorage.put('DoctorComentarios', doc);
			}
			Doctor.getCitas = function(){
				return $sessionStorage.get('DoctorCitas') || undefined;
			}

			Doctor.setCitas = function(doc){
				$sessionStorage.put('DoctorCitas', doc);
			}


			return Doctor;
		}
})();