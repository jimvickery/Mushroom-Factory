"use strict";

app.controller("MushroomCtrl", function($scope, $routeParams, MushroomFactory) {

    
    MushroomFactory.getMushrooms()
    .then(function(mushroomCollection) {
        $scope.mushroomsArray = mushroomCollection;
        // console.log('mushrooms', $scope.mushroom);
        
    });

    
});