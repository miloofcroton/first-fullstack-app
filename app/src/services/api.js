const URL = 'http://localhost:3000/api';
const CITIES_URL = `${URL}/cities`;
const STATES_URL = `${URL}/states`;


export default {
  getCities() {
    return fetch(CITIES_URL, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  getCity(id) {
    return fetch(`${CITIES_URL}/${id}`)
      .then(response => response.json());
  },
  addCity(city) {
    return fetch(CITIES_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(city)
    })
      .then(response => response.json());
  },

  updateCity(city) {
    return fetch(`${CITIES_URL}/${city.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(city)
    })
      .then(response => response.json());
  },
  deleteCity(id) {
    return fetch(`${CITIES_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json());
  },


  getStates() {
    return fetch(STATES_URL, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  }

};

