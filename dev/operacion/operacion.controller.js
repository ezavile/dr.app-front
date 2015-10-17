(function() {

	//modulo al qe pertenece
	angular.module('app.Operacion')
	.controller('OperacionController', OperacionController);

	OperacionController.$inject = ['$scope'];

	function OperacionController($scope){
		console.log("Controller");

		$scope.mostrar = true;
		$scope.logearse = function(){
			if($scope.usuario == 'Edgar' && $scope.password == '123'){
				console.log('valido')
				$scope.mostrar = true;
			} else {
				console.log('invalido')
				$scope.mostrar = false;
			}
		}
	}

})();