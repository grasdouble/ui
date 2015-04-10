angular.module('SlmApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/components/competence/competence.html',
    ""
  );


  $templateCache.put('app/components/experience/experience.html',
    "<div id=experience class=experience><div class=mission><div class=mission-ico><span></span></div><div class=mission-detail><h3 class=mission-titre>TEAM Leader, Steria (ERDF)</h3><p class=mission-desc>Dans l'optique de la migration de l'activité de développement de Paris à Nantes, une équipe de 4 personnes a été créée. J'ai pour rôle de coordonner le travail de l'équipe Nantaise avec le CP Parisien. Le poste a évolué en suivant la croissance du projet (passage de 4 à 40 personnes). Dans un premier temps chef de projet évolution adjoint puis chef de projet MCO.</p><div class=mission-date>2013 - 2015</div></div></div><div class=mission><div class=mission-ico><span></span></div><div class=mission-detail><h3 class=mission-titre>Ingénieur d'étude et développement, Steria (POLE-EMPLOI)</h3><p class=mission-desc></p><div class=mission-date></div></div></div><div class=mission><div class=mission-ico><span></span></div><div class=mission-detail><h3 class=mission-titre>Ingénieur d'étude et développement, Steria (Ministère de l'intérieur)</h3><p class=mission-desc></p><div class=mission-date></div></div></div><div class=mission><div class=mission-ico><span></span></div><div class=mission-detail><h3 class=mission-titre>Développeur/Formateur, Im'Info</h3><p class=mission-desc></p><div class=mission-date></div></div></div></div>"
  );


  $templateCache.put('app/components/header/header.html',
    ""
  );


  $templateCache.put('app/index.html',
    "<!doctype html><html class=no-js><head><meta charset=utf-8><title></title><base href=\"/\"><meta name=description content=\"\"><meta name=viewport content=\"width=device-width\"><link rel=stylesheet href=\"/dist/style.min.css\"></head><body ng-app=SlmApp><div class=header><div class=\"navbar navbar-inverse\" role=navigation><div class=container><div class=navbar-header><button type=button class=\"navbar-toggle collapsed\" data-toggle=collapse data-target=#js-navbar-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=\"/\">sebastien-lemouillour.fr</a></div><div class=\"collapse navbar-collapse\" id=js-navbar-collapse><ul class=\"nav navbar-nav\"><li class=active><a href=\"/\">Home</a></li><li><a ng-href=/experience>Expérience</a></li><li class=dropdown><a class=dropdown-toggle data-toggle=dropdown role=button aria-expanded=false>Projets <span class=caret></span></a><ul class=dropdown-menu role=menu><li><a ng-href=/projetspro>Projets Professionnels</a></li><li><a ng-href=/projetsperso>Projets Personnels</a></li></ul></li><li><a ng-href=/contact>Contact</a></li></ul></div></div></div></div><div class=container><div ng-view=\"\"></div></div><div class=footer><div class=container><p><span class=\"glyphicon glyphicon-sunglasses\"></span> from sebastien le mouillour</p></div></div><script>!function (A, n, g, u, l, a, r) {\n" +
    "        A.GoogleAnalyticsObject = l, A[l] = A[l] || function () {\n" +
    "            (A[l].q = A[l].q || []).push(arguments)\n" +
    "        }, A[l].l = +new Date, a = n.createElement(g),\n" +
    "                r = n.getElementsByTagName(g)[0], a.src = u, r.parentNode.insertBefore(a, r)\n" +
    "    }(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');\n" +
    "\n" +
    "    ga('create', 'UA-XXXXX-X');\n" +
    "    ga('send', 'pageview');</script><script src=/dist/script.min.js></script></body></html>"
  );


  $templateCache.put('app/views/home/home.html',
    "<div class=row><div class=\"col-xs-12 col-sm-3\"><a class=twitter-timeline href=https://twitter.com/Sebastien_LM data-widget-id=585386186497249280>Tweets de @Sebastien_LM</a><script>!function (d, s, id) {\n" +
    "            var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';\n" +
    "            if (!d.getElementById(id)) {\n" +
    "                js = d.createElement(s);\n" +
    "                js.id = id;\n" +
    "                js.src = p + \"://platform.twitter.com/widgets.js\";\n" +
    "                fjs.parentNode.insertBefore(js, fjs);\n" +
    "            }\n" +
    "        }(document, \"script\", \"twitter-wjs\");</script></div><div class=\"col-xs-12 col-sm-9\"><slm-experience></slm-experience></div></div>"
  );

}]);
