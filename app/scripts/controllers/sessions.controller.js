'use strict';

/**
 * @ngdoc function
 * @name bdeoApp.controller:SessionsCtrl
 * @description
 * # SessionsCtrl
 * Controller of the bdeoApp
 */
angular.module('bdeoApp')
  .controller('SessionsCtrl', ['$scope', '$location', 'SessionsSrv', function (s, $location, SessionsSrv) {
    const $ctrl = this;

    $ctrl.$onInit = (async () => {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (!userInfo) $location.path('/login');
      console.log('userInfo', userInfo)
      const res = await SessionsSrv.getSessions({ user: userInfo.userid, token: userInfo.token });
      console.log('res', res)
    })();

    s.texto = 'TEXTOOOO';
  }]);
