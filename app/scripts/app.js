'use strict';

/**
 * @ngdoc overview
 * @name bdeoApp
 * @description
 * # bdeoApp
 *
 * Main module of the application.
 */
angular
  .module('bdeoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .when('/sessions', {
        templateUrl: 'views/sessions.html',
        controller: 'SessionsCtrl',
        controllerAs: 'vm'
      })
      .when('/session/detail/:id', {
        templateUrl: 'views/session-detail.html',
        controller: 'SessionDetailCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
