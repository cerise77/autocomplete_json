
routing.controller('firstController',

function firstController($scope, $http){

  $scope.load = function(){

    $http({method: 'GET', url: 'list.json'}).
    //$http({method: 'GET', url: 'listanswer.json'}).
      then(function success(response) {
        $scope.list=response.data.list;

      });
 };

  $scope.load();


  /*$scope.list={
      answers:
      [{
          city: "Aaberg"
      },{
          city: "Aalst"
      },{
          city: "Aara"
      },{
        city: "France"
      },{
        city: "Francene"
      },{
        city: "Frances"
      },{
        city: "Janenna"
      },{
        city: "Janerich"
      },{
        city: "Janessa"
      },{
        city: "Janet"
      },{
        city: "Janeta"
      },{
        city: "Janetta"
      }
    ]}*/

});
