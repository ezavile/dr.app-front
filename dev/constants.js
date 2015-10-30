(function(){
	angular
		.module('drApp.Constants',[])
		.constant('URL', {
			URL_IMG_PERFIL_DEFAULT: 'http://localhost/Dr.App/back/uploads/perfil_default.jpg',
			URL_IMG_GALERIA_DEFAULT: 'http://localhost/Dr.App/back/uploads/galeria_default.jpg',
			URL_API_REST: 'http://localhost/Dr.App/back/index.php/'
		})
})();