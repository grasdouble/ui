angular.module('website').directive('slmCompetencePb',
    function () {
        return {
            restrict: "E",
            bindToController: {
                //databinding dans les deux sens
                block: "="
            },
            controller: "CompetencePbController",
            controllerAs: "competencePb",
            templateUrl: "app/views/home/components/competencePb/competencePb.html",
            scope: true,
            link: function (scope, elem) {
                var onScroll = function onScroll() {
                    scope.offset =
                        elem[0].offsetTop -
                        window.innerHeight
                    ;


                    scope.positionY = window.scrollY;
                    if (scope.positionY > scope.offset) {
                        scope.competencePb.showRange = true;
                        scope.$digest();
                        window.removeEventListener("scroll", onScroll);
                    }
                };
                window.addEventListener("scroll", onScroll);
            }
        };
    }
);