angular.module('starter')                                   //MODULE
  .config(function($stateProvider) {                        //
    $stateProvider
      .state('euro', {
        url: '/euro',
        templateUrl: 'Frames/Euros/euro.html',        //RUTA
        controller: 'EulCrtl'                       //ESTABLEZCO  EL   NOMBRE  DEL  CONTROLADOR

      });
  });
