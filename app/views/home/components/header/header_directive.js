/**
 * Created by sebastien on 09/04/15.
 */
angular.module('website').directive('slmHeader', function () {
    'use strict';
    return {
        restrict: 'E',
        //priority: 0,
        templateUrl: 'app/views/home/components/header/header.html',
        //replace: bool,
        //transclude: bool,
        scope: true,
        controller: "HeaderController",
        controllerAs: "header"
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