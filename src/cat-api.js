import axios from "axios";
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
// axios.defaults.headers.common["x-api-key"] = "live_tzMloOqFHvlghw8IeHr0gJIJffKnmMbjPeff5NN5aAv49a4esXEay4dklPlrspjA";

const breedSelect = document.querySelector('.breed-select')

export function fetchBreeds() {
// Make a request for a user with a given ID
    
    return axios.get('/breeds');
   
}

export function fetchCatByBreed(breedId) {
// Make a request for a user with a given ID
    return axios.get(`/images/search?breed_ids=${breedId}`)
        
}
  


