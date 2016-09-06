colorBlocks.factory('DataFactory', [function() {
  console.log("data factory running");
  var colors = [];
  colors = ['red', 'blue', 'papayawhip', 'green'];

  var addColor = function(color) {
      console.log(color);
      colors.push(color);
      // make sure you use a property on this object!
      // otherwise the controller/view won't reflect the new value
    console.log(colors);
    }

  return {
    colorsArray: colors,

    addColor: function(color) {
      addColor(color);
    }

  };


}]);
