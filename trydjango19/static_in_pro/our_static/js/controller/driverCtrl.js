var myapp = angular.module('driver-app', []).config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});
myapp.controller('driverCtrl',['$scope', '$http', '$rootScope',function($scope, $http, $rootScope) {
  // $scope.orders={};

  $http({withCredentials: false, method: 'GET', url:'http://rahulkumarwp.pythonanywhere.com/logistics_api/api/driverlist'})
  .success(function (response) {     
    $scope.drivers = response
    //console.log($scope.drivers);
    console.log("Response Status 200 OK.");
  })
  .error(function (data, status, headers, config) {
    $scope.subOrd = "Data: " + data +
                      "<hr />status: " + status +
                      "<hr />headers: " + header +
                      "<hr />config: " + config;
  });

  $scope.update=function(index){
    var driver = $scope.drivers[index];
    var driverId=driver.driver_id;
    console.log(driverId);
    var data = $.param({
                "driver_id" : order.order_id,
                "name" : order.quantity,
                "password" : "Confirmed",
                "trip_id" : order.order_id,
                "truck_id" : $scope.truck_id, 
              });

              //console.log("new_trip = "+new_trip);

              var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
              }
  }


}])