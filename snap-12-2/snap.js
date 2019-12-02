// Map this array of text to the DOM (Hint: Each array element must appear in its own html tag in the browser)
const names = ['Bob', 'Jim', Matt', 'Mary', 'Suzy', ' Sarah'];

// Get the element
const app = document.querySelector('#app');

// Create markup
app.innerHTML = '<h1>' + names.map(function (name) {
	return '<h1>' + name + '</h1>>'; // transforms array content
});

