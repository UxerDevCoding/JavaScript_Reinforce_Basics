// import {owners} from './data/heroes';

import superHeroes from '../data/heroes'


//getHeroesById (id)


//funciones de flecha
//find

export const getHeroesById = (id) => superHeroes.find(hero => hero.id === id);


//getHeroesByOwner 'Dc', 'Marvel'

export const getHeroesByOwner = (owner) => superHeroes.filter (hero => hero.owner === owner);




// import {getHeroesById, getHeroesByOwner} from './bases/08-imp-exp';

// console.log(getHeroesById(2)); //spiderman

// console.log(getHeroesByOwner('DC')); 
 