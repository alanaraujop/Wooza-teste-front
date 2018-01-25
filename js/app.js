angular.module("novoContrato", ["ngRoute", "ngMask"]);

angular.module("novoContrato").config(function($routeProvider) {
    $routeProvider.when("/plataformas", {
            templateUrl: "view/plataformas.html",
            controller: "plataformasCtrl",
            resolve: {
                plataformas: function(contratoApi) {
                    return contratoApi.getPlataformas();
                }
            }
        })
        .when("/planos", {
            templateUrl: "view/planos.html",
            controller: "planosCtrl",
            resolve: {
                planos: function(contratoApi, $location) {
                    return contratoApi.getPlanos(($location.search()).plataforma);
                }
            }
        })
        .when("/cadastro", {
            templateUrl: "view/cadastro.html",
            controller: "cadastroCtrl"
        }).otherwise("/plataformas")
});