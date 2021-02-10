'use strict';

/**
 * @ngdoc function
 * @name bdeoApp.controller:SessionDetailCtrl
 * @description
 * # SessionDetailCtrl
 * Controller of the bdeoApp
 */
angular.module('bdeoApp')
  .controller('SessionDetailCtrl', ['$scope', '$rootScope', '$location', 'SessionsSrv', '$routeParams', '$timeout', function (s, r, $location, SessionsSrv, $routeParams, $t) {
    // ============= DATA ============= //
    const vm = this;
    let userInfo;

    // ============= METHODS ============= //

    s.goBack = (e) => {
      e?.preventDefault();
      window.history.back();
    }

    const getSessionDetail = async () => {
      const { data: session } = await SessionsSrv.getSessionById({ id: $routeParams.id, token: userInfo.token });
      vm.newSession = s.session = session;
      $t(() => r.$digest());
    }

    s.upsertSession = async e => {
      e?.preventDefault();

      const { data } = await SessionsSrv.upsertSession({ id: s.session.id, token: userInfo.token, session: vm.newSession })
      if (data.success) {
        alert('Session created successfully!');
        s.goBack(null);
      } else {
        alert('Oh no! Something went wrong, try again later!');
      }
    };

    s.deleteSession = async (e) => {
      e?.preventDefault();

      const { data } = await SessionsSrv.deleteSession({ id: s.session.id, token: userInfo.token });
      if (data) alert('Session deleted!');
      s.goBack(null);
    }

    // ============= RUNTIME ============= //

    (() => {
      const localUserInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (!localUserInfo) $location.path('/login');
      userInfo = localUserInfo;

      getSessionDetail();
    })();
  }]);
