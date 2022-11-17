 const correo = document.querySelector('#correo')
 const pass = document.querySelector('#password')

if(correo === '' || pass === ''){
    alert('Debe llenar todos los campos')
}else{
    window.location.href = "/listarRoles";
}