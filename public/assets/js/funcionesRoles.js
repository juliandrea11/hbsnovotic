
const registrarRol= () =>{
  
    const rol = document.querySelector('#rol')
    const descripcion = document.querySelector('#descripcion')
    
    
    if(rol.value.length == 0 || descripcion.value.length == 0 ){
        //document.getElementById('respuesta').innerHTML = 'los campos no pueden estar vacios'
        alert("Todos los datos deben estar diligenciados")
    }
    else{
       // document.getElementById('respuesta').innerHTML = 'Registro exitoso'
        alert("Registro Exitoso")
    }

}

const  btnRegistrar = document.querySelector('#btRegistrar')
btnRegistrar.addEventListener('click',registrarRol)