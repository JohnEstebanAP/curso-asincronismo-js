// *********************** clase 4 ***********************
//callbacks
//es una funcion que al crearla le pasamos como parametro una segunda funcion

function suma(num1, num2){
  return num1 + num2;
}

function calc(num1, num2, callback){

  return callback(num1, num2);

}

console.log(calc(6, 2, suma));

function date (callback){
  console.log(new Date);

  //con settimeout se detiene
  //la ejecucion de esta funcion por 3 segundos
  setTimeout(function(){
    let date = new Date;
    callback(date)
  }, 3000)
}

function printDate(dateNow){
  console.log(dateNow);
}

date(printDate);



