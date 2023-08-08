
import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common["x-api-key"] = "live_tzMloOqFHvlghw8IeHr0gJIJffKnmMbjPeff5NN5aAv49a4esXEay4dklPlrspjA";
const breedSelect = document.querySelector('.breed-select')
breedSelect.addEventListener('change', onSelect);
const catInfo = document.querySelector('.cat-info')

function onSelect(event) {
    
    fetchCatByBreed(event.currentTarget.value).then(resp => {
        catInfo.innerHTML = createMarkupCatCard(resp.data)
        
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}

fetchBreeds()
    .then((response) => {
             
             const storedBreeds = response.data
             breedSelect.innerHTML = createMarkupSelect(storedBreeds)
        })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

function createMarkupSelect(arr) {
    return arr.map(({id, name}) =>`<option value="${id}">${name}</option>`).join('')
}

function createMarkupCatCard(arr) {
    const url = arr[0].url
    const description = arr[0].breeds[0].description
    return `<img
        src="${url}"
        alt=""
        width="480px"
      />
      <p>
        ${description}
      </p>`
    
}
   
// function fetchCatByBreed(breedId) {
//     // fetch('https://api.thecatapi.com/v1/images/search?breed_ids=beng&api_key=live_tzMloOqFHvlghw8IeHr0gJIJffKnmMbjPeff5NN5aAv49a4esXEay4dklPlrspjA')
//     const BASE_URL = `https://api.thecatapi.com/v1`;
//     const api_key = "live_tzMloOqFHvlghw8IeHr0gJIJffKnmMbjPeff5NN5aAv49a4esXEay4dklPlrspjA";
//     fetch(`${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${api_key}`)
//         .then(resp => {
//             console.log(resp.json())
//             // if (!resp.ok) {
//             //     throw new Error(resp.statusText)
//             // }

//             return resp.json()
//     })
// }
// fetchCatByBreed('beng');
// fetchCatByBreed2('bezxcvzvng');
