(function(){
	angular.module('drApp.Doctor')
	.service('DoctorService', DoctorService);

	DoctorService.$inject = ['$http','$q', 'URL'];

	function DoctorService($http, $q, URL){

		function addDoctor(doc){
			var deferred = $q.defer();

			doc1 = {
			"usuario": "Doc5",
			"password": "test",
			"nombre": "Nombre del doctor 2",
			"servicios": "servicios",
			"telefono": "8448076459",
			"direccion": "direccion del doctor",
			"correo": "doc2@gmail.com",
			"foto1": "foto1",
			"foto2": "foto2",
			"foto3": "foto3"
			};

			var doctor = angular.fromJson(doc1);

			var res = $http.post(URL.URL_API_REST + 'doctor', doctor);

			res.success(function(response) {
				console.log(response);
				deferred.resolve(response);
			});

			res.catch(function(response) {
				console.log(response);
				deferred.reject(response);
			});

			return deferred.promise;
		}

		return {
			addDoctor: addDoctor
		}
	}

})();