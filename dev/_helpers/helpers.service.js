(function(){
	angular.module('drApp.Helpers')
	.service('HelpersService', HelpersService);

	HelpersService.$inject = ['$http','$q', 'URL'];

	function HelpersService($http, $q, URL){

		function upload(file){
			var deferred = $q.defer();

			var fd = new FormData();
			fd.append('file', file);

			var res = $http.post(URL.URL_API_REST + 'upload', fd, {
				transformRequest: angular.identity,
				headers: {'Content-Type': undefined}
			})

			res.success(function(response) {
				//console.log(response);
				deferred.resolve(response);
			});

			res.catch(function(response) {
				//console.log(response);
				deferred.reject(response);
			});

			return deferred.promise;
		}

		return {
			upload: upload
		}
	}

})();