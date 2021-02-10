'use strict';

/**
 * @ngdoc function
 * @name bdeoApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the bdeoApp
 */


angular.module('bdeoApp')
  .controller('RegisterCtrl', ['$scope', '$rootScope', 'UsersSrv', '$location', function (s, r, UsersSrv, $location) {
    const vm = this;


    s.onSubmit = async e => {
      e?.preventDefault();

      if (vm.userTmp?.email && vm.userTmp?.password) {
        const { data } = await UsersSrv.createUser({ email: vm.userTmp.email, password: vm.userTmp.password, username: vm.userTmp.username });

        if (data.success) {

          if (window.confirm('Account created!')) return window.location.href = '/#!/login' //$location.path("/login");
        }

        return alert('Something went wrong, please try again later! 🧖🏽s')

      } else {
        return alert('Please enter valid email and password');
      }
    }

  }]);

