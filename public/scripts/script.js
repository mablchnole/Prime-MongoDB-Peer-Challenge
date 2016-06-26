var myApp=angular.module('myApp', []);

// create a controller
myApp.controller('assignments', ['$scope', '$http', function($scope, $http){
  $scope.allAssignments = [];

  // add new assignments
  $scope.addAssign = function(){
    event.preventDefault();
    // get user input and store it into an object
    var objectToSend = {
      title: $scope.titleIn,
      number: $scope.numIn,
      name: $scope.nameIn,
      score: $scope.scoreIn,
      date: $scope.dateIn
    }; // end objectToSend
    console.log('objectToSend: ', objectToSend);

    // post call to the server with the object to be stored in DB
    $http({
      method: 'POST',
      url: '/postPath',
      data: objectToSend
    });

    // clear inputs
    $scope.titleIn ='';
    $scope.numIn ='';
    $scope.nameIn ='';
    $scope.scoreIn ='';
    $scope.dateIn ='';
  }; // end addAssign

  // get call to retrieve assignments from DB
  $http({
    method: 'GET',
    url: '/getPath',
  }).then( function( response ){
    $scope.allAssignments = response.data;
    console.log( 'Sending ' + response + " from db.");
  }, function myError( response ) {
    console.log( response.statusText );
  });

}]); // end controller
