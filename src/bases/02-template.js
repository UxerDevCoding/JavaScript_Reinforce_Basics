const nombre = 'Omar';
const apellido = 'Hevia';

const nombreCompleto = `${ nombre } ${ apellido }`;

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);