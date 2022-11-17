const express = require('express')
const app= express()
const hbs = require('hbs')
const port= process.env.PORT

app.use(express.static('public'));

hbs.registerPartials(__dirname + '/public/views/partials',function(err){});
app.set('view engine','hbs');
app.set('views', __dirname +'/public/views');



//---------------------------index-------------------
app.get('/index',(req,res)=>{
   // res.send('Hola Mundo')
   res.render('index',{
    nombre:'index'
   })
})

//--------------------------login-------------------------
app.get('/loginNovo',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('loginNovo',{
   nombre:'login'
  })
})

app.get('/restablecer',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('restablecer',{
   nombre:'restablecer'
  })
})

app.get('/newPass',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('newPass',{
   nombre:'contraseña'
  })
})

//--------------------Roles-----------------
app.get('/listarRoles',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('listarRoles',{
   nombre:'listar Roles'
  })
})

app.get('/crearRol',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('crearRol',{
   nombre:'Crear Rol'
  })
})

//-----------------clientes------------------

app.get('/listarClientes',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('listarClientes',{
   nombre:'Crear cliente'
  })
})

app.get('/crearCliente',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('crearCliente',{
   nombre:'Crear Cliente'
  })
})

app.get('/editarCliente',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('editarCliente',{
   nombre:'editar  Cliente'
  })
})

//--------------Productos------------
app.get('/listarProductos',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('listarProductos',{
   nombre:'listar productos'
  })
})

app.get('/crearProducto',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('crearProducto',{
   nombre:'Crear producto'
  })
})

app.get('/editarProducto',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('editarProducto',{
   nombre:'Editar prodcuto'
  })
})

//-----------------------usuarios-------------
app.get('/listarUsuarios',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('listarUsuarios',{
   nombre:'listar Usuarios'
  })
})

app.get('/crearUsuario',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('crearUsuario',{
   nombre:'Crear usuario'
  })
})

app.get('/editarUsuario',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('editarUsuario',{
   nombre:'editar usuario'
  })
})

//--------------------ventas-----------------
app.get('/listarVentas',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('listarVentas',{
   nombre:'listar ventas'
  })
})

app.get('/crearVenta',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('crearVenta',{
   nombre:'Crear venta'
  })
})

app.get('/editarVenta',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('editarVenta',{
   nombre:'Editar venta'
  })
})

//----------------------cartera--------------

app.get('/listarCartera',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('listarCartera',{
   nombre:'listar cartera'
  })
})

app.get('/editarCartera',(req,res)=>{
  // res.send('Hola Mundo')
  res.render('editarCartera',{
   nombre:'Editar Cartera'
  })
})











//app.get('/registrarPedido',(req,res)=>{

  // res.sendFile(__dirname +'/public/views/registrarPedido.html');
//})

app.listen(port, () =>{
    console.log(`Escuchando por el puerto ${port}`)

})




































































