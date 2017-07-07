var test = require('tape');
var logic = require('./logic');
var singleTodo = {
  description: 'sprinkle coriander',
  done: true,
}

// general working tests

test('Tape runs okay', function(t) {
  t.equal(1, 1, 'One should equal one');
  t.end(); // this tells tape we've finished
});


test('Todos array contains only objects', function(t) {
  var todosObject = [{}, {}];
  var actual = (!Array.isArray(todosObject[0]) && typeof todosObject[0] === 'object');
  var expected = true;
  t.deepEqual(actual, expected, 'Todos array should only contain objects');
  t.end();
});

// addTodo tests

test('addTodo function gives an id to the newTodo', function(t) {
  var actual = logic.addTodo([], singleTodo)[0].hasOwnProperty("id");
  var expected = true;
  t.equal(actual, expected, 'newTodo should have an id key');
  t.end();
});

test('newTodo is added to end of todos', function(t) {
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
  var actual = logic.addTodo(todoArray, singleTodo);
  var expected = newArray;
  t.deepEqual(actual, expected, 'newTodo should be added to end of todos in new array');
  t.end();
})

test('input arguments are unchanged', function(t) {
  var expected = [];
  logic.addTodo(expected, singleTodo);
  t.deepEqual([], expected, 'input arguments should not change');
  t.end();
})

test('addTodo returns a new array', function(t) {
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
  t.deepEqual(originalTodos, expected, 'Todos should be left unchanged by the function');
  t.end();
});

// markTodo tests

test('markTodo toggles done value', function(t) {
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
  var actual = logic.markTodo(unmarkedTodo, 0);
  var expected = markedTodo;
  t.deepEqual(actual, expected, 'markTodo should toggle done value');
  t.end();
})

test('Todos is left unchanged by the function', function(t) {
  var actual = [{
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
  t.deepEqual(actual, expected, 'Todos should be left unchanged by the function');
  t.end();
});
