(function () {
    angular.module('pdApp')
        .controller('CadastroUsuarioController', CadastroUsuarioController);

    function CadastroUsuarioController($rootScope, UsuarioService) {
        var vm = this;
        vm.sequence = sequence;
        vm.usuario = {};
        vm.listaUsuarioAux = [];
        vm.salvar = salvar;

        iniciar();

        function iniciar() {
            if($rootScope.usuarioPraEdicao){
                vm.usuario = $rootScope.usuarioPraEdicao;
            }
        }

        function sequence() {
            if(UsuarioService.buscar('sequence')){
                vm.sequence = UsuarioService.buscar('sequence');
                vm.sequence = vm.sequence + 1;
                UsuarioService.salvar('sequence', vm.sequence);
            } else{
                vm.sequence = 1;
                UsuarioService.salvar('sequence', vm.sequence);
            }
        }

        function salvar() {
            if(!validarFormulario){
                return;
            }


            if(UsuarioService.buscar('listaUsuario')){
                vm.listaUsuarioAux = UsuarioService.buscar('listaUsuario');
            }
            vm.listaUsuarioAux.push(vm.usuario);
            UsuarioService.salvar('listaUsuario', vm.listaUsuarioAux);
            vm.usuario = {};
        }

        function validarFormulario() {
            var msg = "";
            if(!vm.usuario.nome){msg = "Erro nome\n"};
            if(!vm.usuario.nome){msg = "Erro nome\n"};

            if(msg.length > 0){
                alert(msg);
                return true;
            } else{
                return false;
            }

        }
    }
})();