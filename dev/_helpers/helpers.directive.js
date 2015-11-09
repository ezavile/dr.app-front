(function () {

	angular
		.module('drApp.Helpers')
		.directive('popupClose', popupClose)
		.directive('popupAdd', popupAdd)
		.directive('collapseHeaderMenu', collapseHeaderMenu)
		.directive('logout', logout)
		.directive('fileUpload', fileUpload)
		.directive('googleplace', googleplace)
		.directive('notify', notify);

		function notify(){
			return {
				restrict: 'E',
				template: "<article id='Notify' class='Notify'><div id='Notify-content' class='Notify-content'><span id='Notify-content-msj'></span><i class='icon-close' ng-click='close()'></i></div></article>",
				link: function(scope,elem,attrs){
					 scope.close = function(){
						var notify = angular.element(document.getElementById("Notify"));
						notify.removeClass('Notify--on');

						var estatus = angular.element(document.getElementById('Notify-content'));
						estatus.removeClass('Notify-content--error');
						estatus.removeClass('Notify-content--success');
					 }
				}
			}
		}

		function googleplace() {
			return {
				restrict: 'A',
				scope: {
					direccion: "=",
					coordenadas: "="
				},
				link: function(scope, element, attrs, model) {
					scope.gPlace = new google.maps.places.Autocomplete(element[0], {});
					google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
						var address = scope.gPlace.getPlace().formatted_address;
						var latitude = scope.gPlace.getPlace().geometry.location.lat();
						var longitude = scope.gPlace.getPlace().geometry.location.lng();

						scope.direccion = address;
						scope.coordenadas = latitude + ',' + longitude;
						scope.$apply();
					});
				}
			};
		}

		fileUpload.$inject = ['HelpersService'];

		function fileUpload(HelpersService){
			return {
				restrict: 'A',
				scope:{
					fileUpload:'='
				},
				link: function(scope, element, attrs) {
					element.bind('change', function(){
						var file = element[0].files[0];
						HelpersService
							.upload(file)
							.then(function(response){
								scope.fileUpload = response.url;
							})
							.catch(function(response){
								console.log(response);
							});
					});
				}
			}
		}

		logout.$inject = ['$state', 'UsuarioFactory'];

		function logout($state, UsuarioFactory){
			return{
				restrict: 'A',
				link: function(scope, elem, attrs){
					var usuario = UsuarioFactory;
					elem.bind('click', function(e) {
						usuario.logout();
						$state.transitionTo('usuario.principal', null, {'reload':true});
					});
				}
			}
		}

		function popupClose(){
			return{
				restrict: 'A',
				link: function(scope, elem, attrs){
					//remove directive
					 elem.bind('click', function(e) {
					 	if(e.target != this) return;
						elem.remove();

						var body = angular.element(document).find('body');
						body.removeClass('popup-on');
					 });
				}
			}
		}

		popupAdd.$inject = ['$compile'];

		function popupAdd($compile){
			return{
				restrict: 'A',
				link: function(scope, elem, attrs) {
					var body = angular.element(document).find('body');
					elem.bind('click', function() {
						body.addClass('popup-on');
						body.append($compile(attrs.popupAdd)(scope));
					});
				}
			}
		}

		function collapseHeaderMenu(){
			return{
				restrict: 'A', 
				link: function(scope, element, attrs){
					var menuCollapse = true;
					element.bind('click', function(e) {
						if (e.target.className === 'Header-perfil-config icon-settings'){
							menuCollapse = !menuCollapse;
							collapse();
						}
					});

					var menu = element[0].querySelector('.Header-perfil-menu');
					menu = angular.element(menu);
					
					function collapse(){
						if(!menuCollapse){
							menu.addClass('u-menu-collapse');
						} else {
							menu.removeClass('u-menu-collapse');
						}
					}

					var body = angular.element(document).find('body');
					body.bind('click', function(e){
						if(e.target.className !== 'Header-perfil-config icon-settings'){
							if(!menuCollapse){
								menu.removeClass('u-menu-collapse');
								menuCollapse = !menuCollapse;
							}
						}
					})
				}
			}
		}


})();