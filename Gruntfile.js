module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			src: ['dist']
		},
		htmlhint: {
			build: {
				options: {
					'tag-pair': true,
					'tagname-lowercase': true,
					'attr-lowercase': true,
					'attr-value-double-quotes': true,
					'doctype-first': true,
					'spec-char-escape': true,
					'id-unique': true,
					'head-script-disabled': true,
					'style-disabled': false
				},
				src: ['index.html', 'views/*.html']
			}
		},
		uglify: {
			build: {
				files: {
					'js/main.min.js' : ['js/script.js']
				}
			}
		},
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
		watch: {
			html: {
				files: ['index.html'],
				tasks: ['htmlhint']
			},
			js: {
				files: ['js/script.js'],
				tasks: ['uglify']
			},
			css: {
				files: ['**/*.scss'],
				tasks: ['compass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-htmlhint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.registerTask('default', ['htmlhint', 'watch', 'uglify', 'compass']);

};