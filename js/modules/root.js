angular.module('root', [])
    .controller("index", ["$scope", function ($scope) {
        $scope.message = "Hola mundo desde js/root.js Angular";
    }]);