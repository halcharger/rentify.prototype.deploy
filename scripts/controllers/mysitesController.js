(function () {
  'use strict';

  function controller($scope, $location, dummyDataService) {

    var vm = {};
    vm.sites = [];

    vm.getSites = function () {
        vm.sites = dummyDataService.sites;
    };

    vm.configureSite = function(){
      $location.path('/configuresitetheme');
    };

    vm.getSites();

    $scope.vm = vm;

  }

  app.controller('mysitesController', ['$scope', '$location', 'dummyDataService', controller]);

})();
