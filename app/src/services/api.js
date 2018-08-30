
export default {
  getStructures() {
    return fetch('http://localhost:3000/api/structures', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  getStructure(id) {
    return fetch(`http://localhost:3000/api/structures/${id}`, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  addStructure(structure) {
    return fetch('http://localhost:3000/api/structures', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(structure)
    })
      .then(response => response.json());
  },
  updateStructure(structure, id) {
    return fetch(`http://localhost:3000/api/structure/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(structure)
    })
      .then(response => response.json());
  },
  deleteStructure(id) {
    return fetch(`http://localhost:3000/api/structures/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json());
  }
};

