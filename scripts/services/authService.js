'use strict';
app.factory('authService', [
  function () {

    var authServiceFactory = {};

    var _authentication = {
      isAuth: false,
      userName: 'John Doe'
    };

    authServiceFactory.authentication = _authentication;

    return authServiceFactory;
  }]);
