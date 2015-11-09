(function () {

	angular
		.module('drApp.Usuario')
		.controller('LoginController', LoginController);

		LoginController.$inject = ['$scope', '$state', 'LoginService', 'UsuarioFactory', 'PacienteFactory', 'DoctorFactory', 'HelpersFactory'];

		function LoginController($scope, $state, LoginService, UsuarioFactory, PacienteFactory, DoctorFactory, HelpersFactory){ 
			var helper = HelpersFactory;
			var usuario = UsuarioFactory;
			var paciente = PacienteFactory;
			var doctor = DoctorFactory;

			$scope.usr = {};
			$scope.login = function(){
				LoginService
					.login($scope.usr)
					.then(function(res){
						if(res.estatus=='success'){
							if(res.tipoUsuario === 'paciente'){
								usuario.setTipoUsuario(res.tipoUsuario);
								paciente.setInfo(res.paciente);
								helper.notify(res);
								$state.reload();
								helper.popupClose();
							}
							if(res.tipoUsuario === 'doctor'){
								usuario.setTipoUsuario(res.tipoUsuario);
								doctor.setDoctor(res.doctor);
								helper.notify(res);
								$state.reload();
								helper.popupClose();
							}
						} else {
							helper.notify(res);
						}
					})
					.catch(function(res){
						helper.notify(res);
					});
			}
		}

})();