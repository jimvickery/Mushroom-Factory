"use strict";
console.log('Mushroom Factory');


app.factory("MushroomFactory", function( $q, $http) {    
    
    console.log('Testing factory Mushroom');
    
        //get  mushrooms
        const getMushrooms = () => {
            let mushroomsArray = [];
            return $q((resolve, reject) => {
                // let newObj = JSON.stringify(selected);
                $http.get('./mushrooms.json')
                .then((itemObject) => {
                    let mushroomCollection = itemObject.data;
                    console.log('Test Get Mushrooms', mushroomCollection);
                    let mushroomList = mushroomCollection.mushrooms;

                    Object.keys(mushroomList).forEach((key) => {
                        mushroomList[key].id = key;
                        mushroomsArray.push(mushroomList[key]);
                        console.log('mushroomsArray', mushroomsArray);
                        
                    });
                    resolve(mushroomsArray);
                }) 
                .catch((error) => {
                    reject(error);
                });
            });
        };
    
    


return {getMushrooms};


});