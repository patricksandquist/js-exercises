var range = function(start, end){
  if(end < start) { return []; }
  if(start === end) { return [start]; }

  return [start].concat(range(start+1, end));
};

var sum = function(array) {
  if(array.length === 0) { return 0; }

  return array.shift() + sum(array);
};

var exponential = function(b, n) {
  if(n === 0) { return 1; }
  return b * exponential(b, n-1);
};

var fib = function(n) {
  if(n === 1) { return [1]; }
  if(n === 2) { return [1, 1]; }
  var smallerFib = fib(n - 1);
  return smallerFib.concat([smallerFib[smallerFib.slice(-1)[0]] + smallerFib.slice(-2)[0]]);
};

var bsearch = function(array, target) {
  var midpoint = Math.floor(array.length/2);
  if(array[midpoint] === target) { return midpoint; }

  if(array[midpoint] > target) {
    return bsearch(array.slice(0, midpoint), target);
  }
  else {
    return midpoint + bsearch(array.slice(midpoint, array.length), target);
  }
};

var makeChange = function(amt, coins) {
  coins = coins || [25, 10, 5, 1];
  if(amt === 0) { return []; }

  var combos = [];
  for(var k=0; k<coins.length; k++) {
    coins = coins.slice(k,coins.length);
    var change = [];
    var newAmt = amt;
    if(amt > coins[0]) {
      var coinCount = Math.floor(amt / coins[0]);
      for(var i=0; i<coinCount; i++) {
        change.push(coins[0]);
        newAmt -= coins[0];
      }
    }
    combos.push(change.concat(makeChange(newAmt, coins.slice(1, coins.length))));
  }
  var bestChange = [];
  for(var j=0; j<combos.length; j++) {
    if(bestChange.length === 0 || combos[j].length < bestChange.length) {
      bestChange = combos[j];
    }
  }
  return bestChange;
};

var mergeSort = function(array) {
  if(array.length < 2) { return array; }
  var midpoint = Math.floor(array.length / 2);
  var left = array.slice(0, midpoint);
  var right = array.slice(midpoint, array.length);

  return merge(mergeSort(left), mergeSort(right));
};

var merge = function(arr1, arr2) {
  var output = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if(arr1[0] > arr2[0]) {
      output.push(arr2.shift());
    }
    else {
      output.push(arr1.shift());
    }
  }
  if(arr1.length > 0) {
    return output.concat(arr1);
  }
  else {
    return output.concat(arr2);
  }
};
// console.log(fib(2));
// console.log(fib(5));
// console.log(bsearch([0, 1, 2, 3, 4, 5], 5));
// console.log(bsearch([0, 1, 2, 3, 4, 5], 0));
// console.log(bsearch([0, 1, 2, 3, 4, 5], 3));
// console.log(makeChange(0));
// console.log(makeChange(2));
// console.log(makeChange(34));
// console.log(makeChange(4, [10, 7, 1]));
// console.log(makeChange(14, [10, 7, 1]));
console.log(mergeSort([1, 3, 5, 2, 7, 5, 6, 4]));
