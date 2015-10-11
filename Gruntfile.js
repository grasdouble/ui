module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        //Controle de qualité
        jshint: {
            allFiles: [
                'app/**/*.js',
                '!app/templates.js',
                '!app/vendors/**/*.js'
            ],
            options: {
                jshintrc: true,
                reporter: require('jshint-stylish')
            }
        },
        csslint: {
            options: {
                csslintrc: '.csslintrc'
            },
            strict: {
                options: {
                    import: 2
                },
                src: [
                    'app/**/*.css',
                    '!app/vendors/**/*.css'
                ]
            }
        },
        //Optimisation
        ngtemplates: {
            SlmApp: {
                src: ['app/**/*.html'],
                dest: 'app/templates.js',
                standalone: true,
                options: {
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true,// Only if you don't use comment directives!
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                }
            }
        },
        //Concaténation de fichier
        concat: {
            css: {
                src: [
                    'app/**/*.css'
                ],
                dest: 'run/dist/style-css.css'
            },
            sass: {
                src: [
                    'app/**/*.scss'
                ],
                dest: 'run/dist/style-scss.scss'
            },
            'sass-css': {
                src: [
                    'run/dist/style-scss.css',
                    'run/dist/style-css.css'
                ],
                dest: 'run/dist/style.css'
            },
            'js-not-min': {
                src: [
                    "app/app.js",
                    "app/**/*.js",
                    "!app/vendors/**/*.min.js"
                ],
                dest: 'run/dist/script.js'
            },
            'js-vendors': {
                src: [
                    "app/vendors/js/angular.min.js",
                    "app/vendors/**/*.min.js",
                    "!run/dist/script.min.js"
                ],
                dest: 'run/dist/vendors.min.js'
            }
        },
        //Optimisation Angular -
        //Add, remove and rebuild angularjs dependency injection annotations
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            application: {
                files: {
                    'run/dist/script.js': ['run/dist/script.js']
                }
            }
        },
        //Optimisation CSS
        //Parse CSS and add vendor-prefixed CSS properties
        autoprefixer: {
            single_file: {
                src: 'run/dist/style.css',
                dest: 'run/dist/style.css'
            }
        },
        //
        sass: {
            dist: {
                options: {
                    sourcemap: "none",
                    style: "expanded"
                },
                files: [
                    {
                        'run/dist/style-scss.css': 'run/dist/style-scss.scss'
                    }
                ]
            }
        },
        //Minification CSS et JS
        cssmin: {
            options: {
                sourceMap: false
            },
            css: {
                src: 'run/dist/style.css',
                dest: 'run/dist/style.min.css'
            }
        },
        uglify: {
            js: {
                files: {
                    'run/dist/script.min.js': ['run/dist/script.js']
                }
            }
        },
        //Copies de fichiers
        copy: {
            bowerCSS: {
                src: [
                    'node_modules/_bower/**/font-awesome.min.css',
                    'node_modules/_bower/**/bootstrap.min.css',
                    'node_modules/_bower/**/animate.min.css'
                ],
                dest: 'app/vendors/css/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            bowerJS: {
                src: [
                    'node_modules/_bower/angular*/*.min.js',
                    'node_modules/_bower/angular-i18n/angular-locale_fr-fr.js'
                ],
                dest: 'app/vendors/js/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            bowerFONT: {
                src: [
                    'node_modules/_bower/**/FontAwesome.otf',
                    'node_modules/_bower/**/fontawesome-webfont.eot',
                    'node_modules/_bower/**/fontawesome-webfont.svg',
                    'node_modules/_bower/**/fontawesome-webfont.ttf',
                    'node_modules/_bower/**/fontawesome-webfont.woff',
                    'node_modules/_bower/**/fontawesome-webfont.woff2'
                ],
                dest: 'fonts/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            genLivrable: {
                files: [
                    {
                        src: ['img/*'],
                        dest: 'run/livrable/img/',
                        expand: true,
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        src: ['run/dist/*'],
                        dest: 'run/livrable/dist/',
                        expand: true,
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        src: ['fonts/*'],
                        dest: 'run/livrable/fonts/',
                        expand: true,
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        src: ['app/index.html'],
                        dest: 'run/livrable/',
                        expand: true,
                        flatten: true,
                        filter: 'isFile'
                    }
                ]

            }
        },
        //Tâches à réaliser en cas de modification
        watch: {
            html: {
                files: ['app/**/*.html'],
                tasks: ['ngtemplates']
            },
            css: {
                files: ['app/**/*.css', 'app/**/*.scss'],
                tasks: ['generateCSS']
            },
            js: {
                files: ['app/**/*.js'],
                tasks: ['concat:js-not-min', 'ngAnnotate', 'uglify:js', 'concat:js-vendors', 'jshint', 'clean:end-build'],
                options: {
                    interrupt: true
                }
            },
            livereload: {
                files: ['run/dist/*.min.*', 'index.html'],
                options: {livereload: true}
            }
        },
        //Netoyage
        clean: {
            livrable: ["run/livrable"],
            dist: ["run/dist/"],
            "end-build": [
                'run/dist/style.css',
                'run/dist/script.js',
                'run/dist/style-css.css',
                'run/dist/style-scss.css',
                'run/dist/style-scss.scss'
            ]
        },
        //Démarrage de serveur
        express: {
            dev: {
                options: {
                    script: 'server.js',
                    spawn: false
                }
            }
        },
        //Génération de vues et composants angularJS
        sro_create_angular_components: {
            SlmApp: {
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

//Sub TASK
    grunt.registerTask("generateJS", [
        'ngtemplates',
        'concat:js-not-min',
        'ngAnnotate',
        'uglify:js',
        'concat:js-vendors',
        'clean:end-build'
    ]);

    grunt.registerTask("generateCSS", [
        'concat:sass',
        'concat:css',
        'sass',
        'concat:sass-css',
        'autoprefixer',
        'cssmin',
        'clean:end-build'
    ]);

//TASK
    grunt.registerTask('bower', [
        'copy:bowerCSS',
        'copy:bowerJS',
        'copy:bowerFONT'
    ]);

    grunt.registerTask('generate files', [
        'sro_create_angular_components'
    ]);

    grunt.registerTask('default', [
        'clean:dist',
        'generateCSS',
        'generateJS'
    ]);

    grunt.registerTask('default + watch', [
        'default',
        'watch'
    ]);

    grunt.registerTask('default + express + watch', [
        'default',
        'express',
        'watch'
    ]);

    grunt.registerTask('MEP', [
        "bower", "default", "copy:genLivrable"
    ]);

};