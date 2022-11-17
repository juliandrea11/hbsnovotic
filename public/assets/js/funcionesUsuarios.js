registrarUsuario = () =>{
  
    let nombre = document.querySelector('#nombre') 
    let apellido = document.querySelector('#apellido') 
    let identificacion = document.querySelector('#identificacion') 
    let correo = document.querySelector('#correo') 
    let telefono = document.querySelector('#telefono') 
    let direccion = document.querySelector('#direccion')
    
    if (nombre.value.length == 0 || apellido.value.length == 0 || identificacion.value.length == 0 || correo.value.length == 0 || telefono.value.length == 0 || direccion.value.length == 0){ 
        document.getElementById('respuesta').innerHTML = 'Ningún campo puede estar vacío'
    }
    else{
        document.getElementById('respuesta').innerHTML = 'Registro exitoso'
    }
}

const btnRegistrar = document.querySelector('#btnRegistrar')
enviar.addEventListener('click',registrarUsuario)