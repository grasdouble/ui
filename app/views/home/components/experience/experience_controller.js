/**
 * Created by sebastien on 09/04/15.
 */
angular.module('SlmApp').controller('ExperienceController',
    function ($sce, ExperienceService) {

        this.validHTML = function validHTML(value) {
            return $sce.trustAsHtml(value);
        };

        this.type = "Pro";
        this.projetPro = "ERDF";
        this.projetPerso = "CV-Web";
        this.vignetteActive = 0;

        this.experiences = ExperienceService.getDonnees();

    }
);