import axios from "axios";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
// axios.defaults.headers.common["x-api-key"] = "live_tzMloOqFHvlghw8IeHr0gJIJffKnmMbjPeff5NN5aAv49a4esXEay4dklPlrspjA";

const breedSelect = document.querySelector('.breed-select')

export function fetchBreeds() {
// Make a request for a user with a given ID
    return axios.get('/breeds')
         .then((response) => {
             
             const storedBreeds = response.data
             breedSelect.innerHTML = createmarkupSelect(storedBreeds)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}

  
function createmarkupSelect(arr) {
    return arr.map(({id, name}) =>`<option value="${id}">${name}</option>`).join('')
}

