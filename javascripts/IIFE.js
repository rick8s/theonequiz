var FruitMaker = function() {
  var fruits = ["apples", "bananas", "cherries", "huckleberries"]
  return {
   getFruits: function() {
    return fruits;
   }
   addfruits: function(addedFruit){
    return
    fruits.push(addedFruit);
   }
  }
}();