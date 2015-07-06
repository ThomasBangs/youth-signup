// app.controller("ProfileCtrl", function($rootScope, $firebaseArray, $location, $scope, API_URL, $http) {
//   var ref = new Firebase("https://sportssignup.firebaseio.com/users/" + $rootScope.authData.uid);
//   // var getProfile = new Firebase(ref + );
//   // $scope.profiles = $firebaseArray(getProfile);
//  function getReg(id, cb) {
//       $http

//         .get(`${API_URL}/users/${authdata.uid}/${id}.json`)
//         .success(cb)
//         .error(function(data, error) { console.log(error); });
//           console.log("success");
//     }
 


  
// });






app.controller('ProfileCtrl',  function($rootScope, $firebaseArray, $location, $scope, API_URL ){
   var ref = new Firebase("https://sportssignup.firebaseio.com/users/" + $rootScope.authData.uid + "registration");

   $scope.profiles = $firebaseArray(ref);
  console.log($scope.profiles );
});















