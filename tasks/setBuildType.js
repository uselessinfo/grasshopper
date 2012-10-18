module.exports = function( grunt ) {

    grunt.registerTask('setBuildType', function() {
        var directory = this.args[0];
        grunt.log.writeln("Setting directory to: " + directory);
        grunt.config.set('output', directory);
    });

};