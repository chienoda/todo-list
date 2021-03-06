var todoList = {
	todos: [],
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},
	changeTodo: function(i, todoText) {
		this.todos[i].todoText = todoText;
	},
	deleteTodo: function(i) {
		this.todos.splice(i, 1);
	},
	toggleCompleted: function(i) {
		var todo = this.todos[i];
		todo.completed = !todo.completed;
	},
	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;
		//Get number of completed todos
		// for(var i = 0; i > totalTodos; i++) {
		// 	if (this.todos[i].completed === true) {
		// 		completedTodos++
		// 	}
		// }
		// if(completedTodos ===totalTodos) {
		// 	for (var i = 0; i < totalTodos; i++) {
		// 		this.todos[i].completed = false;
		// 	}
		// } else {
		// 	for (var i = 0; i < totalTodos; i++) {
		// 		this.todos[i].completed = true;
		// 	}

		this.todos.forEach(function(item) {
			if (item.completed === true) {
				completedTodos++;
			}
		});
		
		this.todos.forEach(function(item) {
			// Case1: If everything's true, make everything false.
			if(completedTodos === totalTodos) {
				item.completed = false;
			// Case 2: Otherwise, make everything true.	
			} else {
				item.completed = true;
			}
		});
		}
	};

var handlers = {
	addTodo: function() {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = '';
		view.displayTodos();
	},
	changeTodo: function() {
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
		changeTodoPositionInput.value = '';
		changeTodoTextInput.value = '';
		view.displayTodos();

	}, 
	deleteTodo: function(i) {
		todoList.deleteTodo(i);
		view.displayTodos();

	}, 
	toggleCompleted: function() {
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
		view.displayTodos();

	}, 
	toggleAll: function () {
		todoList.toggleAll();
		view.displayTodos();
	},
};

var view = {
	displayTodos: function () {
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = '';
		// for (var i = 0; i < todoList.todos.length; i++) {
		// 	var todoLi = document.createElement('li');
		// 	var todo = todoList.todos[i];
		// 	var todoTextWithCompletion = '';

		// 	if (todo.completed === true) {
		// 		todoTextWithCompletion =  '(x) ' + todo.todoText;
		// 		} else {
		// 			todoTextWithCompletion =  '( ) ' + todo.todoText;
		// 		}
		// 	todoLi.id = i;
		// 	todoLi.textContent = todoTextWithCompletion;
		// 	todoLi.appendChild(this.createDeleteButton());
		// 	todosUl.appendChild(todoLi);
		// }

		// this refers to the view object!!!
		// forEach(callback, this) 
		todoList.todos.forEach(function(item, index) {
			var todoLi = document.createElement('li');
			var todoTextWithCompletion = '';

			if (item.completed === true) {
				todoTextWithCompletion = '(x) ' + item.todoText;
			} else {
				todoTextWithCompletion = '( ) ' + item.todoText;
			}

			todoLi.id = index;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);
		}, this);
	},
	createDeleteButton: function () {
		var deleteButton =  document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	setUpEventListeners: function () {
		var todosUl = document.querySelector('ul');

		todosUl.addEventListener('click', function(event) {
		// Get hte element that was clicked on.
			var elementClicked = event.target;

			// Check if elemetClicked is a delete button.
			if (elementClicked.className === 'deleteButton') {
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});
	}
};

view.setUpEventListeners();

	



