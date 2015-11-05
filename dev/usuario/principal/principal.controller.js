(function(){
	angular
		.module('drApp.Usuario')
		.controller('PrincipalController', PrincipalController);

		PrincipalController.$inject = ['$compile', '$scope', 'DoctorService'];

		function PrincipalController($compile, $scope, DoctorService){
			//obtener las especialidades
			DoctorService.getEspecialidades()
				.then(function(res){
					$scope.especialidades = res;
					$scope.especialidad = res[0].idEspecialidad;
				})
				.catch(function(res){
					console.log(res);
				});
		}
})();