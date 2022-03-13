// function saludar(nombre) {
//     return `Hola ${nombre}`;
// }

// const saludar = (nombre) => {
//     return `Hola ${nombre}`;
// }

const saludar = (nombre = `Peter`) => `Hola ${nombre}`;

const nombre = 'Tony';

console.log(saludar(nombre));

const getUser = () =>({
    uid: 'ABC123 ',
    userName: 'Tony001'
}) 

const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}];


const existe = heroes.some((heroe)=> heroe.id === 1); //some
const {name} = heroes.find((heroe)=> heroe.id === 1);

console.log(name);
