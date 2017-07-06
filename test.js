var test = require('tape');
var logic = require('./logic');
var todosObject = [{}, {}];
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
    id: 2,
    description: 'sprinkle coriander',
    done: true,
  }
]

var unmarkedTodo = [{
    id: 0,
    description: 'add chilli',
    done: false,
  },
  {
    id: 1,
    description: 'onion',
    done: true,
  }
]

var markedTodo = [{
    id: 0,
    description: 'add chilli',
    done: true,
  },
  {
    id: 1,
    description: 'onion',
    done: true,
  }
]

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

// run addTodo function for singleTodo which has no id to check if the function is working
test('addTodo function gives an id to the newTodo', function(t) {
  var actual = logic.addTodo([], singleTodo)[0].hasOwnProperty("id");
  var expected = true;
  t.equal(actual, expected, 'newTodo should have an id key');
  t.end();
});

// run addTodo function to see that newTodo is added to the end of todos
test('newTodo is added to end of todos', function(t) {
  var actual = logic.addTodo(todoArray, singleTodo);
  var expected = newArray;
  t.deepEqual(actual, expected, 'newTodo should be added to end of todos in new array');
  t.end();
})

// run addTodo function to check the input argument todos are unchanged
test('input arguments are unchanged', function(t) {
  var expected = [];
  logic.addTodo(expected, singleTodo);
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

// deleteTodo tests

test('deleteTodo should remove object at index "iDToDelete" from array "todos"', function(t) {
  
  var actual = logic.deleteTodo([{id: 0},{id: 1},{id: 2},{id: 3}], 3);
  var expected = [{id: 0},{id: 1},{id: 2}];

  t.deepEqual(actual, expected, 'deleteTodo should remove object at index "iDToDelete" from array "todos"');
  t.end();
});

test('Todos is left unchanged by the function', function(t) {
  var originalTodos = [{
    0: 0
  }, {
    1: 1
  }];
  var actual = logic.deleteTodo(originalTodos, 0);
  var expected = [{
    0: 0
  }, {
    1: 1
  }];
  t.deepEqual(originalTodos, expected, 'Todos should be left unchangd by the function');
  t.end();
});

// markTodo tests

// run markTodo function to toggle done value from true or false
test('markTodo toggles done value', function(t) {
  var actual = logic.markTodo(unmarkedTodo, 0);
  var expected = markedTodo;
  t.deepEqual(actual, expected, 'markTodo should toggle done value');
  t.end();
})

// markTodo function should leave all elements but the marked one unchanged
test('Todos is left unchanged by the function', function(t) {
  var markedO = [{
      id: 0,
      description: 'add chilli',
      done: false,
    },
    {
      id: 1,
      description: 'onion',
      done: true,
    }
  ]
  var actual = logic.markTodo(markedO, 0);
  var expected = [{
      id: 0,
      description: 'add chilli',
      done: false,
    },
    {
      id: 1,
      description: 'onion',
      done: true,
    }
  ]
  t.deepEqual(markedO, expected, 'Todos should be left unchangd by the function');
  t.end();
});
