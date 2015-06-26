
//firebase Auth
app.controller('AuthCtrl', ["$http", "$scope", function($scope, $firebaseAuth) {
  var ref = new Firebase("https://sportssignup.firebaseio.com");
  $scope.authObj = $firebaseAuth(ref); 

  $scope.authObj.$authWithPassword({
    email: "thomasbangssr@gmail.com",
    password: "redroof"
  }).then(function(authData) {
      //User authenticated
  }).catch(function(error) {
    //Authentication error
  })
//Detecting Auth State
  $scope.authObj.$onAuth(function(authData) {
    if (authData) {
      //User logged in
    } else {
      //User logged out
    }
  });
//Creating Users
$scope.authObj.ref.$createUser({
  email: "",
  password: ""
}).then(function(userData){
  // User created
}).catch(function(error){
  // Error creating User
});


    // ... 
}]);









