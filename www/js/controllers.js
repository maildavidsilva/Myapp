angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Products) {

  $scope.products = Products.all();
  console.log ("the products have ", $scope.products); 

})

.controller('ChatsCtrl', function($scope, Chats, Products) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
    $scope.image = 'http://icons.iconarchive.com/icons/iconsmind/outline/256/Baby-Clothes-icon.png';
    $scope.button = function(product){
     console.log('Button was clicked', product, $scope.image);
     Products.saveProducts(product, $scope.image);    
    }

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
