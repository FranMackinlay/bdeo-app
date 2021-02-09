angular
  .module('bdeoApp')
  .factory('UsersSrv', ['$http', function ($http) {
    return {
      login(params) {
        return $http.post(`http://localhost:3000/api/v1/user/login`, params);
      },
      getUsers(params) {
        return $http.get(`http://localhost:3000/api/v1/user`, { params });
      },
      getUserById(params) {
        const req = {
          method: 'GET',
          url: `http://localhost:3000/api/v1/user/${params.userid}`,
          headers: {
            Authorization: `Bearer ${params.token}`
          }
        }
        return $http(req, { params });
      },
    };
  }]);
