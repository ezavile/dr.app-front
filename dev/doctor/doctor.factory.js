(function(){
	angular
		.module('drApp.Doctor')
		.factory('DoctorFactory', DoctorFactory);


		DoctorFactory.$inject = ['$sessionStorage'];

		function DoctorFactory($sessionStorage){
			var Doctor = {};

			Doctor.getStatus = function(){
				return $sessionStorage.get('doctor') || undefined;
			}

			Doctor.setStatus = function(doc){
				$sessionStorage.put('doctor', doc);
			}

			Doctor.remove = function(){
				$sessionStorage.remove('doctor');
			}

			return Doctor;
		}
})();