// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom no
  //de where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');
  var colors = ["#EEE1F2", "#695ABC", "#D6840A", "#4C4037", "#FFF4FE"];
  var colorCounter = 0;
  var state = [
    // { id: -3, description: 'first todo' },
    // { id: -2, description: 'second todo' },
    // { id: -1, description: 'third todo' },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');

        // this adds a mark checkbox
    var markButtonNode = document.createElement('input');
    markButtonNode.type = "checkbox";
    todoNode.append(markButtonNode);
    markButtonNode.checked = todo.done;
    if (markButtonNode.checked) {
      todoNode.style.backgroundColor = "#006400";
    } else {
      todoNode.style.backgroundColor = "#FC913A";
    }
    markButtonNode.addEventListener('click', function(event) {
      event.preventDefault();
      var newState = todoFunctions.markTodo(state, todo.id);
          update(newState);
      console.log(newState);
    });
    // add span holding description
    var span = document.createElement('span');
    span.classList.add("list__description");
    span.textContent = todo.description;
    if (markButtonNode.checked) {
    span.style.textDecoration = "line-through";
    span.style.fontStyle = "italic";
    span.style.color = "white";
  } else {
    span.style.textDecoration = "none";
    span.style.fontStyle = "normal";
    span.style.color = "black";
  }
    todoNode.appendChild(span);

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.textContent = "Delete";
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);
    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var toDoName = document.getElementsByName('description')[0].value;

      var newTodoItem = {
        description: toDoName,
        done: false
      }

      // event.target ....
      console.log(toDoName);
      // hint: todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state, newTodoItem);
      update(newState);
      console.log(newState);
      colorCounter++;
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');
    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
