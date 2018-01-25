angular.module("novoContrato").directive("boxInfo", function() {
    return {
        templateUrl: "view/box-info.html",
        scope: {
            titulo: "@",
            descricao: "@",
            link: "@"
        }
    }
});