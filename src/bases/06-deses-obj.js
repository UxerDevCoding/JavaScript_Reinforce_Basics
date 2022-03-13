const person = {
    name: 'Tony',
    age: '45',
    codeName: 'Iron Man'
}

const {name, age, codeName, power = 'No tiene poder9'} = person;

const createHero = ( {name, age, codeName, power}) =>
     ({
        id: 11234564244,
        name,
        age,
        codeName,
        power,
    })

console.log(createHero (person));