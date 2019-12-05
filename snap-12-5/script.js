import axios from 'axios';

const BASE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js';

const getDogBreeds = async () => {
	try {
		const res = await axios.get('${BASE_URL}/dogBreeds');

		const dogBreeds = res.data;

		console.log(`GET: Here's the list of dog breeds`, dogBreeds);

		return dogBreeds;
	} catch (e) {
		console.error(e);
	}
};

const