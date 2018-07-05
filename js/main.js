var todoList = {
	todos: ["item1", "item2", "item3", "item4"],
	displayTodos: function() {
		console.log('Mytodos: ', this.todos);
	},

	addTodo: function(todo) {
		this.todos.push(todo);
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

