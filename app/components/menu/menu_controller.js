/**
 * Created by sebastien on 09/04/15.
 */
angular.module('SlmApp').
    value('duScrollDuration', 2000).
    value('duScrollOffset', 75).
    controller('MenuController', function ($scope, $document) {
        $scope.toTheTop = function () {
            $document.scrollTop(0, 5000);
        };
    }
);
