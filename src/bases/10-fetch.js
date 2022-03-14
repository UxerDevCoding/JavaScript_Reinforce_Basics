const apiKey = 'mzNLgaOtkdRvR2Fm2A1fOfLnqX0ow4xg';

// https://api.giphy.com/v1/gifs/random?api_key=mzNLgaOtkdRvR2Fm2A1fOfLnqX0ow4xg


fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then(({data}) =>{
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    
    });
    