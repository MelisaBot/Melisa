var myApp = angular.module('mlapp', []);
var URL_LUIS = 'https://api.projectoxford.ai/luis/v1/application?id=07f167d0-e823-4a36-b546-1502fe71c0c9&subscription-key=d6e2344416744f90b1a325501fd40a21&q=';

myApp.controller('mlcontroller', function($scope,$http) {

    $scope.askMelisa = function(query){
      if (query.length <4 ) {
        $scope.resp ='';
        return;
      }
      var fullPath = URL_LUIS+query;

      $http.get(fullPath)
        .then(function(response) {

          var responseFrindly=getRespuesta(response.data.intents[0].intent);
            $scope.resp = responseFrindly;


        });

    }

      function getRespuesta(intention){
      switch(intention){
        case 'PreguntandoPrecio':
        {
          var precio=getPrecio();
          return "El Precio es $"+precio
          }
              break;
        case 'PreguntandoSiEsLiberado':
        {
          var precio=getPrecio();
          return "El Precio es $"+precio
          }
              break;
        case 'PreguntandoMediosDeEnvio"':
        {
          var precio=getPrecio();
          return "El Precio es $"+precio
          }
              break;
          case 'PreguntandoPorGarantia':
        {
          var precio=getPrecio();
          return "El Precio es $"+precio
          }
              break;
          case 'PreguntandoPrecio':
        {
          var precio=getPrecio();
          return "El Precio es $"+precio
          }
              break;
          case 'PreguntandoPrecio':
        {
          var precio=getPrecio();
          return "El Precio es $"+precio
          }
              break;
          case 'PreguntandoPrecio':
        {
          var precio=getPrecio();
          return "El Precio es $"+precio
          }
              break;
          case 'PreguntandoPrecio':
        {
          var precio=getPrecio();
          return "El Precio es $"+precio
          }
              break;
          case 'PreguntandoPrecio':
        {
          var precio=getPrecio();
          return "El Precio es $"+precio
          }
              break;

    }
  }


  function getPrecio(){
    return 40;
  }

  }


);
