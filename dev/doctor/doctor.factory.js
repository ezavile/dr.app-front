(function(){
	angular
		.module('drApp.Doctor')
		.factory('DoctorFactory', DoctorFactory);


		DoctorFactory.$inject = ['$sessionStorage'];

		function DoctorFactory($sessionStorage){
			var Doctor = {};

			Doctor.getDoctor = function(){
				return $sessionStorage.get('doctor') || undefined;
			}

			Doctor.setDoctor = function(doc){
				$sessionStorage.put('doctor', doc);
			}


			return Doctor;
		}
})();