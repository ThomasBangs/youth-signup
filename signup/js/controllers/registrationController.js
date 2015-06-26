app.controller('registrationController', 
  ['$scope', '$firebaseAuth', '$firebaseArray',
  function($scope, $firebaseAuth, $firebaseArray, $location, $http){

  var ref = new Firebase("https://sportssignup.firebaseIO.com/registrations");
  $scope.registrations = $firebaseArray(ref);

  $scope.registration = {};
  // $scope.registration.footballSelect = "football";
  // $scope.registration.cheerleaderSelect = "cheerleading";
  // $scope.registration.genderMale = "Boy";
  // $scope.registration.genderFemale = "Girl";
  // $scope.registration.experience= "Yes";
  
  // $scope.registration.livingWithMom = "";
  // $scope.registration.livingWithDad = "";
  // $scope.registration.livingWithBoth = "";
  // $scope.registration.livingWithGuardian = "";

  //   function($firebaseObject) {
  //   var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
  //   // download physicsmarie's profile data into a local object
  //   // all server changes are applied in realtime
  //   $scope.profile = $firebaseObject(ref.child('profiles').child('phsyicsmarie'));
  // }


   
// experienced player / cheerleader
  $scope.doYouHaveExpYes = function() {
    $scope.registration.experience = "I have experience.";
  };

  $scope.doYouHaveExpNo = function() {
    $scope.registration.experience = "I do not have experience.";
  };

  // child lives with button click

$scope.livesWithMom = function() {
  $scope.registration.livingWithMom = "Lives with Mom.";
  

  };
  $scope.livesWithDad = function() {
    
    $scope.registration.livingWithDad = "Lives with Dad.";
   
  };
  $scope.livesWithBothParents = function() {
   
    $scope.registration.livingWithBoth = "Lives with both parents.";
    

  };
  $scope.livesWithGuardian = function() {
   
    $scope.registration.livingWithGuardian = "Lives with a guardian.";

  };


  
// cheer / football select
  $scope.footballSelected = function() {
    $scope.footballSelect = "football";
  };

  $scope.cheerleaderSelected = function() {
    $scope.cheerleaderSelect = "cheerleading";
  };
// gender select buttons
  $scope.boys = function() {
    $scope.registration.genderMale = "Boy";
    

  };
   $scope.girls = function() {
  
    $scope.registration.genderFemale = "Girl";

  };



  $scope.saveRegistration = function() {
    // Create JSON document
    $scope.registrations.$add({
      "childsName": $scope.registration.childsName,
      "footballSelect": $scope.footballSelect,
      "cheerleaderSelect": $scope.cheerleaderSelect,
      "dateOfBirth": $scope.registration.dateOfBirth,
      "ageOnJuly31": $scope.registration.ageOnJuly31,
      "playerStreetAddress": $scope.registration.playerStreetAddress,
      "playerCity": $scope.registration.playerCity,
      "zipCode": $scope.registration.zipCode,
      "genderFemale": $scope.genderFemale,
      "genderMale": $scope.genderMale,
  }); 
  
      
    // }
    console.log(registration);
    // $scope.registrations.$add(registration); 
    $location.path("/#/formsuccess");
    
    
  };


  



}]);