angular.module('bdeoApp')
  .component('bdeoNavbar', {
    templateUrl: 'views/navbar.view.html',
    controller: ['$scope', '$rootScope', 'UsersSrv', '$location', function (s, r, UsersSrv, $location) {

      (async () => {
        let userInfo;
        const localUserInfo = JSON.parse(localStorage.getItem('userInfo'));

        if (!localUserInfo) {
          userInfo = 'Login';
        } else {
          const { data } = await UsersSrv.getUserById(localUserInfo);
          userInfo = data;
        }

        s.userInfo = userInfo;

        s.IS_MOBILE = s.$parent.IS_MOBILE;

      })()

      s.logout = e => {
        e?.preventDefault();
        localStorage.removeItem('userInfo');
        $location.path("/login");
      }


    }]
  })
