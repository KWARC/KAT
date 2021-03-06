var fs = require('fs');

module.exports = function(grunt) {

  //The KAT Banner
  var Banner = fs.readFileSync('LICENSE.md').toString();

  //The source files.
  var source_files = [
    'src/KAT/index.js',

    'src/KAT/rdf/index.js',

    'src/KAT/model/index.js',
    'src/KAT/model/KAnnSpecCollection.js',
    'src/KAT/model/KAnnSpec.js',
    'src/KAT/model/Concept.js',
    'src/KAT/model/Field.js',
    'src/KAT/model/Option.js',

    'src/KAT/gui/index.js',

    'src/KAT/sidebar/index.js',
    'src/KAT/sidebar/editor.js',
    'src/KAT/sidebar/review.js',

    'src/KAT/storage/index.js',
    'src/KAT/storage/store.js',
    'src/KAT/storage/annotation.js',

    'src/KAT/reviewStore/store.js',

    'src/KAT/module/index.js'
  ];

  var lib_files = [
    'src/KAT/libs/doT.js'
  ];

  //The dist files.
  var dist_files = [
    'dist/KAT.js',
    'dist/KAT.min.js'
  ];

  // Project configuration.
  grunt.initConfig({

    //read the package config
    pkg: grunt.file.readJSON('package.json'),

    //we want to concatinate files
    concat: {
      options: {
        sourceMap: true,
        stripBanners: true,
        banner: Banner+'\n\n(function(exports,global){global["KAT"]=exports;\n',
        footer: "\n})({},function(){return this}());"
      },
      dist: {
        src: source_files.concat(lib_files),
        dest: dist_files[0]
      },
    },

    //For building documentation
    jsdoc : {
      kat : {
        src: ['src/**/*.js', 'README.md'],
        options: {
          destination: 'doc', 
          template : "node_modules/ink-docstrap/template",
          configure : "node_modules/ink-docstrap/template/jsdoc.conf.json", 
          private: true
        }
      }
    },
 
    //for consistent formatting
    'jsbeautifier' : {
      'beautify' : {
        'src' : ['src/**/*.js'],
        'options' : {
          'config' : '.jsbeautifyrc' 
        }
      },
      'check' : {
        'src' : ['src/**/*.js'],
        'options' : {
          'config' : '.jsbeautifyrc', 
          'mode' : 'VERIFY_ONLY'
        }
      }
    },

    //For writing clean code
    jshint: {
      all: source_files
    },

    //we also want to minimise it.
    uglify: {
      options: {
        sourceMap: true,
        banner: Banner,
        wrap: "KAT",
      },
      build: {
        src: source_files.concat(lib_files),
        dest: dist_files[1]
      }
    },

    //serving the example
    connect: {
      server: {
        options: {
          port: 3000,
          hostname: 'localhost',
          base: {
            path: '.'
          }
        },
      },
      keepalive: {
        options: {
          port: 3000,
          keepalive: true,
          hostname: 'localhost',
          base: {
            path: '.'
          }
        },
      },
    },

    //we want to rebuild when a source file changes.
    watch: {
      rebuild: {
        files: source_files,
        tasks: ['rebuild'],
        options: {
          livereload: true,
        },
      }
    }
  });

  // Load the tasks
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsbeautifier');

  // For building
  grunt.registerTask('docs', [
    'jsdoc:kat'
  ]);

  // For quickly rebuilding
  // does not include doc or jshnt
  grunt.registerTask('rebuild', [
    'concat',
    'uglify'
  ]);

  // Building tasks
  // creates everything.
  grunt.registerTask('build', [
    'jshint',
    'docs',
    'jsbeautifier:beautify',
    'rebuild'
  ]);

  grunt.registerTask('beautify', [
    'jsbeautifier:beautify'
  ]);

  //Have the serve task
  grunt.registerTask('run', [
    'build',
    'connect:keepalive'
  ]);

  grunt.registerTask('serve', [
    'build',
    'connect:server',
    'watch'
  ]);

};
