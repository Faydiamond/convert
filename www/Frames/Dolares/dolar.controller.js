angular.module("starter")
  .controller('DolCrtl', function DolCtrl($scope, $state,$ionicPopup) {
    $scope.algo = {
      num: ''
    };
    // VARIABLES

    $scope.res = '';
    //
    $scope.Todolar = function() {
      $scope.res = parseInt($scope.algo.num) * 0.000333;
      //console.log($scope.algo.num);
      console.log($scope.res);

    };

    $scope.showAlert = function() {
      $scope.res = parseInt($scope.algo.num) * 0.000333;

   var alertPopup = $ionicPopup.alert({
     title: 'Conversor de pesos a dolares',
     template: 'El resultado es '+"</br>" + $scope.res
   });

   alertPopup.then(function(res) {

     console.log('Thank you for not eating my delicious ice cream cone'+$scope.res);
   });
 };


  });
