const add = function(x,y) {
  if(typeof x !== 'number' || typeof y !== 'number') return;

  return x + y;
};

const subtract = function(x,y) {
	if(typeof x !== 'number' || typeof y !== 'number') return;
  
  return x - y;
};

const sum = function(array) {
	if(!array instanceof Array) return;

  return array.reduce((total,item) => total + item, 0);
};

const multiply = function(array) {
  if(!array instanceof Array) return;
  
  return array.reduce((total,item) => total * item, 1);
};

const power = function(x,p) {
  if(typeof x !== 'number' || typeof p !== 'number') return;
  
  return x ** p;
};

const factorial = function(n) {
  if(n < 0 || typeof n !== 'number') return null;
  
  if(n === 1 || n === 0) return 1;

  return n * factorial(n-1)
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
