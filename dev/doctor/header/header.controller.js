(function(){
	angular
		.module('drApp.Doctor')
		.controller('DoctorHeaderController', DoctorHeaderController);

		DoctorHeaderController.$inject = ['$scope', 'DoctorFactory'];

		function DoctorHeaderController($scope, DoctorFactory){
			$scope.doctor = DoctorFactory.getDoctor();
		}
})();