var todos = ["item1", "item2", "item3", "item4"];

function displayTodos() {
	console.log('Mytodos: ', todos);
}

function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

function changeTodo(i, newValue) {
	todos[i] = newValue;
	displayTodos();
}

function deleteTodo(i) {
	todos.splice (i, 1);
	displayTodos();
}



