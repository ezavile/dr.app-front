(function(){
	angular.module('drApp.Doctor')
	.service('DoctorService', DoctorService);


	function DoctorService(){

		var dataFactory = {};
		doctores = [{'nombre':'Edgar', 'edad': 22}, {'nombre':'Edith', 'edad': 19}];

		function getDoctores() {
			return doctores;
			//return $http.get(urlBase);
		};

		function getDoctor(id) {
			doctor = {'nombre':'Edgar', 'edad': 22};
			return doctor;
			//return $http.get(urlBase + '/' + id);
		};

		function addDoctor(dr){
			doctores.push(dr);
		}

		return {
			getDoctores: getDoctores,
			getDoctor: getDoctor,
			addDoctor: addDoctor
		}
	}

})();