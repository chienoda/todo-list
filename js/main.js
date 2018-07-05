var todoList = {
	todos: [],
	displayTodos: function() {
		console.log('Mytodos: ', this.todos);
	},

	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},

	changeTodo: function(i, newValue) {
		this.todos[i] = newValue;
		this.displayTodos();
	},

	deleteTodo(i) {
		this.todos.splice(i, 1);
		this.displayTodos();
	}

};

