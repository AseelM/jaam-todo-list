var test = require('tape');
var logic = require('./logic');

var todos = [];
var todosObject = [{}, {}];

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
