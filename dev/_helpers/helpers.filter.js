(function(){
	angular
		.module('drApp.Helpers')
		.filter('datetime', datetime)
		.filter('dateDDMMYYY', dateDDMMYYY);

		datetime.$inject = ['$filter'];

		function datetime($filter){
			return function(input){
				if(input == null){ return ""; } 

				var _date = $filter('date')(new Date(input),'dd/MM/yyyy - HH:mm:ss');
				return _date.toUpperCase();
			}
		}
		function dateDDMMYYY($filter){
			return function(input){
				if(input == null){ return ""; } 

				var _date = $filter('date')(new Date(input),'dd/MM/yyyy');
				return _date.toUpperCase();
			}
		}

})();