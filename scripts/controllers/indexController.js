(function () {
  'use strict';

  function IndexController($scope, $location, authService) {

    var vm = {};

    vm.authentication = authService.authentication;

    vm.logOut = function () {
      console.log('logging out...');
      vm.authentication.isAuth = false;
      $location.path('/');
    };

    $scope.vm = vm;

  }

  app.controller('indexController', ['$scope', '$location', 'authService', IndexController]);

})();
