app.controller('loginController', ['$scope', '$location', 'authService',
  function ($scope, $location, authService) {

    var vm = {};

    vm.login = function () {
      console.log('logging in');
        authService.authentication.isAuth = true;
        $location.path('/mysites');
    };

    $scope.vm = vm;

  }]);
