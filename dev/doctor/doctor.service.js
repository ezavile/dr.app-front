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

		function postDoctor(doc){
			var deferred = $q.defer();

			var doctor = angular.fromJson(doc);

			$http
				.post(URL.URL_API_REST + 'doctores', doctor)
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
		function putDoctor(doc){
			var deferred = $q.defer();

			var doctor = angular.fromJson(doc);

			$http
				.put(URL.URL_API_REST + 'doctores', doctor)
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


		function doctorById(id){
			var deferred = $q.defer();

			$http
				.get(URL.URL_API_REST + 'doctorById/' + id)
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


		function getCitas(doc){
			var deferred = $q.defer();

			$http
				.get(URL.URL_API_REST + 'doctores/citas/' + doc)
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
		function getComentarios(doc){
			var deferred = $q.defer();

			$http
				.get(URL.URL_API_REST + 'doctores/comentarios/' + doc)
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
		function getMensajes(doc){
			var deferred = $q.defer();

			$http
				.get(URL.URL_API_REST + 'doctores/mensajes/' + doc)
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

			$http
				.get(URL.URL_API_REST + 'doctoresByEspecialidad/' + idEspecialidad)
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
			postDoctor: postDoctor,
			putDoctor: putDoctor,
			getEspecialidades: getEspecialidades,
			doctorById: doctorById,
			getCitas: getCitas,
			getMensajes: getMensajes,
			getComentarios: getComentarios,
			doctoresByEspecialidad: doctoresByEspecialidad
		}
	}

})();