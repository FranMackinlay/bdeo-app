angular.module('bdeoApp')
  .component('bdeoNavbar', {
    templateUrl: 'views/navbar.view.html',
    controller: ['$scope', '$rootScope', 'UsersSrv', function (s, r, UsersSrv) {

      (async () => {
        const localUserInfo = JSON.parse(localStorage.getItem('userInfo'));

        const { data } = await UsersSrv.getUserById(localUserInfo);

        s.userInfo = data ? data.username : 'Login';

        s.IS_MOBILE = s.$parent.IS_MOBILE;
      })()


    }]
  })
