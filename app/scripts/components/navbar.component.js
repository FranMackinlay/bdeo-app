angular.module('bdeoApp')
  .component('bdeoNavbar', {
    templateUrl: 'views/navbar.view.html',
    controller: ['$scope', '$rootScope', 'UsersSrv', '$location', function (s, r, UsersSrv, $location) {

      (async () => {
        s.IS_MOBILE = s.$parent.IS_MOBILE;
        let userInfo;
        await setNavbar(userInfo);

      })()

      async function setNavbar(userInfo) {
        const localUserInfo = JSON.parse(localStorage.getItem('userInfo'));

        if (!localUserInfo) {
          userInfo = 'Login';
        } else {
          try {
            const { data } = await UsersSrv.getUserById(localUserInfo);
            userInfo = data.username;
          } catch (error) {
            console.log(error.message);
          }
        }
        s.userInfo = userInfo;
      }

      r.$on('USER_LOGIN:LOGIN', () => {
        setNavbar(s.userInfo)
        r.$digest();
      });

      s.logout = e => {
        e?.preventDefault();
        localStorage.removeItem('userInfo');
        setNavbar(s.userInfo);
        $location.path("/login");
      }


    }]
  })
