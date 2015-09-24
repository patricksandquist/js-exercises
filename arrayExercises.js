var uniq = function(array) {
  var output = [];
  for(var j=0; j<array.length; j++) {
    var seen = false;
    for(var i=0; i<output.length; i++) {
      if(output[i] === array[j]) {seen = true;}
    }
    if(seen === false) { output.push(array[j]); }
  }
  return output;
};

var twoSum = function(array) {
  var output = [];
  for(var i=0; i<array.length; i++) {
    for(var j=i; j<array.length; j++) {
      if(array[i] + array[j] === 0) {output.push([i, j]); }
    }
  }
  return output;
};

var transpose = function(array) {
  var width = array.length;
  var height = array[0].length;

  var output = new Array(height);
  for (var i=0; i<height; i++) {
    output[i] = new Array(width);
  }

  for (i=0; i<width; i++) {
    for (var j=0; j<height; j++) {
      output[j][i] = array[i][j];
    }
  }
  return output;
};


var test = [1, 2, 1, 3, 3];
console.log(uniq(test));

var test2 = [1, 2, 4, 5, -4, 2, -2];
console.log(twoSum(test2));

var test3 = [[1, 2, 3], [4, 5, 6]];
console.log(transpose(test3));
