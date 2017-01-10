'use strict';

/**
 * @ngdoc function
 * @name weatherApp.controller:WeatherDashboardController
 * @description
 * # WeatherDashboardController
 * Controller of the weatherApp
 */
angular.module('weatherApp')
    .controller('WeatherDashboardController', function ($scope, WeatherDashboardService) {

       /*Setting default value*/ 
    	$scope.weatherLocation = 'Bangalore';
    	$scope.weatherDay = '7';

      /* Dropdown for no of days*/
      $scope.weatherDays = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'];

      /*Getting weather list*/
  		$scope.getWeatherList = function (){
  			$scope.showLoading = true;
  			WeatherDashboardService.getWeatherList($scope.weatherLocation, $scope.weatherDay)
  			.then(function(response){
          if(response && response.data){
            $scope.weatherReports = response.data;
            $scope.showLoading = false;
            $scope.noRecord = false;
          }else{
            $scope.noRecord = true;
          }
  				
  			}).catch(function(error){
  				$scope.showLoading = false;
          $scope.noRecord = false;
  			})
  		}

      /* Change location */
      $scope.locationSearch = function(){
        console.log($scope.weatherLocation)
        $scope.getWeatherList();
      }

      /* Change day */
      $scope.changeDays = function(){
        $scope.getWeatherList();
        console.log($scope.weatherDay)
      }

    });
