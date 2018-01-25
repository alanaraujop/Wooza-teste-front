angular.module("novoContrato").controller("cadastroCtrl", function($scope, $location) {
    $scope.cadastro = {
        "plataforma": ($location.search()).plataforma,
        "plano": ($location.search()).plano,
    };
    $scope.enviar = function(_cadastro) {
        console.log(_cadastro);
        alert("Solicitação realizada com sucesso!");
        $location.path("/plataformas");
    }
})