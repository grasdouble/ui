/**
 * Created by sebastien on 09/04/15.
 */
angular.module('SlmApp').controller('ExperienceController',
    function ($sce) {

        this.validHTML = function validHTML(value) {
            return $sce.trustAsHtml(value);
        };


        this.projet = "ERDF";
        this.vignetteActive = 0;
        this.listExperiences = [
            {
                projet: "ERDF",
                vignette: "img/vignette_exp_steria_erdf.jpg",
                descriptionProjet: "Le projet TAMARIS est une application destinée aux agents d'ERDF afin de planifier et d'organiser leurs activités sur le terrain.<br> L'application dispose d'un client lourd en Flex pour la saisie et le suivi des plannings et des interventions, et d'un client PDA pour la consultation et la mise à jour des données sur les lieux d'intervention",
                descriptionMission: "Dans une optique de migration de l'activité de développement de Paris vers Nantes, une équipe de quatre personnes a été créée (A ce jour, l'équipe compte environ quarante personnes).<br><br> A ce titre, j'ai dans un premier temps été en charge, en complément de mes tâches de développement, de la coordination de l'activité entre Nantes et Paris.<br><br> Mon poste à évolué avec la croissance de l'effectif Nantais, passant respectivement de Team Leader à Chef de Projet adjoint puis Chef de Projet MCO.<br><br> Dans un souhait de me re-centré sur l'activité de développement, j'ai cédé ma place de CP MCO pour reprendre une place de Référent Technique.",
                poste: "TEAM-LEADER",
                duree: "2013 - 2015 (2,5 ans)",
                effectif: "env. 70 personnes (dont 40 à Nantes)",
                technos: ["Java, Hibernate, SpringMVC, SpringBatch",
                    "Flex, AngularJS",
                    "Oracle,MySQL",
                    "AutoIt",
                    "HP Quality Center, Mantis"
                ]

            },
            {
                projet: "POLEEMPLOI",
                vignette: "img/vignette_exp_steria_poleemploi.jpg",
                descriptionProjet: "Le Pojet Pole-Emploi (GUPPI) est une application destinée au personnel de Pole-Emploi afin de les assister dans la gestion de le référentiel d'offre d'emploi.<br><br> L'application à la particularité d'être développée à l'aide d'un framework MDA conçu par Pole-Emploi.<br><br> Elle est accessible depuis un navigateur web",
                descriptionMission: "Afin de renforcer l'équipe déjà présente, j'ai eu pour mission, d'en un premier temps, de me former et d'assister les nouveaux collaborateurs dans leur montée en compétence.<br><br> Ensuite, j'ai participé à la refonte du module de consultation des offres d'emploi.",
                poste: "Ingénieur d'étude et développement",
                duree: "2013 - 2013 (3 mois)",
                effectif: "env. 50 personnes (dont 30 à Nantes)",
                technos: ["Java, Hibernate, Framework Pole-Emploi(MDA)",
                    "HTML, Javascript",
                    "Oracle",
                    "HP Quality Center, Mantis"
                ]

            },
            {
                projet: "MIOMCT",
                vignette: "img/vignette_exp_steria_miomct.jpg",
                descriptionProjet: "Le projet MIOMCT est une TMA avec 4 projets (ACTES, ELOI, FNAEG, AGRIPPA) pour le Ministère de l'intérieur :<br><br> <b>-ACTES</b> est l'application permettant aux préfectures de contrôler les actes soumis au contrôle de légalité et budgétaire (ex : Arrêté municipale)<br><br> <b>-ELOI</b> est l'application de gestion des personnes en situation irrégulière.<br><br> <b>-AGRIPPA</b> est l'application de gestion des permis de port d'arme.<br><br> <b>-FNAEG</b> est le Fichier National Automatisé des Empreintes Génétiques<br><br>",
                descriptionMission: "Arrivée en tant que développeur, j'ai tout d'abord intégré l'équipe MCO du projet FNAEG pour progressivement participer aux développements des évolutions, à la rédaction des dossiers de test, à la rédaction de SFD/DCT.<br><br> En parallèle de mes tâches de développement, on m'a peu à peu positionné en tant que Responsable d'application puis Responsable de l'équipe Nantaise.",
                poste: "Ingénieur d'étude et développement<",
                duree: "2009 - 2013 (3,5 ans)",
                effectif: "10 personnes (dont 6 à Nantes)",
                technos: ["Java, Hibernate, Struts",
                    "Php5",
                    "HTML, Javascript",
                    "Oracle, MySQL",
                    "HP Quality Center, Mantis",
                    "Unix"
                ]

            },
            {
                projet: "IMINFO",
                vignette: "img/vignette_exp_iminfo.jpg",
                descriptionProjet: "Im'Info était une PME de 5 salariés qui propose aux entreprises de réaliser leurs projets avec les technologies JAVA ou de les former sur les technologies émergeantes.",
                descriptionMission: "Faisant suite à mon stage de BTS réalisé dans cette même société, j'ai intégré la structure comme développeur / formateur.<br><br> J'ai été amené à rédiger ou compléter des supports de formation, réaliser des formations (Java init., JQuery) et à participer à la réalisation d'un projet pour la société Faiveley Transport qui avait pour mission de lire et d'analyser le contenu des boites noir présentent dans les trains.",
                poste: "Analyste Programmeur",
                duree: "2009 - 2013 (3,5 ans)",
                effectif: "5 personnes",
                technos: ["Java, EclipseRCP",
                    "HTML, Javascript"
                ]

            }
        ];
    }
);