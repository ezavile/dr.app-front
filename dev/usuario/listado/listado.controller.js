(function(){
	angular.module('drApp.Usuario')
	.controller('UsuarioListadoController', UsuarioListadoController);

	UsuarioListadoController.$inject=['$scope','$stateParams', 'DoctorService'];

	function UsuarioListadoController($scope, $stateParams, DoctorService){
		var tipoListado = $stateParams.tipoListado;
		$scope.doctores = [];

		if(tipoListado === 'especialidad'){
			var idEspecialidad = $stateParams.search;

			DoctorService
				.doctoresByEspecialidad(idEspecialidad)
				.then(function(res){
					$scope.doctores = res;
				})
				.catch(function(res){
					console.log(res);
				});
		}
		if(tipoListado === 'enfermedad'){
			var enfermedad = $stateParams.search;

			DoctorService
				.doctoresByEnfermedad(enfermedad)
				.then(function(res){
					$scope.doctores = res;
				})
				.catch(function(res){
					console.log(res);
				});
		}
	
	}

})();