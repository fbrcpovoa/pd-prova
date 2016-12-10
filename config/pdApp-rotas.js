(function () {
    angular.module('pdApp')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        var pesquisaUsuario = {
            name: 'pesquisa-usuario',
            url: '/pesquisa-usuario',
            templateUrl: 'view/pesquisa-usuario.html'
        };
        var cadastroUsuario = {
            name: 'cadastro-usuario',
            url: '/cadastro-usuario',
            templateUrl: 'view/cadastro-usuario.html'
        };

        $stateProvider
            .state('pesquisaUsuario', pesquisaUsuario)
            .state('cadastroUsuario', cadastroUsuario);

        $urlRouterProvider.otherwise('/pesquisa-usuario');

    }
})();