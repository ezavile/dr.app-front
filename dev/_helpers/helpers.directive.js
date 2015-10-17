(function () {

	angular
		.module('drApp.Helpers')
		.directive('popup', popup);

		function popup(){
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

})();