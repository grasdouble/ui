/**
 * Created by sebastien on 09/04/15.
 */
angular.module('website').directive('slmMenu', function () {
    'use strict';
    return {
        restrict: 'E',
        //priority: 0,
        templateUrl: 'app/views/home/components/menu/menu.html',
        //replace: bool,
        //transclude: bool,
        scope: true,
        controller: "MenuController",
        controllerAs: "menu"
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