const fs = require('fs').promises;

async function getSimpsonsById(id) {
  const simpsons = await fs.readFile('./simpsons.json', 'utf8')
  .then((fileContent) => JSON.parse(fileContent));

  const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

  if(!chosenSimpson){
    throw new Error('id not found')
  }
  resolve(chosenSimpson);
}
