(function(){
	angular
		.module('drApp.Usuario')
		.controller('RegistroController', RegistroController);

		RegistroController.$inject = ['$scope', 'DoctorService'];

		function RegistroController($scope, DoctorService){
			$scope.doctor = {};
			console.log("RegistroController")
			$scope.addDoctor = function(){
				DoctorService.addDoctor($scope.doctor)
					.then(function(response){
						console.log(response);
					})
					.catch(function(response){
						console.log(response);
					});
			}
		}
})();