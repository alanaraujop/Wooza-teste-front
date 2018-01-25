angular.module("novoContrato").controller("plataformasCtrl", function($scope, contratoApi, plataformas) {
    $scope.plataformas = plataformas.data.plataformas;
})