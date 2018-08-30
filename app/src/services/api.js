const URL = 'http://localhost:3000/api';
const STRUCTURES_URL = `${URL}/structures`;
const ELEMENTS_URL = `${URL}/elements`;


export default {
  getStructures() {
    return fetch(STRUCTURES_URL, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  getStructure(id) {
    return fetch(`${STRUCTURES_URL}/${id}`)
      .then(response => response.json());
  },
  addStructure(structure) {
    return fetch(STRUCTURES_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(structure)
    })
      .then(response => response.json());
  },

  updateStructure(structure) {
    return fetch(`${STRUCTURES_URL}/${structure.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(structure)
    })
      .then(response => response.json());
  },
  deleteStructure(id) {
    return fetch(`${STRUCTURES_URL}/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json());
  },


  getElements() {
    return fetch(ELEMENTS_URL, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  }

};

