/**
 * Created by Otávio on 17/08/2015.
 */
(function() {
    'use strict';

    angular.module('helloWorldApp').controller('CadastroPessoaController', CadastroPessoaController);

    CadastroPessoaController.$inject = ['$scope', '$http'];
    function CadastroPessoaController($scope, $http) {
        $scope.pessoa = {};

        $scope.generos = [
            {value: 'F', label: 'Feminino'},
            {value: 'M', label: 'Masculino'}
        ];

        $scope.salvar = function () {
            alert("salvar");
            $http({
                method: 'POST',
                url: 'rest/hello-world/ola/pessoa',
                headers: {
                    "Content-Type": "application/json"
                },
                params: $scope.pessoa
            }).then(
                function (response) {
                    alert(response.data);
                },
                function (response) {
                    $scope.erro = response.data;
                }
            );
        };
        $scope.limpar = function () {
            $scope.generos.push({value: 'I', label: 'Indiferente'});
        };
        $scope.excluir = function () {

        };
    }
})();