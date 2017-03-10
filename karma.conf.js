//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '',

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-material/angular-material.js',
      'app/bower_components/angular-animate/angular-animate.js',
      'app/bower_components/angular-aria/angular-aria.js',
      'app/bower_components/angular-messages/angular-messages.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/lodash/lodash.js',
      'app/components/**/*.js',
      'app/country-view/**/*.js',
      'app/components/**/*.html',
      'app/country-view/**/*.html',
      'test/spec/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    preprocessors: {
        "**/*.html": ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/',
      moduleName: 'countryApp.templates'
    }

  });
};
