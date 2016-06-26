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

          getRespuesta(response.data.intents[0].intent,function(err,res){
            console.log(res);
            $scope.resp = res;

          });


        });

    }

      function getRespuesta(intention,respCB){

        console.log('INTENTION-->'+intention);
      switch(intention){
        case 'PreguntandoPrecio':
        {

          getPrecio(function(err,precio){
              respCB(null,"El Precio es de $"+precio)
          });

        }
              break;
        case 'PreguntandoSiEsLiberado':
        {

          respCB(null,"Si, el producto liberado.");
          }
            break;
          case 'PreguntandoPorFeatures':
          {

              respCB(null,"Cuenta con flash en camara frontal y trasera. Wifi, 4G, Radio y Bluetooh.");
          }
              break;
        case 'PreguntandoMediosDeEnvio"':
        {
          var metodoEnvio=getMetodoEnvio();
          respCB(null,"El metodo de envio es ");
          }
              break;
          case 'PreguntandoPorGarantia':
        {

          respCB(null,"Todos los productos incluyen 6 meses de garantia");
          }
              break;
          case 'Insulto':
        {

          respCB(null,"Disculpe, podria comunicarse educadamente?");
          }
              break;
          case 'PreguntandoPorAccesorio':
        {

          respCB(null,"Solo incluyen los accesorios propios del equipo. ");
          }
              break;
          case 'Saludar':
        {

          respCB(null,"Hola! :)");
          }
              break;
          case 'halagar':
        {

          respCB(null,"Gracias!, es muy lindo lo que me decis");
          }
              break;

          case 'PreguntandoColor':
        {

          respCB(null,"Los colores disponibles son Blanco, Azul y Rojo.");
          }
              break;

              case 'PreguntandoSiPermuta':
            {

              respCB(null,"No permuto, Gracias.");
              }
                  break;

          default :{
            respCB(null,"");
          }
            break;

    }
  }


  function getPrecio(cb){
    $http.get('http://localhost:3000/publication')
      .then(function(response){
        console.log(response);
          cb(null,response.data.price)
      })

  }

  function getMetodoEnvio(cb){
    $http.get('http://localhost:3000/publication')
      .then(function(response){
        console.log(response);
          cb(null,response.data.shipping.mode)
      })

  }

  }


);
