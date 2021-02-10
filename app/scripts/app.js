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
        templateUrl: 'views/login.view.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .when('/sessions', {
        templateUrl: 'views/sessions.view.html',
        controller: 'SessionsCtrl',
        controllerAs: 'vm'
      })
      .when('/session/detail/:id', {
        templateUrl: 'views/session-detail.view.html',
        controller: 'SessionDetailCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/login'
      });
  })
  .run(['$rootScope', $rootScope => {
    const $html = document.getElementsByTagName('html')[0];
    $rootScope.IS_MOBILE = window.innerWidth && window.innerWidth < 480 || $html.classList.contains('mobile');
    if ($rootScope.IS_MOBILE) {
      $html.classList.add('mobile');
    } else {
      $html.classList.remove('mobile');
    }

    $rootScope.IS_EMBED = window !== window.parent || location.href.includes('embed');
    if ($rootScope.IS_EMBED) {
      $html.classList.add('embed');
    } else {
      $html.classList.remove('embed');
    }
  }]);
