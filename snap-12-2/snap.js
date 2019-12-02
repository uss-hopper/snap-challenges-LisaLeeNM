// Map this array of text to the DOM (Hint: Each array element must appear in its own html tag in the browser)
const names = ['Bob', 'Jim', Matt', 'Mary', 'Suzy', ' Sarah'];

// First attempt
// Get the element
const app = document.querySelector('#app');

// Create markup
app.innerHTML = '<h1>' + names.map(function (name) {
	return '<h1>' + name + '</h1>>'; // transforms array content
});

console.log(app);


// Second attempt
import React from "react";
import ReactDOM from "react-dom";

const names = ['Bob', 'Jim', Matt', 'Mary', 'Suzy', ' Sarah'];
const Nameslist = () => (
	<div>
		{names.map(name => <h1 key={name}> {name} </h1>)}
	</div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Nameslist />, rootElement);