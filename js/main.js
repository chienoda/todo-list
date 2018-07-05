var todoList = {
	todos: [],
	displayTodos: function() {
		if (this.todos.length === 0) {
			console.log('Your todo list is empty.')
		} else {
			console.log('Mytodos:' );
			for (var i = 0; i<this.todos.length; i++) {
			console.log( this.todos[i].todoText);
		    }
		}
	},
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
	},
	changeTodo: function(i, todoText) {
		this.todos[i].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(i) {
		this.todos.splice(i, 1);
		this.displayTodos();
	},
	toggleCompleted: function(i) {
		var todo = this.todos[i];
		todo.completed = !todo.completed;
		this.displayTodos();
	} 
};

