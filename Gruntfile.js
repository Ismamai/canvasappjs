module.exports = function (grunt) {

    // Configuration goes here
    grunt.initConfig({
        watch: { // this is a file watcher, it will precompile the templates and update on tomcat any file changed on development
            All: {
                files: ['' +
                'assets-dev/**'],
                tasks: ['transpile'],
                options: {
                    livereload: true
                }
            }
        },
        babel: {
            options: {
                sourceMap: true
            },
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: "assets-dev/",
                        src: ['*.js'],
                        dest: "assets/"
                    }
                ]
            }
        },
    });

    // Load plugins here
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');

    // Define your tasks here
    grunt.registerTask('watchAll', ['watch:All']);
    grunt.registerTask('sincro', ['sync']);
    grunt.registerTask("transpile", ["babel:dev"]);
    grunt.registerTask("default", ["watch"]);


};
