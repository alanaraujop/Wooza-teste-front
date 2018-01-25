angular.module("novoContrato").directive("boxImg", function() {
    return {
        templateUrl: "view/box-img.html",
        scope: {
            img: "@",
            nome: "@",
            descricao: "@",
            link: "@"
        }
    }
});