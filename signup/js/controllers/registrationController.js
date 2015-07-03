app.controller("formCtrl",  function($scope, $firebaseArray){
// connect to firebase
  var ref = new Firebase("https://sportssignup.firebaseio.com/users/profile");
  var fb = $firebaseArray(ref);
  // sync as Array
  // 3 way data binding
 
  $scope.saveForm = function() {
    fb.$add($scope.registration);
    
  };


});


