/**
 * Created by sebastien on 09/04/15.
 */
angular.module('SlmApp').
    value('duScrollDuration', 500).
    value('duScrollOffset', 70).
    controller('MenuController', function ($scope, $document) {
        $scope.toTheTop = function () {
            $document.scrollTop(0, 5000);
        };
    }
);
