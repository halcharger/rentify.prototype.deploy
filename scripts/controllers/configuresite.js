'use strict';
app.controller('configureSiteController', ['$scope', '$location', 'dummyDataService',
  function ($scope, $location, dummyDataService) {

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
