(function(){
	angular.module('drApp.Doctor')
	.service('DoctorService', DoctorService);

	DoctorService.$inject = ['$http','$q', 'URL'];

	function DoctorService($http, $q, URL){

		function getEspecialidades(){

			var deferred = $q.defer();

			$http
				.get(URL.URL_API_REST + 'especialidades')
				.success(function(res) {
					//console.log(res);
					deferred.resolve(res);
				})
				.catch(function(res) {
					//console.log(res);
					deferred.reject(res);
				});

			return deferred.promise;
		}

		function addDoctor(doc){
			var deferred = $q.defer();

			var doctor = angular.fromJson(doc);

			$http
				.post(URL.URL_API_REST + 'doctor', doctor)
				.success(function(res) {
					//console.log(res);
					deferred.resolve(res);
				})
				.catch(function(res) {
					//console.log(res);
					deferred.reject(res);
				});

			return deferred.promise;
		}


		function doctoresByEspecialidad(idEspecialidad){
			var deferred = $q.defer();

			var especialidad = {
				"idEspecialidad": idEspecialidad
			}
			especialidad = angular.fromJson(especialidad);
			console.log(especialidad);
			$http
				.post(URL.URL_API_REST + 'doctoresByEspecialidad', especialidad)
				.success(function(res) {
					//console.log(res);
					deferred.resolve(res);
				})
				.catch(function(res) {
					//console.log(res);
					deferred.reject(res);
				});

			return deferred.promise;
		}

		return {
			addDoctor: addDoctor,
			getEspecialidades: getEspecialidades,
			doctoresByEspecialidad: doctoresByEspecialidad
		}
	}

})();