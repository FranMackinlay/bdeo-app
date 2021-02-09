'use strict';

/**
 * @ngdoc function
 * @name bdeoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the bdeoApp
 */


angular.module('bdeoApp')
  .controller('LoginCtrl', ['$scope', '$rootScope', 'UsersSrv', function (s, r, UsersSrv) {
    const vm = this;

    vm.$onInit = () => {

    }

    s.onSubmit = async e => {
      e?.preventDefault();

      if (vm.userEmail) {
        console.log('USERSRV', UsersSrv);

        const res = await UsersSrv.login({user: vm.userEmail});
        console.log('RES', res);
      } else {
        alert('Please enter valid email');
      }
    }

  }]);

