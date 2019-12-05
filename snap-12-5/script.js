// import axios from 'axios';
//
// const BASE_URL = 'https://dog.ceo/dog-api/';
//
// const getDogBreeds = async () => {
// 	try {
// 		const res = await axios.get(`${BASE_URL}/dogBreeds`);
//
// 		const dogBreeds = res.data;
//
// 		console.log(`GET: Here's the list of dog breeds`, dogBreeds);
//
// 		return dogBreeds;
// 	} catch (e) {
// 		console.error(e);
// 	}
// };
//
// const createLi = item => {
// 	const li = document.createElement('li');
//
// 	li.appendChild(document.createTextNode(item.title));
//
// 	return li;
// };
//
// const addDogBreedsToDOM = dogBreeds => {
// 	const target = document.querySelector('target');
//
// 	if (Array.isArray(dogBreeds) && dogBreeds.length > 0) {
// 		dogBreeds.map(dogBreeds => {
// 			target.appendChild(createLi(dogBreeds));
// 		});
// 	} else if (dogBreeds) {
// 		target.appendChild(createLi(dogBreeds));
// 	}
// };
//
// const main = async () => {
// 	addDogBreedsToDOM(await getDogBreeds());
// };
//
// main();
//
// // Attempt #2
//
// const axios = require('axios')
//
// const getDogBreeds = async () => {
// 	try {
// 		return await axios.get('https://dog.ceo/api/breeds/list/all')
// 	} catch (error) {
// 		console.error(error)
// 	}
// }


// Paul's
const onPageLoad = () => {
	axios.get('https://dog.ceo/api/breeds/list/all').then(({data}) => {
		let breeds = data.message;
		let cards = ''; // in case dog API breaks
		for (let breed in breeds) {
			cards = cards + '<div>' + breed + '</div>'
		}
		let html = document.getElementById("target");
		html.innerHTML = cards;
	});
};