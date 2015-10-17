(function () {

angular
	.module('drApp.Header')
	.directive('header', header);

	header.$inject = ['$compile'];

	function header($compile){
		return{
			restrict: 'A', 
			templateUrl: './header/header.html',
			link: function(scope){
				//click inicio sesión -> popup
				$('.InicioSesion').click(function(){
					$('body').append($compile("<login/>")(scope));
					scope.$apply();
				});

				$('.Registrar').click(function(){
					$('body').append($compile("<registro/>")(scope));
					scope.$apply(); 
				});
			}
		}
	}

})();