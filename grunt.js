module.exports = function(grunt) {

    var commonTasks ='clean:tmp coffee cp:assets cp:views cp:modules cp:publish clean:tmp',
        localTasks  = 'clean:tmp coffee cp:publish clean:tmp symlink',
        argv = require('optimist').argv;
        
    var project = {

        dirs: {
            docs:  'docs',
            modules: 'node_modules',
            local: 'application',
            tmp:   'targets/tmp',
            targets: 'targets',
            tmpTarget: function(){
                return this.tmp + "/" + this.local;
            },
            target: function(){
                return 'targets/' + argv.env;
            }
        },

        files: {
            assets:     '/public',
            views:     '/views',
            any: '**/*',
            dot: {
                coffee:     '.coffee',
                javascript: '.js',
                html:       '.html'
            }
        }
        },

        tasksConfig = {
            project: project,
            
            // Remove all junk from compiled only directories
            clean: {
                targets:    project.dirs.targets + "/",
                tmp:        project.dirs.tmp,
                docs:       project.dirs.docs
            },

            coffee: {
                app: {
                    src: [project.dirs.local + "/" + project.files.any + project.files.dot.coffee],
                    dest: project.dirs.tmp,
                    options: {
                        // No globals!
                        bare: false,
                        preserve_dirs: true,
                        // Preserve the directory structure of coffee
                        base_path: project.dirs.target()
                    }
                }
            },

            cp: {
                assets: {
                    src: project.dirs.local + project.files.assets,
                    dest: project.dirs.tmp + "/" + project.dirs.local + project.files.assets
                },
                views: {
                    src: project.dirs.local + project.files.views,
                    dest: project.dirs.tmp + "/" + project.dirs.local + project.files.views
                },
                modules: {
                    src: project.dirs.modules,
                    dest: project.dirs.tmpTarget() + "/" + project.dirs.modules
                    
                },
                publish: {
                    src: project.dirs.tmpTarget(),
                    dest: project.dirs.target()
                }
            },
            
            symlink: {
                links: [
                    { link: project.dirs.target() + project.files.assets, to: __dirname + "/" + project.dirs.local + project.files.assets, type: 'dir'},
                    { link: project.dirs.target() + project.files.views, to: __dirname + "/" + project.dirs.local + project.files.views, type: 'dir'},
                    { link: project.dirs.target() + "/" + project.dirs.modules, to: __dirname + "/" + project.dirs.modules, type: 'dir'}
                ]
            }
        };

    // Grunt tasks configuration
    grunt.initConfig(tasksConfig);
    grunt.loadNpmTasks('grunt-coffee');
    grunt.loadNpmTasks('grunt-clean');
    grunt.loadNpmTasks('grunt-cp');
    grunt.loadNpmTasks('grunt-symlink');

    grunt.loadTasks('./tasks/');

    
    grunt.registerTask('c', 'clean:targets');
    grunt.registerTask('build', commonTasks);
    grunt.registerTask('local', localTasks);
    
};