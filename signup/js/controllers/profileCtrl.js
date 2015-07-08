app.controller("ProfileCtrl",  function($scope, $rootScope, $location, myService, API_URL, $firebaseAuth, Auth, $firebaseObject){
// connect to firebase
console.log($rootScope);
    $scope.myData = new Firebase("https://sportssignup.firebaseio.com/users/" + $rootScope.authData.auth.uid + "/profile");

    $scope.profile = $firebaseObject($scope.myData);
  
   //creat registration object
    $scope.registration = {}; 



  $scope.saveProfile = function(registration) {  
        $scope.myData.set(registration);
        $location.path("/profile");
  };

});
