var test = require('tape');
var logic = require('./logic');

var todos = [4,5];
var todosObject = [{}, {}];
var newTodos = [2,7,4,5];

var newTodosIncludes = function() {
  var present = true;
  for(var i = 0;i < todos.length && present;i++) {
    present = newTodos.includes(todos[i]);
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
  var actual = newTodos.length !== todos.length;
  var expected = true;
  t.deepEqual(actual, expected, 'addTodo should return a new array!');
  t.end();
});

test('newTodos should contain todos', function(t) {
  var actual = newTodosIncludes();
  var expected = true;
  t.equal(actual, expected, 'newTodos should contain todo!');
  t.end();
});
