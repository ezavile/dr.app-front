(function () {

angular
	.module('drApp.Usuario')
	.directive('registro', registro);

	function registro(){
		return{
			restrict: 'E',
			templateUrl: './usuario/registro/registro.html',
			link: function(scope){
				scope.registro = false;
			},
			controller: 'RegistroController'
		}
	}

})();