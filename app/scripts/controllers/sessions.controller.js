'use strict';

/**
 * @ngdoc function
 * @name bdeoApp.controller:SessionsCtrl
 * @description
 * # SessionsCtrl
 * Controller of the bdeoApp
 */
angular.module('bdeoApp')
  .controller('SessionsCtrl', ['$scope', '$rootScope', '$timeout', '$location', 'SessionsSrv', 'UsersSrv', function (s, r, $t, $location, SessionsSrv, UsersSrv) {
    // ============= DATA ============= //
    const vm = this;
    let userInfo;

    // ============= METHODS ============= //

    const getUser = async () => {
      const { data: user } = await UsersSrv.getUserById(userInfo)
      s.user = user;
    }

    const getSessions = async () => {
      const { data: sessions } = await SessionsSrv.getSessions({ user: userInfo.userid, token: userInfo.token });
      s.sessions = sessions;
      $t(() => r.$digest());
    }

    s.addSession = async e => {
      e?.preventDefault();
      if (!s.newSession?.maxNumOfSessions) return alert('Please enter a valid Max Sessions number!');

      const { data } = await SessionsSrv.createSession({ userid: s.user.id, token: userInfo.token, maxNumOfSessions: parseInt(s.newSession.maxNumOfSessions) })

      if (data.id) alert('Session created successfully!');
      s.newSession.maxNumOfSessions = null;
      getSessions();
    };

    s.goToSessionDetail = (e, session) => {
      e?.preventDefault();
      $location.path(`/session/detail/${session.id}`);
    }

    s.deleteSession = async (e, session) => {
      e?.preventDefault();

      const { data } = await SessionsSrv.deleteSession({ id: session.id, token: userInfo.token });
      s.sessions = data;
      if (data) alert('Session deleted!');
      $t(() => r.$digest());
    }

    // ============= RUNTIME ============= //

    (() => {
      const localUserInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (!localUserInfo) $location.path('/login');
      userInfo = localUserInfo;

      getUser();
      getSessions();
    })();
  }]);
