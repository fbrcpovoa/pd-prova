(function () {
    angular.module('pdApp')
        .service('UsuarioService', UsuarioService);

    function UsuarioService(localStorageService) {
        this.salvar = salvar;
        this.buscar = buscar;

        function salvar(nomeColecao, dados) {
            localStorageService.set(nomeColecao, dados);
        }

        function buscar(nomeColecao) {
            return localStorageService.get(nomeColecao);
        }
    }
})();