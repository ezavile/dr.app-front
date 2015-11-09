(function(){
	angular.module('drApp.Paciente')
	.service('PacienteService', PacienteService);

	PacienteService.$inject = ['$http','$q', 'URL'];

	function PacienteService($http, $q, URL){

		function postPaciente(paciente){
			var deferred = $q.defer();

			var paciente = angular.fromJson(paciente);

			$http
				.post(URL.URL_API_REST + 'pacientes', paciente)
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
		
		function deletePaciente(paciente){
			var deferred = $q.defer();
			var paciente = angular.fromJson(paciente);

			$http
				.delete(URL.URL_API_REST + 'pacientes', {data: paciente})
				.success(function(res) {
					deferred.resolve(res);
				})
				.catch(function(res) {
					//console.log(res);
					deferred.reject(res);
				});

			return deferred.promise;
		}

		function postComentario(req){
			var deferred = $q.defer();
			var req = angular.fromJson(req);

			$http
				.post(URL.URL_API_REST + 'pacientes/comentarios', req)
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

		function postCita(req){
			var deferred = $q.defer();
			var req = angular.fromJson(req);

			$http
				.post(URL.URL_API_REST + 'pacientes/citas', req)
				.success(function(res) {
					console.log(res);
					deferred.resolve(res);
				})
				.catch(function(res) {
					//console.log(res);
					deferred.reject(res);
				});

			return deferred.promise;
		}
		function putCita(req){
			var deferred = $q.defer();
			var req = angular.fromJson(req);

			$http
				.put(URL.URL_API_REST + 'pacientes/citas', req)
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

		function deleteCita(req){
			var deferred = $q.defer();
			var req = angular.fromJson(req);

			$http
				.delete(URL.URL_API_REST + 'pacientes/citas', {data: req})
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

		function getCitas(paciente){
			var deferred = $q.defer();

			$http
				.get(URL.URL_API_REST + 'pacientes/citas/' + paciente)
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
		function getMensajes(paciente){
			var deferred = $q.defer();

			$http
				.get(URL.URL_API_REST + 'pacientes/mensajes/' + paciente)
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


		function putPaciente(req){
			var deferred = $q.defer();
			var req = angular.fromJson(req);

			$http
				.put(URL.URL_API_REST + 'pacientes', req)
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
			deletePaciente: deletePaciente,
			postPaciente: postPaciente,
			postComentario: postComentario,
			postCita: postCita,
			putCita: putCita,
			getCitas: getCitas,
			deleteCita: deleteCita,
			getMensajes: getMensajes,
			putPaciente: putPaciente
		}
	}

})();