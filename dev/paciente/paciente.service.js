(function(){
	angular.module('drApp.Paciente')
	.service('PacienteService', PacienteService);

	PacienteService.$inject = ['$http','$q', 'URL'];

	function PacienteService($http, $q, URL){

		function addPaciente(paciente){
			var deferred = $q.defer();

			var paciente = angular.fromJson(paciente);

			$http
				.post(URL.URL_API_REST + 'paciente', paciente)
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

		function addComentario(req){
			var deferred = $q.defer();
			var req = angular.fromJson(req);

			$http
				.post(URL.URL_API_REST + 'paciente/comentario', req)
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

		function addMensaje(req){
			var deferred = $q.defer();
			var req = angular.fromJson(req);

			$http
				.post(URL.URL_API_REST + 'paciente/mensaje', req)
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

		function addCita(req){
			var deferred = $q.defer();
			var req = angular.fromJson(req);

			$http
				.post(URL.URL_API_REST + 'paciente/cita', req)
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


		function updatePaciente(req){
			var deferred = $q.defer();
			var req = angular.fromJson(req);

			$http
				.put(URL.URL_API_REST + 'paciente', req)
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
			addPaciente: addPaciente,
			addComentario: addComentario,
			addMensaje: addMensaje,
			addCita: addCita,
			updatePaciente: updatePaciente
		}
	}

})();