(function(){
    angular.module('pdApp')
        .controller('PesquisaUsuarioController', PesquisaUsuarioController);

    function PesquisaUsuarioController() {
        var vm = this;
        vm.nome='fabricio';
        vm.usuario = {
            cod:'1',
            nome:'fabricio',
            login:'T3032',
            email:'teste@gmail.com',
            tipoUsuario:'Supervior',
            dataValidadeSenha:'30/12/2016'
        };
        vm.listaUsuario = [];
        vm.gridOptions = {
            columnDefs: [
                {name:'Cod', field:'cod', width:60},
                {name:'Nome', field:'nome', width: 250},
                {name:'Login', field:'login', width: 150},
                {name:'Email', field:'email', width: 150},
                {name:'Tipo usuário', field:'tipoUsuario', width: 150},
                {name:'Dt validade senha', field:'dataValidadeSenha',
                    cellTemplate:'template/grid/cell-template-date.html'
                    , width: 100},
                {name:'', field:'editar',
                    cellTemplate:'template/grid/cell-template-editar.html'
                    , width: 40},
                {name:'', field:'excluir',
                    cellTemplate:'template/grid/cell-template-excluir.html'
                    , width: 40}
            ],
            data:'vm.listaUsuario',
            enableFiltering: true
        };

        vm.editar = editar;
        vm.excluir = excluir;

        function editar() {
            vm.usuario = {};
        }

        function excluir() {

        }

        iniciar();

        function iniciar() {
            vm.listaUsuario.push(vm.usuario);
        }
    }

})();