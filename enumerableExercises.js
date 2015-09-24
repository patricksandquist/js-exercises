var myEach = function(array, myEachAction) {
  for(var i=0; i<array.length; i++) {
    myEachAction(array[i]);
  }
  return array;
};

var myMap = function(array, myMapAction) {
  var output = [];
  var pushAction = function(el) {
    output.push(myMapAction(el));
  };
  myEach(array, pushAction);
  return output;
};

var printOut = function(el) {
  console.log(el);
};

var timesTwo = function(el) {
  return (el * 2);
};

var myInject = function(array, myInjectAction, start) {
  var accum = start || array.shift();

  var executeAction = function(el) {
    accum = myInjectAction(el, accum);
  };

  myEach(array, executeAction);
  return accum;
};

var sum = function(num1, num2) {
  return num1 + num2;
};

//myEach([1, 2, 3], printOut);
//console.log(myMap([1,2,3], timesTwo));
console.log(myInject([1,2,3], sum, 12));
