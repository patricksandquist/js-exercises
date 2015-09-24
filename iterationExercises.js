var bubbleSort = function(array) {
  var sorted = false;
  while(!sorted){
    sorted = true;
    for(var i=0; i<array.length-1; i++){
      for(var j=i+1; j<array.length; j++){
        if(array[i] > array[j]){
          sorted = false;
          var temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }
      }
    }
  }
  return array;
};

var subStrings = function(string) {
  var output = [];
  for(var i=0; i<string.length; i++) {
    for(var j=i+1; j<=string.length; j++) {
      output.push(string.slice(i, j));
    }
  }
  return output;
};

//console.log(bubbleSort([1, 5, 7, 3, 4, 5]));
console.log(subStrings("cat"));
