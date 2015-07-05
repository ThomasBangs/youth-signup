app.controller('ProfileCtrl',  function(ProfileFactory, $scope, $rootScope){
  // ProfileFactory.getProfile(id, function(myProfile) {
  //   $scope.profile = myProfile;
  // });
  var id = $rootScope.authData.uid;
  var key;
  ProfileFactory.getProfile(id, function(myProfile){
    console.log('myProfile',myProfile)
    key = Object.keys(myProfile)[0];
    console.log('key', key);
    console.log(myProfile);
    $scope.registration = myProfile[key];
  })

  $scope.deleteProfile = function(){
    ProfileFactory.removeProfile(id, key, function(){
      console.log('removed');
    })
  }
   $scope.editProfile = function(){
    ProfileFactory.editProfile(id, key, $scope.registration, function(){
      console.log('edited');
    })
  }

});


app.factory('ProfileFactory', function($http, API_URL) {
  function getProfile (id, cb) {
    $http 
      .get(`${API_URL}/users/profile/${id}.json`)
      .success(cb);
  };

  function removeProfile(id, regId,cb){
    $http 
      .delete(`${API_URL}/users/profile/${id}/${regId}.json`)
      .success(cb);
  }
    function editProfile(id, regId, data, cb){
    $http 
      .put(`${API_URL}/users/profile/${id}/${regId}.json`, data)
      .success(cb);
  }
    return {getProfile:getProfile, removeProfile:removeProfile, editProfile:editProfile}
});