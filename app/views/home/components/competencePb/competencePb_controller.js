angular.module('SlmApp').controller('CompetencePbController',
    function () {
        this.showRange = false;

        this.getBarColor = function getBarColor(technology) {

            var obj = {};

            if (this.showRange) {
                obj.width = technology.value + "%";
            }
            else {
                obj.width = "0";
            }

            return obj;
        };

    }
);