// ********************clase 7 ***************
  // Promesas (promise)

//es 6

const somethingWillHappen = () => {
  return new Promise((resolve, reject) =>{
    if(true){
      resolve('Exito!');
    } else{
      reject('Error!');
    }

  })
};


somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err));


const somethingWillHappen2 = () =>{
  return new Promise((resolve, reject) => {
    if(true){
      setTimeout(()=>{
        resolve('True')
      }, 2000)
    }else{
      const error = new Error('Whooop!');
      reject(error);
    }
  });
}

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.log(err));



//correr barias promesas encadenadas al mismo tiempo
Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => console.log('Array of result', response))
  .catch(err => console.error(err));
