'use strict';

/**
 * @ngdoc factory/service
 * @name weatherApp.services:WeatherDashboardService
 * @description
 * #WeatherDashboardService
 */

 
angular.module('weatherApp')
    .factory('WeatherDashboardService', ['$q', '$http', 
        function ($q, $http) {
    
    var getWeatherList = function (location, days) {
        var url = baseUrl+'/daily?q='+location+'&mode=json&unit s=metric&cnt='+days+'&apikey=82ab321c07f3aefb02f20549f49dfed5';
        var deferred = $q.defer();
        $http({
            url: url,
            method: "GET"
        })
        .then(function successCb(response) {
            deferred.resolve(response);
        }, function errorCb(response) {
            console.log(response);
        });

        return deferred.promise;
    }

        
    return {
        getWeatherList : getWeatherList
    }

}]);
