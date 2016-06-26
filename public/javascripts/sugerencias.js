var myApp = angular.module('mlapp', []);
var URL_LUIS = 'https://api.projectoxford.ai/luis/v1/application?id=07f167d0-e823-4a36-b546-1502fe71c0c9&subscription-key=d6e2344416744f90b1a325501fd40a21&q=';

myApp.controller('mlcontroller',  function($scope,$http) {

    $scope.askMelisa = function(query){
      var fullPath = URL_LUIS+query;
      console.log(fullPath);
      $http.get(fullPath)
        .then(function(response) {
          console.log(response.data.intents[0].intent);
            $scope.resp = response.data.intents[0].intent;
        });
    }
  }
);