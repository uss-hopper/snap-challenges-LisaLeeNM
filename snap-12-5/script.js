import axios from 'axios';

const BASE_URL = 'https://dog.ceo/dog-api/';

const getDogBreeds = async () => {
	try {
		const res = await axios.get(`${BASE_URL}/dogBreeds`);

		const dogBreeds = res.data;

		console.log(`GET: Here's the list of dog breeds`, dogBreeds);

		return dogBreeds;
	} catch (e) {
		console.error(e);
	}
};

const createLi = item => {
	const li = document.createElement('li');

	li.appendChild(document.createTextNode(item.title));

	return li;
};

const addDogBreedsToDOM = dogBreeds => {
	const target = document.querySelector('target');

	if (Array.isArray(dogBreeds) && dogBreeds.length > 0) {
		dogBreeds.map(dogBreeds => {
			target.appendChild(createLi(dogBreeds));
		});
	} else if (dogBreeds) {
		target.appendChild(createLi(dogBreeds));
	}
};

const main = async () => {
	addDogBreedsToDOM(await getDogBreeds());
};

main();