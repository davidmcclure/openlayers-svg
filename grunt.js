
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

// (c) 2013 David McClure
// http://dclure.org

module.exports = function(grunt) {

  // Load custom tasks.
  grunt.loadNpmTasks('grunt-shell');

  grunt.initConfig({

    shell: {
      build_openlayers: {
        command: 'python build.py full OpenLayers.js',
        stdout: true,
        execOptions: {
          cwd: 'openlayers/build'
        }
      }
    }

  });

  // Task aliases.
  grunt.registerTask('build', 'shell:build_openlayers');

};
