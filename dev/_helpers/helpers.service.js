(function(){
	angular.module('drApp.Helpers')
	.service('HelpersService', HelpersService);

	HelpersService.$inject = ['$http','$q', 'URL'];

	function HelpersService($http, $q, URL){

		function upload(file){
			var deferred = $q.defer();

			var fd = new FormData();
			fd.append('file', file);

			$http
				.post(URL.URL_API_REST + 'upload', fd, {
					transformRequest: angular.identity,
					headers: {'Content-Type': undefined}
				})
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

		function putCita(req){
			var deferred = $q.defer();
			var req = angular.fromJson(req);

			$http
				.put(URL.URL_API_REST + 'citas', req)
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
				.delete(URL.URL_API_REST + 'citas', {data: req})
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


		function postMensaje(req){
			var deferred = $q.defer();
			var req = angular.fromJson(req);

			$http
				.post(URL.URL_API_REST + 'mensajes', req)
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
			upload: upload,
			putCita: putCita,
			deleteCita: deleteCita,
			postMensaje: postMensaje
		}
	}

})();