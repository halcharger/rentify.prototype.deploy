'use strict';
app.controller('dashboardController', ['$scope', '$location', 'authService',
  function ($scope, $location, authService) {

    var vm = {};
    vm.signUp = function () {
      authService.authentication.isAuth = true;
      $location.path('/mysites');
    };

    $scope.vm = vm;

  }]);
