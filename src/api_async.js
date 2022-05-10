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


const anotherFunction = async(url_api) =>{
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(url_api+data.results[0].id);
    const origin = await fetchData(character.origin.url);

    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (error) {
    console.error(error);
  }
}

console.log('Bofer');
anotherFunction(API);
console.log('After');
