angular.module("starter") //MODULOS
  .controller('IniCrtl', function($scope, $state ){

      $scope.vee=function(){
        console.log("adentro!");
        $state.go('dolar');

      }

      $scope.veeu=function(){
        console.log("adentro!");
        $state.go('euro');

      }

      $scope.arg=function(){
        console.log("adentro!");
        $state.go('argentino');
      }

    });
