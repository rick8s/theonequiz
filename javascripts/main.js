var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];


function modulus(num1, num2) {
  return num1 % num2;
}

function doMath(num1, num2, funcRef) {
 return funcRef(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2, funcRef) {
  return num1 - num2;
}

function sortedPlanets(array){
  return array.sort();
}

function reversedPlanets(myArray){
 var revPlanets = [];
    for (i = 0; i < myArray.length; i++) {
    revPlanets.push(myArray[i].split("").reverse().join(""));
    } return revPlanets;
  } 

function longPlanets(myArray) {
  var minArray = [];
  for (i = 0; i < myArray.length; i++) {
    if (myArray[i].length > 6) {
      minArray.push(myArray[i]);
    } 
  } return minArray;
} 

$.ajax({
      url: "../data/animals.json",
      method: "GET", 
    }).done(function(animal) {
      console.log("animals", animal.animals);
    })

