app.controller("ProfileCtrl",  function($scope, $rootScope, $location, myService, API_URL, $firebaseAuth, Auth){
// connect to firebase
console.log($rootScope);
    $scope.myData = new Firebase("https://sportssignup.firebaseio.com/users/" + $rootScope.authData.auth.uid + "/profile");
  
   //creat registration object
    $scope.registration = {}; 
    $scope.profiles = {};


  $scope.saveProfile = function(registration) {  
        $scope.myData.set(registration);
        $location.path("/profile");
  };
  $scope.myData.on("value", function(snapshot) {
    $scope.profiles = snapshot.val();
    console.log(snapshot.val());
    

  })
});
