module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

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
        ngtemplates: {
            SlmApp: {
                src: ['index.html', 'app/**/*.html'],
                dest: 'app/templates.js',
                standalone: true,
                options: {
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true, // Only if you don't use comment directives!
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                }
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
                    '!app/vendors/**/*.css',
                    '!app/views/home/skeleton.css'
                ]
            }
        },
        concat: {
            css: {
                src: [
                    "app/app.css",
                    'app/**/*.css'
                ],
                dest: 'dist/style.css'
            },
            'js': {
                src: [
                    "app/vendors/js/angular.min.js",
                    "app/vendors/js/angular.js",
                    "app/app.js",
                    "app/**/*.js"
                ],
                dest: 'dist/script.js'
            }
        },
        autoprefixer: {
            single_file: {
                src: 'dist/style.css',
                dest: 'dist/style.css'
            }
        },
        cssmin: {
            css: {
                src: 'dist/style.css',
                dest: 'dist/style.min.css'
            }
        },
        uglify: {
            js: {
                options: {
                    sourceMap: false,
                    sourceMapName: 'dist/script.min.js.map'
                },
                files: {
                    'dist/script.min.js': ['dist/script.js']
                }
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app1: {
                files: {
                    'dist/script.js': ['dist/script.js']
                }
            }
        },
        watch: {
            html: {
                files: ['app/**/*.html', 'index.html'],
                tasks: ['ngtemplates']
            },
            css: {
                files: ['app/**/*.css'],
                tasks: ['concat:css', 'autoprefixer', 'cssmin', "csslint", 'clean:end-build']
            },
            js: {
                files: ['app/**/*.js'],
                tasks: ['concat:js', 'ngAnnotate', 'uglify', 'jshint', 'clean:end-build']
            }
        },
        copy: {
            bowerCSS: {
                src: [
                    'tmp/components/**/*.min.css'
                ],
                dest: 'app/vendors/css/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            bowerJS: {

                src: [
                    'tmp/components/**/angular*.js',
                    '!tmp/components/**/angular*.min.js',
                    'tmp/components/**/sticky.js',
                    'tmp/components/angular-i18n/angular-locale_fr-fr.js'
                ],
                dest: 'app/vendors/js/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            bowerJSMin: {
                src: [
                    'tmp/components/**/*.min.js',
                    'tmp/components/angular-i18n/angular-locale_fr-fr.js'
                ],
                dest: 'app/vendors/js/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            genLivrable: {
                files: [
                    {
                        src: ['img/*'],
                        dest: 'tmp/livrable/img/',
                        expand: true,
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        src: ['dist/*'],
                        dest: 'tmp/livrable/dist/',
                        expand: true,
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        src: ['fonts/*'],
                        dest: 'tmp/livrable/fonts/',
                        expand: true,
                        flatten: true,
                        filter: 'isFile'
                    },
                    {
                        src: ['app/index.html'],
                        dest: 'tmp/livrable/',
                        expand: true,
                        flatten: true,
                        filter: 'isFile'
                    }
                ]

            },
            jsNoMin: {
                src: ['dist/script.js'],
                dest: 'dist/script.min.js',
                expand: false,
                flatten: true,
                filter: 'isFile'
            }
        },
        bower: {
            install: {
                options: {
                    copy: false
                }
            }
        },
        clean: {
            tmp: ["tmp/"],
            dist: ["dist/"],
            "end-build": ["dist/script.js", 'dist/style.css'],
            vendors: ["app/vendors"]
        },
        express: {
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        }
    });

    grunt.registerTask('default', [
        'clean:dist',
        'concat',
        'autoprefixer',
        'cssmin',
        'ngtemplates',
        'ngAnnotate',
        'uglify',
        'clean:end-build',
        'jshint',
        'csslint'
    ]);

    grunt.registerTask('defaultDEV', [
        'clean:dist',
        'concat',
        'autoprefixer',
        'cssmin',
        'ngtemplates',
        'ngAnnotate',
        'uglify',
        /*'clean:end-build',*/
        'jshint',
        'csslint'
    ])
    ;

    grunt.registerTask('defaultDEV + express + watch', [
        'defaultDEV',
        'express',
        'watch'
    ]);

    grunt.registerTask('bower-task', [
        "bower",
        "clean:vendors",
        "copy:bowerCSS",
        "copy:bowerJSMin",
        "clean:tmp"]);

    grunt.registerTask('bower-task-dev', [
        "bower",
        "clean:vendors",
        "copy:bowerCSS",
        "copy:bowerJS"
    ]);

    grunt.registerTask('MEP', [
        "bower-task", "default", "copy:genLivrable"
    ]);
};
