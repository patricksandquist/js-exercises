Array.prototype.uniq = function() {
  var output = [];
  for(var j=0; j<this.length; j++) {
    var seen = false;
    for(var i=0; i<output.length; i++) {
      if(output[i] === this[j]) {seen = true;}
    }
    if(seen === false) { output.push(this[j]); }
  }
  return output;
};

Array.prototype.twoSum = function() {
  var output = [];
  for(var i=0; i<this.length; i++) {
    for(var j=i; j<this.length; j++) {
      if(this[i] + this[j] === 0) {output.push([i, j]); }
    }
  }
  return output;
};

Array.prototype.transpose = function() {
  var width = this.length;
  var height = this[0].length;

  var output = new Array(height);
  for (var i=0; i<height; i++) {
    output[i] = new Array(width);
  }

  for (i=0; i<width; i++) {
    for (var j=0; j<height; j++) {
      output[j][i] = this[i][j];
    }
  }
  return output;
};


var test = [1, 2, 1, 3, 3];
// console.log(uniq(test));
//
// var test2 = [1, 2, 4, 5, -4, 2, -2];
// console.log(twoSum(test2));
//
// var test3 = [[1, 2, 3], [4, 5, 6]];
// console.log(transpose(test3));

console.log(test.uniq());
