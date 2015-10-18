(function () {

	angular
		.module('drApp.Helpers')
		.directive('popupClose', popupClose)
		.directive('popupAdd', popupAdd)
		.directive('collapseHeaderMenu', collapseHeaderMenu);

		function popupClose(){
			return{
				restrict: 'A',
				link: function(scope, elem, attrs){
					//remove directive
					 elem.bind('click', function(e) {
					 	if(e.target != this) return;
						elem.remove();
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