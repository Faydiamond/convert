angular.module("starter")
  .controller('ArlCrtl', function DolCtrl($scope, $state,$ionicPopup) {
    $scope.algo = {
      num: ''
    };
    // VARIABLES

    $scope.res = '';
    //
    $scope.Todolar = function() {
      $scope.res = parseInt($scope.algo.num) * 0.00489243728;
      //console.log($scope.algo.num);
      console.log($scope.res);

    };

    $scope.showAlert = function() {
      $scope.res = parseInt($scope.algo.num) * 0.00489243728;

   var alertPopup = $ionicPopup.alert({
     title: 'Conversor de pesos a dolares',
     template: 'El resultado es '+"</br>" + $scope.res
   });

   alertPopup.then(function(res) {

     console.log('Thank you for not eating my delicious ice cream cone'+$scope.res);
   });
 };


  });
