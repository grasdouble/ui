/**
 * Created by sebastien on 09/04/15.
 */
angular.module('SlmApp').controller('CompetenceController',
    function ($sce, CompetenceService) {

        this.validHTML = function validHTML(value) {
            return $sce.trustAsHtml(value);
        };

        this.listCompetences = CompetenceService.getDonnees();
    }
);