'use strict';

/**
 * @ngdoc function
 * @name bdeoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the bdeoApp
 */


angular.module('bdeoApp')
  .controller('LoginCtrl', ['$scope', '$rootScope', 'UsersSrv', '$location', function (s, r, UsersSrv, $location) {
    const vm = this;

    (() => {
      const localUserInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (localUserInfo) $location.path('/sessions');
    })()

    s.onSubmit = async e => {
      e?.preventDefault();

      if (vm.userTmp?.email && vm.userTmp?.password) {
        const { data } = await UsersSrv.login({ email: vm.userTmp.email, password: vm.userTmp.password });

        if (data.token && data.userid) {
          localStorage.setItem('userInfo', JSON.stringify(data));
          return $location.path("/sessions");
        } else {
          return alert('Something went wrong, please try again later! 🧖🏽s')
        }
      } else {
        return alert('Please enter valid email and password');
      }
    }

  }]);

