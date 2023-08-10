import SlimSelect from 'slim-select'
import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import 'slim-select/dist/slimselect.css';
import { Report } from 'notiflix/build/notiflix-report-aio';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common["x-api-key"] = "live_tzMloOqFHvlghw8IeHr0gJIJffKnmMbjPeff5NN5aAv49a4esXEay4dklPlrspjA";


const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');


breedSelect.addEventListener('change', onSelect);
const catInfo = document.querySelector('.cat-info')

// create function to choose exact breed of cat
function onSelect(event) {
    catInfo.innerHTML = '';
    loader.style.display = 'block'
    fetchCatByBreed(event.currentTarget.value).then(resp => {
        
        catInfo.innerHTML = createMarkupCatCard(resp.data)
                        
    })
        .catch(function (error) {
        onError()
        
        console.log(error);
    })
    .finally(function () {
        loader.style.display = 'none' // always executed
    });
}

// setTimeout to show select when all list of breeds came
setTimeout(() => {
    breedSelect.style.display = 'block';
    
},0)

// create function to get list of all breeds
fetchBreeds()
    .then((response) => {
        const storedBreeds = response.data
        breedSelect.innerHTML = createMarkupSelect(storedBreeds)
        slim();
        })
    .catch(function (error) {
        onError()
        // handle error
        console.log(error);
    })
    .finally(function () {
        loader.style.display = 'none'
    });

// create markup for breed list
function createMarkupSelect(arr) {
    return arr.map(({id, name}) =>`<option value="${id}">${name}</option>`).join('')
}

// create murkup for one breed
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
// create new beautiful select element
function slim() {
    new SlimSelect({
        select: '#breed-select'
    })
}

function onError() {
    Report.failure(
        'Okay',
        'Oops! Something went wrong! Try reloading the page!',
    );
}