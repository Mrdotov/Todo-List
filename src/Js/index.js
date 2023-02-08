// import localStorag from "./module/localStorage";


const BtnAdd = document.getElementById('addTD');
const inputNode = document.getElementById('input-td');
const todosNode = document.querySelector('.js-todos')

let todos = [];

function addTodo(text) {

	const todo = {
		text,
		id: `${Math.random()}`,
		done: false
	};
	todos.push(todo);
}

function deleteTodo(id) {
	todos.forEach(todo => {
		if (todo.id === id) {
			todo.done = true;
		};
	});
};


function render() {

	let html = '';

	todos.forEach(todo => {
		if (todo.done) {
			return;
		}
		html += `
	<div >${todo.text}

	<button data-id='${todo.id}'>X</button>
	</div>
	`
	});



	todosNode.innerHTML = html;

	// if string is empty our output ERROR
};

BtnAdd.addEventListener('click', () => {
	const text = inputNode.value;
	inputNode.value = "";
	localStorage.getItem('data', text);

	if (text === '') {
		console.error('Text was not found');
	} else {
		addTodo(text);
		render();
	}

	let getStorAge = localStorage.setItem('data', JSON.stringify(text));
	getStorAge = JSON.parse(getStorAge)
})
todosNode.addEventListener('click', (event) => {

	if (event.target.tagName !== 'BUTTON') { return; }

	const id = event.target.dataset.id;

	deleteTodo(id);
	render()
})
render();

