angular
  .module('bdeoApp')
  .factory('SessionsSrv', ['$http', function ($http) {
    return {
      getSessions(params) {
        const req = {
          method: 'GET',
          url: 'http://localhost:3000/api/v1/session',
          headers: {
            Authorization: `Bearer ${params.token}`
          }
        }
        return $http(req, { params });
      },
      getSessionById(params) {
        return $http.get(`http://localhost:3000/api/v1/session/${params.userId}`, {
          params
        });
      },
    };
  }]);
