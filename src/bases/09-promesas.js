import {getHeroesById} from './bases/08-imp-exp'

const getHeroesByIdAsync = (id) => {
    return new Promise ((resolve, reject) => {

        setTimeout(() => {
            const hero = getHeroesById(id);

            if (hero) {
                resolve(hero)
            } else {
                reject('Heroe no existe')
            }
        }, 1000); 
    });
}

getHeroesByIdAsync(3)
    .then(h => {
        console.log(`El héroes es: ${h.name}`)
    })
    .catch(console.log)
 
 