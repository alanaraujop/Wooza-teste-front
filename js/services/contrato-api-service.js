angular.module("novoContrato").factory("contratoApi", function($http) {
    var _getPlanos = function(_sku) {
        return $http.get("http://private-59658d-celulardireto2017.apiary-mock.com/planos/" + _sku);
    }
    var _getPlataformas = function() {
        return $http.get("http://private-59658d-celulardireto2017.apiary-mock.com/plataformas");
    }
    return {
        getPlanos: _getPlanos,
        getPlataformas: _getPlataformas
    }
});