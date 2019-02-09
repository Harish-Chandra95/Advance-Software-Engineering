angular.module('Validlogin', ['ionic']).controller('Validatelogin', function ($scope,$http) {
  $scope.temp = "";

  $scope.Valid = function (username,password) {

    $scope.uname = username;
    $scope.pwd = password;

    if($scope.uname == '' && $scope.pwd == '' )
    {

      $scope.temp = "Username and Password cannot be empty";
    }

    else if($scope.uname == '')
    {

      $scope.temp = "Username cannot just be empty";
    }

    else
    {

      $scope.temp = "Password cannot just be empty";
    }

  }
});
