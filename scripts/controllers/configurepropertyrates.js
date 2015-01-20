'use strict';
app.controller('configurePropertyRatesController', ['$scope',
  function ($scope) {

    $scope.fromDate = new Date();

    $scope.openFrom = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.fromopened = true;
    };

    $scope.openTo = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.toopened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

  }]);
