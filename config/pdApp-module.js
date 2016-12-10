(function () {

    angular.module('pdApp',
        [
            'ngMessages',
            'ngAnimate',
            'toastr',
            'ui.grid',
            'ngMaterial',
            'ui.router',
            'oc.lazyLoad',
            'LocalStorageModule',
            'angular-loading-bar'
        ]
    )
        .controller('PdAppController', PdAppController);

    function PdAppController($state) {
        var vm = this;
        vm.goCadastro = goCadastro;
        vm.goPesqusia = goPesquisa;

        function goCadastro() {
            $state.go('cadastroUsuario');
        }

        function goPesquisa() {
            $state.go('pesquisaUsuario');
        }
    }

})();
    