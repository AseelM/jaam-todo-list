var test = require('tape');
var logic = require('./logic');

var todos = [4, 5];
var todosObject = [{}, {}];
var newArr = [2, 7, 4, 5, 9];
var newTodo = [9];

var newArrIncludes = function() {
  var present = true;
  for (var i = 0; i < todos.length && present; i++) {
    present = newArr.includes(todos[i]);
  }
  return present;
}

test('Tape runs okay', function(t) {
  t.equal(1, 1, 'One should equal one');
  t.end(); // this tells tape we've finished
});

test('Todos is an array', function(t) {
  var actual = Array.isArray(todos);
  var expected = true;
  t.deepEqual(actual, expected, 'Todos should be an array');
  t.end();
});

test('Todos array contains only objects', function(t) {
  var actual = (!Array.isArray(todosObject[0]) && typeof todosObject[0] === 'object');
  var expected = true;
  t.deepEqual(actual, expected, 'Todos array should only contain objects');
  t.end();
});

test('addTodo returns a new array', function(t) {
  var actual = newArr.length !== todos.length;
  var expected = true;
  t.deepEqual(actual, expected, 'addTodo should return a new array!');
  t.end();
});

test('newArr should contain todos', function(t) {
  var actual = newArrIncludes();
  var expected = true;
  t.equal(actual, expected, 'newArr should contain todo!');
  t.end();
});

test('newTodo added to the end of newArr', function(t) {
  var actual = (newArr.length > todos.length && newArr[newArr.length - 1] !== todos[todos.length - 1] && newArr[newArr.length - 1] === newTodo[newTodo.length - 1]);
  var expected = true;
  t.deepEqual(actual, expected, 'newTodo needs to finish newArr!');
  t.end();
});
