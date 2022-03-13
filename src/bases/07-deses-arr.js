const characters = ['Goku', 'Vegeta','Trunks'];

const [g, v, t, goten = 'No tiene valor'] = characters;


// const returnArray = (arr) => {
//     return [arr[0], arr[1]]
// }

// const returnArray = ([letters, numbers]) => {
//     return [letters, numbers]
// }

// const [letters, numbers] = returnArray(['XYZ', 985]);

const returnArray = () => {
    return ['ABC', 123]
}

const [letters, numbers] = returnArray();

console.log(letters, numbers);