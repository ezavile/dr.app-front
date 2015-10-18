(function () {

	angular
		.module('drApp.Helpers')
		.directive('popupClose', popupClose)
		.directive('popupAdd', popupAdd)

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

})();