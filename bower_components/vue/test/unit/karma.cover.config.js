var base = require('./karma.base.config.js')

module.exports = function (config) {
  var options = Object.assign(base, {
    browsers: ['PhantomJS'],
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      reporters: [
        { type: 'lcov', dir: '../../coverage', subdir: '.' },
        { type: 'text-summary', dir: '../../coverage', subdir: '.' }
      ]
    },
    singleRun: true,
    plugins: base.plugins.concat([
      'karma-coverage',
      'karma-phantomjs-launcher'
    ])
  })

  // add babel-plugin-istanbul for code intrumentation
  options.webpack.module.rules[0].options = {
    plugins: [['istanbul', {
      exclude: [
        'test/',
        'page/compiler/parser/html-parser.js',
        'page/core/instance/proxy.js',
        'page/sfc/deindent.js'
      ]
    }]]
  }

  config.set(options)
}
