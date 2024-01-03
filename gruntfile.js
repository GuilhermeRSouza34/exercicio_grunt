module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        less: {
            options: {
                paths: ['src/less'],
                compress: true
            },
            dist: {
                files: {
                    'dist/css/style.min.css': 'src/less/style.less'
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                files: {
                    'dist/js/app.min.js': ['src/js/app.js']
                }
            }
        },
        copy: {
            main: {
                files: [
                    { src: 'Gruntfile.js', dest: 'dist/Gruntfile.js' }
                ]
            }
        },
        watch: {
            styles: {
                files: ['src/less/**/*.less'],
                tasks: ['less']
            },
            scripts: {
                files: ['src/js/**/*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.registerTask('default', ['less', 'uglify', 'copy']);

    grunt.registerTask('dev', ['watch']);
};