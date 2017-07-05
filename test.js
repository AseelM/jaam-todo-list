var test = require('tape');
var logic = require('./logic');
var todosObject = [{}, {}];

// general working tests

test('Tape runs okay', function(t) {
  t.equal(1, 1, 'One should equal one');
  t.end(); // this tells tape we've finished
});

test('Todos is an array', function(t) {
  var actual = Array.isArray(todoArray);
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

// addTodo tests

var todoArray = [{
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'squeeze lemon',
    done: false,
  }
]

var singleTodo = {
  description: 'sprinkle coriander',
  done: true,
}

var newArray = [{
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'squeeze lemon',
    done: false,
  },
  {
    description: 'sprinkle coriander',
    done: true,
  }
]

var newArrayIncludes = function() {
  var present = true;
  for (var i = 0; i < todoArray.length && present; i++) {
    present = newArray.includes(todoArray[i]);
  }
  return present;
}

// run addTodo function for singleTodo which has no id to check if the function is working
test('addTodo function gives an id to the newTodo', function(t) {
  var actual = logic.addTodo([], singleTodo)[0].hasOwnProperty("id");
  var expected = true;
  t.equal(actual, expected, 'newTodo should have an id key');
  t.end();
});

// run addTodo function to check the input argument todos are unchanged
test('input arguments are unchanged', function(t) {
  var expected = [];
  logic.addTodo([], singleTodo);
  t.deepEqual([], expected, 'input arguments should not change');
  t.end();
})


// run addTodo function to return a new array
test('addTodo returns a new array', function(t) {
  var actual = logic.addTodo(todoArray, singleTodo).length !== todoArray.length;
  var expected = true;
  t.equal(actual, expected, 'addTodo should return a new array');
  t.end();
})

// run addTodo function to see that newTodo is added to the end of todos
test('newTodo is added to end of todos', function(t) {
  var actual = logic.addTodo([], singleTodo);
  var expected = [singleTodo];
  t.deepEqual(actual, expected, 'newTodo should be added to end of todos in new array');
  t.end();
})

// test('new array contains existing todos', function(t) {
//   var actual = logic.newArrayIncludes();
//   var expected = true;
//   t.deepEqual(actual, expected, 'new array should contain existing todos');
//   t.end();
// })

/* Old variables and tests

var newArr = [2, 7, 4, 5, 9];
var newTodo = [9];

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
  var actual = logic.addTodo(todos, newTodo); // var actual = (newArr.length > todos.length && newArr[newArr.length - 1] !== todos[todos.length - 1] && newArr[newArr.length - 1] === newTodo[newTodo.length - 1]);
  var expected = [4, 5, 9];
  // var expected = true;
  t.deepEqual(actual, expected, 'newTodo needs to finish newArr!');
  t.end();
});

*/
