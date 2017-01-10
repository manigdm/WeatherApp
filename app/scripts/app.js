'use strict';

/**
 * @ngdoc overview
 * @name weatherApp
 * @description
 * # weatherApp
 *
 * Main module of the application.
 */
angular
  .module('weatherApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/weather-dashboard.html',
        controller: 'WeatherDashboardController'
      })
      .otherwise({
        redirectTo: '/'
      });
      // $locationProvider.html5Mode({
      //   enabled: true,
      //   requireBase: false
      // });
  });
