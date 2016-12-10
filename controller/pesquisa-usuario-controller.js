(function(){
    angular.module('pdApp')
        .controller('PesquisaUsuarioController', PesquisaUsuarioController);

    function PesquisaUsuarioController($rootScope, $state, UsuarioService) {
        var vm = this;
        vm.usuario = {};
        vm.listaUsuario = [];
        vm.gridOptions = {
            columnDefs: [
                {name:'Cod', field:'cod', width:60},
                {name:'Nome', field:'nome', width: 250},
                {name:'Login', field:'login', width: 150},
                {name:'Email', field:'email', width: 150},
                {name:'Tipo usuário', field:'tipo', width: 200},
                {name:'Dt validade senha', field:'dataValidadeSenha',
                    cellTemplate:'template/grid/cell-template-date.html'
                    , width: 200},
                {name:'..', field:'editar',
                    cellTemplate:'template/grid/cell-template-editar.html'
                    , width: 40},
                {name:'.', field:'excluir',
                    cellTemplate:'template/grid/cell-template-excluir.html'
                    , width: 40}
            ],
            data:'vm.listaUsuario',
            enableFiltering: true
        };

        vm.cadastro = cadastro;
        vm.editar = editar;
        vm.excluir = excluir;

        iniciar();

        function editar(linha) {
            var index = vm.listaUsuario.indexOf(linha);
            $rootScope.usuarioPraEdicao = vm.listaUsuario[index];
            $state.go('cadastroUsuario');
        }

        function excluir(linha) {
            var index = vm.listaUsuario.indexOf(linha);
            vm.listaUsuario.splice(index, 1)
            UsuarioService.salvar('listaUsuario', vm.listaUsuario);
        }

        function cadastro() {
            $state.go('cadastroUsuario');
        }

        function iniciar() {
            if(UsuarioService.buscar('listaUsuario')){
                vm.listaUsuario = UsuarioService.buscar('listaUsuario');
            } else { vm.listaUsuario = []}

        }

    }

})();