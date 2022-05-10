let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = url_api => {
  return new Promise((resolve, reject) =>{
    const xhttp = new XMLHttpRequest();

    //xhttp.open( "Metodo" , "url de la api", "es un metodo asincrono");
    xhttp.open('GET', url_api, true);
    //para ecucahr el elemento y si susede un cambio ejecutmos alguna funcion
    xhttp.onreadystatechange =  (() => {
      if(xhttp.readyState === 4){

        //if con esprecion ternaria
        (xhttp.status == 200)
          ? resolve(JSON.parse(xhttp.responseText))
          : reject( new Eror('Error', url_api))
      }
    });
    xhttp.send();
  });
}

//api que utilizaremos
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
  .then(data => {
    console.log(data.info.count)
    return fetchData(API + data.results[0].id)
  })
  .then(data => {
    console.log(data.name)
    return fetchData(data.origin.url)
  })
  .then(data =>{
    console.log(data.dimension)
  })
  .catch(err => console.error('Error en la promesa: ', err));

