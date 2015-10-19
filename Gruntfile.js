module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        //Génération de vues et composants angularJS
        sro_create_angular_components: {
            website: {
                views: [
                    "app/views/home"
                ],
                directives: [
                    "app/views/home/components/about",
                    "app/views/home/components/competence",
                    "app/views/home/components/competencePb",
                    "app/views/home/components/experience",
                    "app/views/home/components/header",
                    "app/views/home/components/menu"
                ]
            },
            options: {
                initServiceController: false,
                cssSuffix: "scss"
            }
        }
    });

//TASK
    grunt.registerTask('generate files', [
        'sro_create_angular_components'
    ]);


};