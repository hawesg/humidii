var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", function($scope, $firebaseArray) {
  var ref = new Firebase("https://testtesttes.firebaseio.com/DHT1");
  var list = $firebaseArray(ref);
  $scope.messages = list;
  // create a query for the most recent 25 messages on the server
  //var query = ref;//limitToLast(1);
  // the $firebaseArray service properly handles database queries as well
  $scope.humidity = $firebaseArray(list);

  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  //$scope.messages = list.limitToLast(1);

});