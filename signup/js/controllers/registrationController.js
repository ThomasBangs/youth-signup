// app.factory("userProfile", ["$firebaseArray",
//   function($firebaseArray) {
//     // create a reference to the Firebase database where we will store our data
//     var User = {};
//     var ref = new Firebase("https://sportssignup.firebaseio.com");

//     return $firebaseArray(ref).$asArray();
//   }
// ]);


app.controller("registrationController", function($scope, $firebaseArray, Auth) {
 var ref = new Firebase("https://sportssignup.firebaseio.com/users/" + $scope.uid);

 $scope.form = $firebaseArray(ref);

  $scope.footballSelected =function() {
        $scope.footballSelect = "football";
  }









  $scope.saveForm = function() {

    
    
    $scope.form.$add({


      
      sport: $scope.footballSelect
    });
  }
});






//   // experienced player / cheerleader
//   $scope.doYouHaveExpYes = function() {
//     $scope.registration.experience = "I have experience.";
//   };

//   $scope.doYouHaveExpNo = function() {
//     $scope.registration.experience = "I do not have experience.";
//   };

//   // child lives with button click

// $scope.livesWithMom = function() {
//   $scope.registration.livingWithMom = "Lives with Mom.";
  

//   };
//   $scope.livesWithDad = function() {
    
//     $scope.registration.livingWithDad = "Lives with Dad.";
   
//   };
//   $scope.livesWithBothParents = function() {
   
//     $scope.registration.livingWithBoth = "Lives with both parents.";
    

//   };
//   $scope.livesWithGuardian = function() {
   
//     $scope.registration.livingWithGuardian = "Lives with a guardian.";

//   };


  
// // cheer / football select
//   $scope.footballSelected = function() {
//     $scope.footballSelect = "football";
//   };

//   $scope.cheerleaderSelected = function() {
//     $scope.cheerleaderSelect = "cheerleading";
//   };
// // gender select buttons
//   $scope.boys = function() {
//     $scope.registration.genderMale = "Boy";
    

//   };
//    $scope.girls = function() {
  
//     $scope.registration.genderFemale = "Girl";

//   };
  







