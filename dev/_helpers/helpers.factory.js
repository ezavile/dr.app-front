(function(){
	angular.module('drApp.Helpers')
	.factory('HelpersFactory', HelpersFactory);

	HelpersFactory.$inject = []

	function HelpersFactory(){

		var helperFactory = {};

		helperFactory.popupClose = function () {
			var popup = angular.element(document.querySelectorAll("[popup-close]"));
			popup[0].remove();
		};

		return helperFactory;
	}

})();