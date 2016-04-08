'use strict';

app.controller('AccountCtrl', function($scope, Auth) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.logout = function(){

  	Auth.logout();
  	console.log('logged out'); 
  }

 });