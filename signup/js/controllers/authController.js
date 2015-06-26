

app.factory("Auth", function($firebaseAuth) {
  var ref = new Firebase("https://sportssignup.firebaseio.com");
  return $firebaseAuth(ref); 
  
});
//firebase Auth
app.controller("AuthCtrl", function($scope, Auth) {

  //login with Facebook
  $scope.login = function() {
    Auth.$authWithOAuthPopup("facebook").then(function(authData) {
      console.log(authData);
    }).catch(function(error) {
      console.log(error);
    });
  }
  // logout
  $scope.logout = function() {
    Auth.$unauth();
  }


    // ... 
});









