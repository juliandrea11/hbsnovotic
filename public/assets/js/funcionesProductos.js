
const registrarProducto= () =>{
  
    const codigo = document.querySelector('#codigo')
    const nombre = document.querySelector('#nombre')
    const descripcion = document.querySelector('#descripcion')
    const  precio = document.querySelector('#precio')
    
    if(codigo.value.length == 0 || nombre.value.length == 0 || descripcion.value.length == 0 || precio.value.length == 0){
        //document.getElementById('respuesta').innerHTML = 'los campos no pueden estar vacios'
        alert("Todos los datos deben estar diligenciados")
    }
    else{
       // document.getElementById('respuesta').innerHTML = 'Registro exitoso'
        alert("Registro Exitoso")
    }

}

const  btnRegistrar = document.querySelector('#btRegistrar')
btnRegistrar.addEventListener('click',registrarProducto)