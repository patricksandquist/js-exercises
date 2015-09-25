var Cat = function(name, owner) {
  this.name = name; // reserved for Function.name, but should work in Chrome.
  this.owner = owner;
};

Cat.prototype = {
  cuteStatement: function() {
    return this.name + " loves " + this.owner;
  },

  meow: function() {
    return "MEOW";
  }
};

var a = new Cat("a", "A");
var b = new Cat("b", "B");

console.log(a.cuteStatement());
console.log(b.cuteStatement());

Cat.prototype.cuteStatement = function() {
  return "ASDFASDF";
};

console.log(a.cuteStatement());
console.log(b.cuteStatement());

console.log(a.meow());
console.log(b.meow());

a.meow = function() { return "ASDfasdf"; };

console.log(a.meow());
console.log(b.meow());
