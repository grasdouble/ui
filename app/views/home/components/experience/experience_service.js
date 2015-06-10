/**
 * Created by sebastien on 09/04/15.
 */
angular.module('SlmApp').service('ExperienceService',
    function () {

        this.experiencesData = [
            {
                typeXp: "pro",
                listExperiences: [
                    {
                        projet: "ERDF",
                        vignette: "img/vignette_exp_steria_erdf.jpg",
                        descriptionProjet: "<p>Le projet TAMARIS est une application destinée aux agents d'ERDF afin de planifier et d'organiser leurs activités sur le terrain.</p>" +
                        "<p>L'application dispose d'un client lourd en Flex pour la saisie et le suivi des plannings et des interventions, et d'un client PDA pour la consultation et la mise à jour des données sur les lieux d'intervention</p>",
                        descriptionMission: "<p>Dans une optique de migration de l'activité de développement de Paris vers Nantes, une équipe de quatre personnes a été créée (A ce jour, l'équipe compte environ quarante personnes).</p>" +
                        "<p>A ce titre, j'ai dans un premier temps été en charge, en complément de mes tâches de développement, de la coordination de l'activité entre Nantes et Paris.</p>" +
                        "<p>Mon poste à évolué avec la croissance de l'effectif Nantais, passant respectivement de Team Leader à Chef de Projet adjoint puis Chef de Projet MCO.</p>" +
                        "<p>Dans un souhait de me re-centrer sur l'activité de développement, j'ai cédé ma place de CP MCO pour reprendre une place de Référent Technique.</p>",
                        poste: "TEAM-LEADER",
                        duree: "mai 2013 - Aujourd'hui (2 ans)",
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
                        descriptionProjet: "<p>Le Pojet Pole-Emploi (GUPPI) est une application destinée au personnel de Pole-Emploi afin de les assister dans la gestion de le référentiel d'offre d'emploi.</p>" +
                        "<p>L'application à la particularité d'être développée à l'aide d'un framework MDA conçu par Pole-Emploi.</p>" +
                        "<p>Elle est accessible depuis un navigateur web</p>",
                        descriptionMission: "<p>Afin de renforcer l'équipe déjà présente, j'ai eu pour mission, d'en un premier temps, de me former et d'assister les nouveaux collaborateurs dans leur montée en compétence.</p>" +
                        "<p>Ensuite, j'ai participé à la refonte du module de consultation des offres d'emploi.</p>",
                        poste: "Ingénieur d'étude et développement",
                        duree: "février 2013 - avril 2013 (3 mois)",
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
                        descriptionProjet: "<p>Le projet MIOMCT est une TMA avec 4 projets (ACTES, ELOI, FNAEG, AGRIPPA) pour le Ministère de l'intérieur :</p>" +
                        "<p><b>-ACTES</b> est l'application permettant aux préfectures de contrôler les actes soumis au contrôle de légalité et budgétaire (ex : Arrêté municipale)</p>" +
                        "<p><b>-ELOI</b> est l'application de gestion des personnes en situation irrégulière.</p>" +
                        "<p><b>-AGRIPPA</b> est l'application de gestion des permis de port d'arme.</p>" +
                        "<p><b>-FNAEG</b> est le Fichier National Automatisé des Empreintes Génétiques</p>",
                        descriptionMission: "<p>Arrivée en tant que développeur, j'ai tout d'abord intégré l'équipe MCO du projet FNAEG pour progressivement participer aux développements des évolutions, à la rédaction des dossiers de test, à la rédaction de SFD/DCT.</p>" +
                        "<p>En parallèle de mes tâches de développement, on m'a peu à peu positionné en tant que Responsable d'application puis Responsable de l'équipe Nantaise.</p>",
                        poste: "Ingénieur d'étude et développement<",
                        duree: "novembre 2009 - février 2013 (3,5 ans)",
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
                        descriptionProjet: "<p>Im'Info était une PME de 5 salariés qui propose aux entreprises de réaliser leurs projets avec les technologies JAVA ou de les former sur les technologies émergeantes.</p>",
                        descriptionMission: "<p>Faisant suite à mon stage de BTS réalisé dans cette même société, j'ai intégré la structure comme développeur / formateur.</p>" +
                        "<p>J'ai été amené à rédiger ou compléter des supports de formation, réaliser des formations (Java init., JQuery) et à participer à la réalisation d'un projet pour la société Faiveley Transport qui avait pour mission de lire et d'analyser le contenu des boites noir présentent dans les trains.</p>",
                        poste: "Analyste Programmeur",
                        duree: "2009 - 2013 (3,5 ans)",
                        effectif: "5 personnes",
                        technos: ["Java, EclipseRCP",
                            "HTML, Javascript"
                        ]
                    }
                ]
            },
            {
                typeXp: "perso",
                listExperiences: [
                    {
                        projet: "CV-Web",
                        vignette: "img/vignette_exp_cv-web.png",
                        descriptionProjet: "<p>Il s'agit du projet correspondant au site que vous êtes en train de visité.</p>" +
                        "<p>L'objectif était dans un premier temps de rendre visible sur le web mon projet et ensuite de compléter mes connaissances sur AngularJS.</p>" +
                        "<p>Pour réaliser ce projet, j'ai tout d'abord fait le tour des templates et site web existant pour trouver l'inspiration et dessiner les grandes lignes de ce que je voulais mettre en avant que ce soit sur mes expériences passés ou sur mes connaissances.</p>" +
                        "<p>J'ai ensuite organisé mon projet en autant de composant que de section que je voulais détailler.</p>",
                        duree: "V1 : 3 semaines (2015)",
                        git: "<a href='https://github.com/slemouillour/sebastien-lemouillour.fr'>github.com/sebastien-lemouillour.fr</a>",
                        url: "",
                        technos: ["AngularJS, HTML, CSS",
                            "Grunt, Bower"
                        ]
                    },
                    {
                        projet: "ServeurGit",
                        vignette: "img/vignette_exp_ServeurGit.png",
                        descriptionProjet: "<p>Ce projet avait pour objectif de mieux appréhender l'outil de gestion de conf. GIT</p>" +
                        "<p>Utilisant depuis quelques années SVN pour gérer mes projets professionnels et personnels, lors du démarrage de mon projet de CV en ligne, " +
                        "j'ai souhaiter basculer sur Git pour tanter de comprendre tout l'intérêt qu'on lui porte.</p>" +
                        "<p>Afin d'avoir la vision la plus large possible de l'utilisation de Git sur un projet, j'ai, dans un premier temps, fait le choix de monter mon propre serveur Git plutot que d'utiliser GitHub.</p>" +
                        "<p>Cela ma permis de me rendre compte que l'administration de ce type de serveur pouvait être relativement simple (en particulier pour la création de 'repositorie' grâce à Gitolite)</p>" +
                        "<p>J'ai toutefois rencontré des difficultés pour recoupler les informations lors de l'installation des différents composants.</p>" +
                        "<p>Ce projet s'est terminé par la rédaction d'une documentation décrivant pas à pas les étapes à réaliser pour installer un serveur Git que l'on peut retrouver à l'adresse suivante : " +
                        "<a href='https://docs.google.com/document/d/1ExxHu4_RRXilRyxi29WG2nSOyDF8T5yapMlcQ_DPQWY/edit?usp=sharing'>https://docs.google.com/...</a></p>",
                        duree: "1 semaine (Fin 2014)",
                        git: "",
                        url: "<a href='http://sebastien-lemouillour.fr/gitweb/'>http://sebastien-lemouillour.fr/gitweb/</a>",
                        technos: ["Git, Gitolite, Gitweb",
                            "Unix"
                        ]
                    },
                    {
                        projet: "Annuaire de musée",
                        vignette: "img/vignette_exp_AnnuaireMusee.png",
                        descriptionProjet: "<p>Projet initié suite au souhait d'une entreprise de tester mes compétences php pour valider ou non une embauche.</p>" +
                        "<p>Il s'agissait de développer un mini annuaire des musées permettant la gestion de catégories et de fiches</p>" +
                        "<p>L'application est découpé en deux projets indépendant (le front-end et le back-end) de sorte qu'il sera possible de faire évoluer le front-end sans impacter le back-end</p>" +
                        "<p>1-/Le Back-End (PHP/MySQL)</p>" +
                        "<p>Le back-end met à disposition deux urls permettant de réaliser des actions sur les musées (<a href=\"http://back.annuaire.webizone.fr/musee/\">http://back.annuaire.webizone.fr/musee/</a>)" +
                        "et sur les catégories (<a href=\"http://back.annuaire.webizone.fr/categorie/\">http://back.annuaire.webizone.fr/categorie/</a>) en utilisant les requête GET, POST, PUT et DELETE. Il s'occupe donc de faire les interactions avec la base de données.</p>" +
                        "<p>2-/Le Front--End (AngularJS)</p>" +
                        "<p>Le front-end consomme les services fournis par le back-end pour permettre de gérer les musées et les catégories, il est accessible à l'adresse suivante : <a href=\"http://annuaire.webizone.fr/\">http://annuaire.webizone.fr/</a>. " +
                        "Afin de simplifier le plus possible l'expérience utilisateur, vous ne trouverez que deux écrans (un pour les musées et un pour les catégories) qui permettent l'ensemble des actions CRUD à travers un tableau modifiable par simple clique.</p>",
                        duree: "1 semaine (Mai 2015)",
                        git: "<a href='https://github.com/slemouillour/AnnuaireMusees_Front'>github.com/AnnuaireMusees_Front</a><br><a href='https://github.com/slemouillour/AnnuaireMusees_Back'>github.com/AnnuaireMusees_Back</a>",
                        url: "<a href='http://annuaire.webizone.fr/'>http://annuaire.webizone.fr/</a>",
                        technos: ["Git, Php5, Html",
                            "AngularJS"
                        ]
                    }
                ]
            }
        ];

        this.getDonnees = function getDonnees() {
            return this.experiencesData;
        };
    }
);