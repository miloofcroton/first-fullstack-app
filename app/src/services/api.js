
export default {
  getStructures() {
    return fetch('http://localhost:3000/api/structures', {
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
  }
};

