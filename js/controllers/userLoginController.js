var myApp = angular.module('smartgridgame');

myApp.controller('userLoginController', ['$scope','usersLoginFactory','formatRequest','$rootScope','$location','$sessionStorage', function($scope, usersLoginFactory,formatRequest,$rootScope,$location,$sessionStorage){
$scope.user = {};
$scope.invalidLogin = false;
  $scope.Login = function(){
    var geturl = {};

    geturl = formatRequest.get({});
    if(geturl === undefined)
    {
      setTimeout(function(){
          return $scope.Login();
         }, 10);
    }
    else
    {
      geturl.user = $scope.user.userName;
      geturl.pass = $scope.user.password;
      usersLoginFactory.findUser(geturl,
      function (response) {
        switch(response.status_code)
        {
          case '200':
            $sessionStorage.currentUser = response.data;
            $location.path("/");
            break;
          case '401':
            $scope.invalidLogin = true;
            break;
        }
      },
      function () {
        document.write(JSON.stringify(response));
      });
    }
  };
  }]);