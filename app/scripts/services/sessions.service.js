angular
  .module('bdeoApp')
  .service('SessionsSrv', ['$http', 'PATHS', function ($http, PATHS) {
    return {
      getSessions(params) {
        return $http.get(`${PATHS.USERS}/session`, { params });
      },
      getSessionById(params) {
        return $http.get(`${PATHS.USERS}/session/${params.userId}`, {
          params
        });
      },
    };
  }]);
