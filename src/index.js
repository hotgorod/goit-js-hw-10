
import axios from "axios";
import { fetchBreeds } from "./cat-api";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common["x-api-key"] = "live_tzMloOqFHvlghw8IeHr0gJIJffKnmMbjPeff5NN5aAv49a4esXEay4dklPlrspjA";
const breedSelect = document.querySelector('.breed-select')
// breedSelect.addEventListener('click', onSelect);

// function onSelect() {
//     function fetchCatByBreed2()
// }

fetchBreeds()

function fetchCatByBreed2(breedId) {
// Make a request for a user with a given ID
    axios.get(`/images/search?breed_ids=${breedId}`)
        .then(resp => {
        console.log(resp)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}
   
function fetchCatByBreed(breedId) {
    // fetch('https://api.thecatapi.com/v1/images/search?breed_ids=beng&api_key=live_tzMloOqFHvlghw8IeHr0gJIJffKnmMbjPeff5NN5aAv49a4esXEay4dklPlrspjA')
    const BASE_URL = `https://api.thecatapi.com/v1`;
    const api_key = "live_tzMloOqFHvlghw8IeHr0gJIJffKnmMbjPeff5NN5aAv49a4esXEay4dklPlrspjA";
    fetch(`${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${api_key}`)
        .then(resp => {
            console.log(resp.json())
            // if (!resp.ok) {
            //     throw new Error(resp.statusText)
            // }

            return resp.json()
    })
}
// fetchCatByBreed('beng');
// fetchCatByBreed2('bezxcvzvng');
