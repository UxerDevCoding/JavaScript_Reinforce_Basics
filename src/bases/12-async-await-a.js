const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('Tenemos un valor en la promesa');
            reject('Reject en mi promesa');
        })
    })
};

const medirTiempoAsync = async() => {

    try {
        const respuesta = await miPromesa();
        return 'fin de medir tiempo async';
        
    } catch (error) {
        return 'catch en medirTiempoAsync';
        // throw 'Error en medirTiempoAsync';
    }
};

medirTiempoAsync()
    .then(valor => console.log('Then exitoso', valor))
    .catch(err => console.log('error:', err))