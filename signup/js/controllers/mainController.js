app.controller('MainController', ['$scope', '$firebaseAuth', '$firebaseArray', '$firebaseObject',  function($scope, $firebaseAuth, $firebaseArray, $firebaseObject, $location, $http){
  var ref = new Firebase("https://vivid-inferno-3744.firebaseIO.com");


  $scope.title = 'Youth Sports Sign Up';
  $scope.date = new Date();
    // download the data into a local object
  $scope.messages = $firebaseArray(ref);
  



}]);