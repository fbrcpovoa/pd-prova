(function () {
    angular.module('pdApp')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        var pesquisaUsuario = {
            name: 'pesquisa-usuario',
            url: '/pesquisa-usuario',
            templateUrl: 'view/pesquisa-usuario.html',
        };

        $stateProvider
            .state('pesquisaUsuario', pesquisaUsuario);

        $urlRouterProvider.otherwise('/pesquisa-usuario');

    }
})();