angular.module('starter')
  .config(function($stateProvider) {
    $stateProvider
      .state('Inicio', {
        url: '/',
        templateUrl: 'Frames/Inicio/inicio.html',
        controller: 'IniCrtl'
      });
  });
