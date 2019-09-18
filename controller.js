angular.module('MyFirstApp', [])
    .run(function($rootScope) {
        $rootScope.nombre = "Angular tutorial";
    })
    .controller('FirstController', function($scope) {
        $scope.nombre = "Marcos Baldiviezo";
        setTimeout(function() { 
            $scope.$apply(function() {
                $scope.nombre = "alan turing";
            });
        }, 1000);
    })
    .controller('ChildController', function($scope) {

    });
