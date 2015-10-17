(function () {

angular
	.module('drApp.Registro')
	.directive('registro', registro);

	function registro(){
		return{
			restrict: 'E',
			templateUrl: './registro/registro.html',
			link: function(scope){
				scope.registro = false;
			}
		}
	}

})();