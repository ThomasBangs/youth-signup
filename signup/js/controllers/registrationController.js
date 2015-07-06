app.controller("FormCtrl",  function($scope, $firebaseArray, $rootScope, $location, myService, API_URL, $firebaseAuth, Auth){
// connect to firebase
    var ref = new Firebase("https://sportssignup.firebaseio.com/users/" + $rootScope.authData.uid + "registration");
    var profiles = $firebaseArray(ref);


  $scope.saveForm = function() {  
    profiles.$add($scope.registration);
    $location.path('/profile');
  };

});
