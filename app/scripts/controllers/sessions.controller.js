'use strict';

/**
 * @ngdoc function
 * @name bdeoApp.controller:SessionsCtrl
 * @description
 * # SessionsCtrl
 * Controller of the bdeoApp
 */
angular.module('bdeoApp')
  .controller('SessionsCtrl', ['$scope', '$rootScope', '$location', 'SessionsSrv', 'UsersSrv', function (s, r, $location, SessionsSrv, UsersSrv) {
    const vm = this;
    let userInfo;

    const getUser = async () => {
      const { data: user } = await UsersSrv.getUserById(userInfo)
      s.user = user;
    }

    const getSessions = async () => {
      const { data: sessions } = await SessionsSrv.getSessions({ user: userInfo.userid, token: userInfo.token });
      s.sessions = sessions;
    }

    s.getSessionList = e => {
      getSessions();
    }

    s.addSession = async e => {
      e?.preventDefault();
      if (!s.newSession?.maxNumOfSessions) return alert('Please enter a valid Max Sessions number!');
      debugger;
      const { data } = await SessionsSrv.upsertSession({ userid: s.user.id, token: userInfo.token, maxNumOfSessions: parseInt(s.newSession.maxNumOfSessions) })

      if (data.id) alert('Session created successfully!');
      s.newSession.maxNumOfSessions = null;
      r.$digest();
    };


    (() => {
      const localUserInfo = JSON.parse(localStorage.getItem('userInfo'));
      if (!localUserInfo) $location.path('/login');

      userInfo = localUserInfo

      getUser();
      getSessions();
    })()


  }]);
