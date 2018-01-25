angular.module("novoContrato").controller("planosCtrl", function($scope, contratoApi, planos, $location) {
    $scope.planos = planos.data.planos;
    $scope.plataforma = ($location.search()).plataforma;
})