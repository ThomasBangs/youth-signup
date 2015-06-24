app.controller('registrationController', ['$scope', '$firebaseAuth', '$firebaseArray', '$firebaseObject',  function($scope, $firebaseAuth, $firebaseArray, $firebaseObject, $location, $http){
  var ref = new Firebase("https://vivid-inferno-3744.firebaseIO.com");
  $scope.registrations = $firebaseArray(ref);
  $scope.registration = {};
  $scope.footballSelect = false;
  $scope.cheerleaderSelect = false;
  $scope.genderMale = false;
  $scope.genderFemale = false;

  //   function($firebaseObject) {
  //   var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
  //   // download physicsmarie's profile data into a local object
  //   // all server changes are applied in realtime
  //   $scope.profile = $firebaseObject(ref.child('profiles').child('phsyicsmarie'));
  // }


   


  
// cheer / football select
  $scope.footballSelected = function() {
    $scope.footballSelect = true;
    $scope.cheerleaderSelect = false;

  };

  $scope.cheerleaderSelected = function() {
    $scope.cheerleaderSelect = true;
    $scope.footballSelect = false;
  };
// gender select buttons
  $scope.boys = function() {
    $scope.genderMale = true;
    $scope.genderFemale = false;

  };
   $scope.girls = function() {
    $scope.genderMale = false;
    $scope.genderFemale = true;

  };



  $scope.saveRegistration = function() {
    // Create JSON document
    var newReg = {
      // "childsName": $scope.childsName,
      // "footballSelect": $scope.footballSelect,
      // "cheerleaderSelect": $scope.cheerleaderSelect,
      // "dateOfBirth": $scope.dateOfBirth,
      // "ageOnJuly31": $scope.ageOnJuly31,
      // "playerStreetAddress": $scope.playerStreetAddress,
      // "playerCity": $scope.playerCity,
      // "zipCode": $scope.zipCode,
      // "genderFemale": $scope.genderFemale,
      // "genderMale": $scope.genderMale,



      
    }
    $scope.registrations.$add(newReg); 
  };


  



}]);