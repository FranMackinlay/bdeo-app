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
        const req = {
          method: 'GET',
          url: `http://localhost:3000/api/v1/session/${params.id}`,
          headers: {
            Authorization: `Bearer ${params.token}`
          }
        }
        return $http(req);
      },
      createSession(params) {
        const req = {
          method: 'POST',
          url: `http://localhost:3000/api/v1/session`,
          data: params,
          headers: {
            Authorization: `Bearer ${params.token}`
          }
        }
        return $http(req, { params });
      },
      upsertSession(params) {
        const req = {
          method: 'PUT',
          url: `http://localhost:3000/api/v1/session/${params.id}`,
          data: params,
          headers: {
            Authorization: `Bearer ${params.token}`
          }
        }
        return $http(req, { params });
      },

      deleteSession(params) {
        const req = {
          method: 'DELETE',
          url: `http://localhost:3000/api/v1/session/${params.id}`,
          headers: {
            Authorization: `Bearer ${params.token}`
          }
        }
        return $http(req, { params });
      },

    };
  }]);
