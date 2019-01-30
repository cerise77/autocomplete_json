
routing.controller('firstController',

function firstController($scope, $http){

  $scope.load = function(){

    $http({method: 'GET', url: 'listanswer.json'}).
    //$http({method: 'GET', url: 'listanswer.json'}).
      then(function success(response) {
        $scope.states=response.data;

        $scope.selected = undefined;

        /*console.log($scope.states);*/
      });
 };

  $scope.load();


  //$scope.selected = undefined;
  //$scope.states = ['USA', 'Ukraine', 'France', 'German', 'Spain', 'Sweden', 'Suiss', 'Finland', 'Belarus', 'Georgia', 'Poland', 'Greece', 'Portugal'];

//$scope.states.css("border-bottom", "solid 1px #000");

//console.log($scope.states);

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
