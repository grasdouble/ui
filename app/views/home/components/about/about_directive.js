/**
 * Created by sebastien on 09/04/15.
 */
angular.module('website').directive('slmAbout', function () {
    'use strict';
    return {
        restrict: 'E',
        //priority: 0,
        templateUrl: 'app/views/home/components/about/about.html',
        //replace: bool,
        //transclude: bool,
        scope: true,
        controller: "AboutController",
        controllerAs: "about"
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