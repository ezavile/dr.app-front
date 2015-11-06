(function(){
	angular
		.module('drApp.Paciente')
		.directive('pacienteCitaUpdate', pacienteCitaUpdate);

		function pacienteCitaUpdate(){
			return {
				scope: {
					cita: "="
				},
				templateUrl: './paciente/admin/citas/modificar/modificar.html',
				controller: 'PacienteCitaUpdateController'
			}
		}
})();