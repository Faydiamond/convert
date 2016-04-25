angular.module('starter')                                   //MODULE
  .config(function($stateProvider) {                        //
    $stateProvider
      .state('argentino', {
        url: '/argentino',
        templateUrl: 'Frames/Agentino/argentino.html',        //RUTA
        controller: 'ArlCrtl'                       //ESTABLEZCO  EL   NOMBRE  DEL  CONTROLADOR

      });
  });
