require.config({
<<<<<<< c2c5414f721c2b21b957173f2def0a4367a70051
<<<<<<< dda08978836d7bcaa3f0bf6cde71161a86895386
  baseUrl: 'http://localhost:9876/base/',
=======
  baseUrl: 'http://localhost:9876/base/public/app_gen',
>>>>>>> tech(typescript): its looking good
=======
  baseUrl: 'http://localhost:9876/base/',
>>>>>>> feat() started work on more feature rich time picker

  paths: {
    config:                'app/components/config',
    kbn:                   'app/components/kbn',
    store:                 'app/components/store',

    settings:              'app/components/settings',
    lodash:                'app/components/lodash.extended',
    'lodash-src':          'vendor/lodash',

    moment:                'vendor/moment',
    chromath:              'vendor/chromath',
    filesaver:             'vendor/filesaver',

    angular:                  'vendor/angular/angular',
    'angular-route':          'vendor/angular-route/angular-route',
    'angular-sanitize':       'vendor/angular-sanitize/angular-sanitize',
    angularMocks:             'vendor/angular-mocks/angular-mocks',
    'angular-dragdrop':       'vendor/angular-native-dragdrop/draganddrop',
<<<<<<< c2c5414f721c2b21b957173f2def0a4367a70051
    'angular-ui':             'vendor/angular-ui/ui-bootstrap-tpls',
=======
    'angular-ui':             'vendor/angular-ui/tabs',
>>>>>>> feat() started work on more feature rich time picker
    'angular-strap':          'vendor/angular-other/angular-strap',
    timepicker:               'vendor/angular-other/timepicker',
    datepicker:               'vendor/angular-other/datepicker',
    bindonce:                 'vendor/angular-bindonce/bindonce',
    crypto:                   'vendor/crypto.min',
    spectrum:                 'vendor/spectrum',

    jquery:                   'vendor/jquery/dist/jquery',

    bootstrap:                'vendor/bootstrap/bootstrap',
    'bootstrap-tagsinput':    'vendor/tagsinput/bootstrap-tagsinput',

    'extend-jquery':          'app/components/extend-jquery',

    'jquery.flot':             'vendor/flot/jquery.flot',
    'jquery.flot.pie':         'vendor/flot/jquery.flot.pie',
    'jquery.flot.events':      'vendor/flot/jquery.flot.events',
    'jquery.flot.selection':   'vendor/flot/jquery.flot.selection',
    'jquery.flot.stack':       'vendor/flot/jquery.flot.stack',
    'jquery.flot.stackpercent':'vendor/flot/jquery.flot.stackpercent',
    'jquery.flot.time':        'vendor/flot/jquery.flot.time',
    'jquery.flot.crosshair':   'vendor/flot/jquery.flot.crosshair',
    'jquery.flot.fillbelow':   'vendor/flot/jquery.flot.fillbelow',

    modernizr:                'vendor/modernizr-2.6.1',
    'aws-sdk':                'vendor/aws-sdk/dist/aws-sdk.min',
  },

  shim: {
    bootstrap: {
      deps: ['jquery']
    },

    modernizr: {
      exports: 'Modernizr'
    },

    angular: {
      deps: ['jquery', 'config'],
      exports: 'angular'
    },

    angularMocks: {
      deps: ['angular'],
    },

    crypto: {
      exports: 'Crypto'
    },

    'jquery.flot':          ['jquery'],
    'jquery.flot.pie':      ['jquery', 'jquery.flot'],
    'jquery.flot.events':   ['jquery', 'jquery.flot'],
    'jquery.flot.selection':['jquery', 'jquery.flot'],
    'jquery.flot.stack':    ['jquery', 'jquery.flot'],
    'jquery.flot.stackpercent':['jquery', 'jquery.flot'],
    'jquery.flot.time':     ['jquery', 'jquery.flot'],
    'jquery.flot.crosshair':['jquery', 'jquery.flot'],
    'jquery.flot.fillbelow':['jquery', 'jquery.flot'],

    'angular-route':        ['angular'],
    'angular-sanitize':     ['angular'],
    'angular-ui':           ['angular'],
    'angular-dragdrop':     ['jquery', 'angular'],
    'angular-mocks':        ['angular'],
    'angular-strap':        ['angular', 'bootstrap','timepicker', 'datepicker'],
    'bindonce':             ['angular'],

    'bootstrap-tagsinput':          ['jquery'],

    timepicker:             ['jquery', 'bootstrap'],
    datepicker:             ['jquery', 'bootstrap'],
  }
});

function file2moduleName(filePath) {
  'use strict';
  return filePath.replace(/\\/g, '/')
    .replace(/^\/base\//, '')
    .replace(/\.\w*$/, '');
}

require([
  'lodash',
  'angular',
  'angularMocks',
  'app/app',
<<<<<<< c2c5414f721c2b21b957173f2def0a4367a70051
], function(_, angular) {
=======
], function(angular) {
>>>>>>> feat() started work on more feature rich time picker
  'use strict';

  var specs = [];

  for (var file in window.__karma__.files) {
<<<<<<< c2c5414f721c2b21b957173f2def0a4367a70051
    if (/specs.*/.test(file)) {
      file = file2moduleName(file);
      specs.push(file);
    }
  }

=======
    if (/base\/test\/specs.*/.test(file)) {
      console.log(file);
      file = file2moduleName(file);
      console.log(file);
      specs.push(file);
      //file = file.replace(/^\/base\/test/, '');
      //specs.push(file);
      //window.tests.push();
    }
  }

  require(specs, function() {
    window.__karma__.start();
  });

>>>>>>> feat() started work on more feature rich time picker
  angular.module('grafana', ['ngRoute']);
  angular.module('grafana.services', ['ngRoute', '$strap.directives']);
  angular.module('grafana.panels', []);
  angular.module('grafana.filters', []);
  angular.module('grafana.routes', ['ngRoute']);

<<<<<<< c2c5414f721c2b21b957173f2def0a4367a70051
<<<<<<< 0e995754c685014a8a543af1c9f7e254ae4c01b6
  require(specs, function() {
=======
  var specs = [
    'specs/lexer-specs',
    'specs/parser-specs',
    'specs/gfunc-specs',
    'specs/timeSeries-specs',
    'specs/row-ctrl-specs',
    'specs/graphiteTargetCtrl-specs',
    'specs/graphiteDatasource-specs',
    'specs/influxSeries-specs',
    'specs/influxSeries08-specs',
    'specs/influxQueryBuilder-specs',
    'specs/influx09-querybuilder-specs',
    'specs/influxdb-datasource-specs',
    'specs/influxdbQueryCtrl-specs',
    'specs/kairosdb-datasource-specs',
    'specs/graph-ctrl-specs',
    'specs/graph-specs',
    'specs/graph-tooltip-specs',
    'specs/seriesOverridesCtrl-specs',
    'specs/shareModalCtrl-specs',
    'specs/timeSrv-specs',
    'specs/panelSrv-specs',
    'specs/templateSrv-specs',
    'specs/templateValuesSrv-specs',
    'specs/kbn-format-specs',
    'specs/dashboardSrv-specs',
    'specs/dashboardViewStateSrv-specs',
    'specs/singlestat-specs',
    'specs/dynamicDashboardSrv-specs',
    'specs/unsavedChangesSrv-specs',
    'specs/value_select_dropdown_specs',
    'specs/opentsdbDatasource-specs',
    'specs/cloudwatch-datasource-specs',
    'specs/elasticsearch-specs',
    'specs/elasticsearch-querybuilder-specs',
    'specs/elasticsearch-queryctrl-specs',
  ];

  var pluginSpecs = (config.plugins.specs || []).map(function (spec) {
    return '../plugins/' + spec;
  });

  require(specs.concat(pluginSpecs), function () {
>>>>>>> feat(elasticsearch): raw queries work, more unit tests and polish, #1034
    window.__karma__.start();
  });

=======
  // var specs = [
  //   'specs/lexer-specs',
  //   'specs/parser-specs',
  //   'specs/gfunc-specs',
  //   'specs/timeSeries-specs',
  //   'specs/row-ctrl-specs',
  //   'specs/graphiteTargetCtrl-specs',
  //   'specs/graphiteDatasource-specs',
  //   'specs/influxSeries-specs',
  //   'specs/influxSeries08-specs',
  //   'specs/influxQueryBuilder-specs',
  //   'specs/influx09-querybuilder-specs',
  //   // 'specs/influxdb-datasource-specs',
  //   'specs/influxdbQueryCtrl-specs',
  //   // 'specs/kairosdb-datasource-specs',
  //   'specs/graph-ctrl-specs',
  //   'specs/graph-specs',
  //   'specs/graph-tooltip-specs',
  //   'specs/seriesOverridesCtrl-specs',
  //   'specs/shareModalCtrl-specs',
  //   'specs/timeSrv-specs',
  //   'specs/panelSrv-specs',
  //   'specs/templateSrv-specs',
  //   'specs/templateValuesSrv-specs',
  //   'specs/kbn-format-specs',
  //   'specs/dashboardSrv-specs',
  //   'specs/dashboardViewStateSrv-specs',
  //   'specs/singlestat-specs',
  //   'specs/dynamicDashboardSrv-specs',
  //   'specs/unsavedChangesSrv-specs',
  //   'specs/value_select_dropdown_specs',
  //   'specs/opentsdbDatasource-specs',
  //   'specs/cloudwatch-datasource-specs',
  //   'specs/elasticsearch-specs',
  //   'specs/elasticsearch-querybuilder-specs',
  //   'specs/elasticsearch-queryctrl-specs',
  //   'specs/elasticsearch-indexPattern-specs',
  //   'specs/elasticsearch-response-specs',
  //   'specs/core/utils/datemath_specs',
  // ];
  //
  // var pluginSpecs = (config.plugins.specs || []).map(function (spec) {
  //   return '../plugins/' + spec;
  // });

>>>>>>> feat() started work on more feature rich time picker
});
