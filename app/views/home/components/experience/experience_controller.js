/**
 * Created by sebastien on 09/04/15.
 */
angular.module('website')
    .controller('ExperienceController',
    function ($sce, $interval, $scope, ExperienceService) {

        this.validHTML = function validHTML(value) {
            return $sce.trustAsHtml(value);
        };

        var _this = this;

        this.type = "Pro";
        this.vignetteActive = 0;
        this.experiences = ExperienceService.getDonnees();
        this.INTERVAL = 5000;
        this.slide = null;
        this.stopSlide = false;

        this.nextSlide = function nextSlide() {
            if (_this.stopSlide) {
                $interval.cancel(_this.slide);
            } else {
                _this.vignetteActive = (_this.vignetteActive < 3) ? ++_this.vignetteActive : 0;
            }
        };

        this.loadSlides = function loadSlides() {
            this.slide = $interval(this.nextSlide, this.INTERVAL);
        };

        this.loadSlides();

    }
);