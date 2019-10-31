import React from 'react'
import CodeSampler from './codeSampler'

function getCatById(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        id, // implicitly sets name to id
        name: 'Mr. Bigglesworth',
        owner: 'Dr. Evil',
        bread: 'Hairless sphynx',
        age: 15,
        family: [
          {
            id: 23,
            name: 'Charles',
            bread: 'Hairless sphynx',
            age: 21,
            relation: 'father',
          },
          {
            id: 34,
            name: 'Buttons',
            bread: 'Hairless sphynx',
            age: 18,
            relation: 'mother',
          },
        ], // Note that family is also a field in the animal details.
      })
    }, 1)
  })
}

// Defaults to get.
function getAnimalDetails(type = 'cat') {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        type, // implicitly sets name to type
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        suborder: 'Feliformia',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'F.catus',
      })
    }, 1)
  })
}

const func1 = async () => {
  try {
    const catResult = await getCatById(99) // async/await ES 2017
    const catDetails = await getAnimalDetails()

    // Destructoring object
    const { name, weight = 0, owner, bread, family: relatives } = catResult

    relatives[0].name = 'test'

    console.log(catResult.family[0])

    // Destructuring array
    const [oldestRelative, secondOldestRelative] = relatives.sort((a, b) => b.age - a.age)

    const summary = `${name} is ${owner}'s ${bread}.`

    return {
      ...catResult,
      ...catDetails,
      relatives,
      summary,
      oldestRelative,
      secondOldestRelative,
      weight,
    }
  } catch {
    // No longer are required to have the (error) after catch. ES 2019
    console.log('failed')
  }
}

export default () => (
  <CodeSampler funcs={[func1]} title={'Object Restructuring - 2018'}></CodeSampler>
)
