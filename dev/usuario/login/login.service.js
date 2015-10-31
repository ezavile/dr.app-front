(function(){
	angular.module('drApp.Usuario')
	.service('LoginService', LoginService);

	LoginService.$inject = ['$http','$q', 'URL'];

	function LoginService($http, $q, URL){

		function login(usuario){
			var deferred = $q.defer();

			var usuario = angular.fromJson(usuario);

			$http
				.post(URL.URL_API_REST + 'login', usuario)
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
			login: login
		}
	}

})();