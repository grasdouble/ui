/**
 * Created by sebastien on 09/04/15.
 */
angular.module('SlmApp').directive('slmExperience2', function () {
    'use strict';
    return {
        restrict: 'E',
        //priority: 0,
        templateUrl: 'app/components/experience2/experience.html',
        //replace: bool,
        //transclude: bool,
        scope: true,
        controller: "Experience2Controller",
        controllerAs: "experience2"
        //require: string,
        //link: function postLink(scope, iElement, iAttrs) {},
        //compile: function compile(tElement, tAttrs, transclude) {
        //    return {
        //        pre: function preLink(scope, iElement, iAttrs, controller) {},
        //        post: function postLink(scope, iElement, iAttrs, controller) {}
        //    }
        //}

    };
});