/**
 * Created by sebastien on 09/04/15.
 */
angular.module('SlmApp').service('CompetenceService',
    function () {


        this.listCompetencesData = [
            {
                listBloc: [
                    {
                        rubrique: "Langage",
                        technos: [
                            {
                                item: "Java",
                                value: "80",
                                style: "progress-bar-info"
                            },
                            {
                                item: "Php",
                                value: "40",
                                style: "progress-bar-info"
                            },
                            {
                                item: "Javascript",
                                value: "50",
                                style: "progress-bar-info"
                            },
                            {
                                item: "HTML",
                                value: "70",
                                style: "progress-bar-info"
                            },
                            {
                                item: "CSS",
                                value: "65",
                                style: "progress-bar-info"
                            }
                        ]

                    },
                    {
                        rubrique: "SGBD",
                        technos: [
                            {
                                item: "Oracle",
                                value: "75",
                                style: "progress-bar-warning"
                            },
                            {
                                item: "MySQL",
                                value: "70",
                                style: "progress-bar-warning"
                            },
                            {
                                item: "MongoDB",
                                value: "35",
                                style: "progress-bar-warning"
                            }
                        ]
                    }
                ]
            },
            {
                listBloc: [
                    {
                        rubrique: "Frameworks Php / Javascript",
                        technos: [
                            {
                                item: "Symfony",
                                value: "30",
                                style: ""
                            },
                            {
                                item: "NodeJS",
                                value: "60",
                                style: ""
                            },
                            {
                                item: "SailsJS",
                                value: "55",
                                style: ""
                            },
                            {
                                item: "AngularJS",
                                value: "65",
                                style: ""
                            },
                        ]
                    },
                    {
                        rubrique: "Frameworks Java",
                        technos: [
                            {
                                item: "Struts",
                                value: "60",
                                style: "progress-bar-success"
                            },
                            {
                                item: "Hibernate",
                                value: "70",
                                style: "progress-bar-success"
                            },
                            {
                                item: "Spring",
                                value: "50",
                                style: "progress-bar-success"
                            }
                        ]
                    }
                ]
            },
            {
                listBloc: [
                    {
                        rubrique: "Outils",
                        technos: [
                            {
                                item: "Npm",
                                value: "60",
                                style: "progress-bar-danger"
                            },
                            {
                                item: "Bower",
                                value: "60",
                                style: "progress-bar-danger"
                            },
                            {
                                item: "Grunt",
                                value: "70",
                                style: "progress-bar-danger"
                            },
                        ]
                    },
                    {
                        rubrique: "&nbsp;",
                        technos: [
                            {
                                item: "HP QC",
                                value: "60",
                                style: "progress-bar-danger"
                            },
                            {
                                item: "Mantis",
                                value: "80",
                                style: "progress-bar-danger"
                            },
                            {
                                item: "AutoIt",
                                value: "30",
                                style: "progress-bar-danger"
                            }
                        ]
                    }
                ]
            }
        ];

        this.getDonnees = function getDonnees() {

            return this.listCompetencesData;
        };
    }
);