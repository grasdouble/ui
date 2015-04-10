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
                    '!app/vendors/**/*.css'
                ]
            }
        },
        concat: {
            css: {
                src: [
                    'app/**/*.css'
                ],
                dest: 'dist/style.css'
            },
            'js': {
                src: [
                    "app/vendors/js/jquery.js",
                    "app/vendors/js/jquery.min.js",
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
            bowerJSFiles: {
                src: [
                    'tmp/components/**/angular*.min.js',
                    'tmp/components/**/bootstrap*.min.js',
                    'tmp/components/jquery/dist/jquery.min.js',
                    'tmp/components/angular-i18n/angular-locale_fr-fr.js'
                ],
                dest: 'app/vendors/js/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            bowerJSFilesNoMin: {
                src: [
                    'tmp/components/**/angular*.js',
                    'tmp/components/**/bootstrap*.js',
                    'tmp/components/jquery/dist/jquery.js',
                    'tmp/components/angular-i18n/angular-locale_fr-fr.js'
                ],
                dest: 'app/vendors/js/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            bowerCSSFiles: {
                src: [
                    'tmp/components/bootstrap/dist/css/*.css'
                ],
                dest: 'app/vendors/css/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            bowerFontsFiles: {
                src: [
                    'tmp/components/bootstrap/dist/fonts/*'
                ],
                dest: 'app/vendors/fonts/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            fontFiles: {
                src: [
                    'app/vendors/fonts/*'
                ],
                dest: 'dist/fonts/',
                expand: true,
                flatten: true,
                filter: 'isFile'
            },
            imgFiles: {
                src: [
                    'app/img/*'
                ],
                dest: 'dist/img/',
                expand: true,
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
            "end-build": ["dist/amc-script.js", "dist/script.js", 'dist/style.css'],
            nomin: ["app/vendors/**/*.min.*"],
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
        'copy:fontFiles',
        "copy:imgFiles",
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

    grunt.registerTask('dwatch', [
        'default',
        'watch'
    ]);

    grunt.registerTask('default + express + watch', [
        'default',
        'express',
        'watch'
    ]);

    grunt.registerTask('bower-task', [
        "bower",
        "clean:vendors",
        "copy:bowerJSFiles",
        "copy:bowerCSSFiles",
        "copy:bowerFontsFiles",
        "clean:tmp"]);

    grunt.registerTask('bower-task-dev', [
        "bower",
        "clean:vendors",
        "copy:bowerJSFilesNoMin",
        "copy:bowerCSSFiles",
        "copy:bowerFontsFiles",
        "clean:nomin"
    ]);
};
