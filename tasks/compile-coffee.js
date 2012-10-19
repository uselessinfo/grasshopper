module.exports = function( grunt ) {

    grunt.registerBasicTask("coffee", "Compile coffee files to js", function(data, name) {
      
      var files = file.expand(data);  // files array contains filepath as strings
    
      // compile each coffee-sciprt file to js
      files.forEach(function(filepath) {
          // compile and write to file
          grunt.helper('coffee', filepath);
      });
    });
    
    grunt.registerHelper('coffee', function(filepath /* String */, callback /* [Function] */) {
    
      var coffee = require('coffee-script');
        
      try {
        var js = coffee.compile(file.read(filepath));
        if (js) file.write(filepath.replace(/\.coffee$/, '.js'), js);
      }
      catch (e) {
        log.error(e.message);
      }
    });
}