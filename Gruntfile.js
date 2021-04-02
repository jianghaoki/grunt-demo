module.exports = function (grunt) {
  grunt.initConfig({
    htmlhint: {
      option: {
        htmlhintrc:"./.htmlhintrc" 
      },
      src:['*.html']
    }
  });
                                                                    
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.registerTask('default', ['htmlhint']);
};

