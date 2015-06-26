

app.factory("Auth", function($firebaseAuth) {
  var ref = new Firebase("https://sportssignup.firebaseio.com");
  return $firebaseAuth(ref); 
  
});
//firebase Auth
app.controller("AuthCtrl", function($scope, Auth) {
  Auth.$onAuth(function(authData) {
    $scope.authData = authData;
    console.log(authData);
  });


  //login with Facebook
  $scope.login = function() {
    Auth.$authWithOAuthPopup("facebook").catch(function(error) {
      console.error(error);
    });
  }
  // logout
  $scope.logout = function() {
    Auth.$unauth();
  }


    // ... 
});









