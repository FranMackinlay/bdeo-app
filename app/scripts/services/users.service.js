angular
  .module('bdeoApp')
  .factory('UsersSrv', ['$http', function ($http) {
    return {
      login(params) {
        $http.post(`http://localhost:3000/api/v1/user/login`, params);
      },
      getUsers(params) {
        return $http.get(`http://localhost:3000/api/v1/user`, { params });
      },
      getUserById(params) {
        return $http.get(`http://localhost:3000/api/v1/user/${params.userId}`, {
          params
        });
      },
    };
  }]);
