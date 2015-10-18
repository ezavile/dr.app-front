(function () {

	angular
		.module('drApp.Helpers')
		.directive('popupClose', popupClose)
		.directive('popupAdd', popupAdd)

		function popupClose(){
			return{
				restrict: 'A',
				link: function(){
					//remove directive
					$('.Popup').click(function(e){
						if(e.target != this) return;
						$(this).remove();
					});
				}
			}
		}

		popupAdd.$inject = ['$compile'];

		function popupAdd($compile){
			return{
				restrict: 'A',
				link: function(scope, elem, attrs) {
					 elem.bind('click', function() {
					 	$('body').append($compile(attrs.popupAdd)(scope));
					 });
				}
			}
		}

})();