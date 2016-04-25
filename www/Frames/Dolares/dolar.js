angular.module('starter')                                   //MODULE
  .config(function($stateProvider) {                        //
    $stateProvider
      .state('dolar', {
        url: '/dolar',
        templateUrl: 'Frames/Dolares/dolar.html',        //RUTA
        controller: 'DolCrtl'                       //ESTABLEZCO  EL   NOMBRE  DEL  CONTROLADOR

      });
  });
