'use strict';
app.controller('configureSitePropertiesController', ['$scope', 'dummyDataService',
  function ($scope, dummyDataService) {

    var vm = {};

    vm.properties = [];

    vm.getProperties = function () {
        vm.properties = dummyDataService.properties;
    };

    vm.configureProperty = function(){
      $location.path('/configureproperty');
    };

    vm.getProperties();

    $scope.vm = vm;

  }]);
