/**
 * Created by sebastien on 09/04/15.
 */
angular.module('SlmApp').
    value('duScrollDuration', 500).
    value('duScrollOffset', 60).
    controller('MenuController',
    function ($scope) {

        var _this = this;

        //var headerElement = document.getElementById("sroHeader");
        var positionY = -1;
        this.menuFixed = false;

        var onScroll = function onScroll() {
            positionY = window.scrollY;
            //headerElement.style.backgroundPositionY = -positionY / 3 + "px";
            if (positionY > 460) {
                if (_this.menuFixed === false) {
                    _this.menuFixed = true;
                    $scope.$digest();
                }
            }
            else {
                if (_this.menuFixed === true) {
                    _this.menuFixed = false;
                    $scope.$digest();
                }
            }

        };

        window.addEventListener("scroll", onScroll);
    }
);