(function(){
	angular.module('drApp.Doctor')
	.factory('DoctorFactory', DoctorFactory);


	function DoctorFactory(){

		var dataFactory = {};
		doctores = [{'nombre':'Edgar', 'edad': 22}, {'nombre':'Edith', 'edad': 19}];

		dataFactory.getDoctores = function () {
			return doctores;
			//return $http.get(urlBase);
		};

		dataFactory.getDoctor = function (id) {
			doctor = {'nombre':'Edgar', 'edad': 22};
			return doctor;
			//return $http.get(urlBase + '/' + id);
		};

		dataFactory.addDoctor = function(dr){
			doctores.push(dr);
		}

		return dataFactory;
	}

})();