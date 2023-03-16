function mostrarMensaje()
{
    console.log('click btn1:'+new Date().toLocaleTimeString());
}

//agregar un eventListenber a otroBoton2
let boton=document.getElementById('otroBoton');
boton.addEventListener("click",()=>{console.log('click btn2:'+new Date().toLocaleTimeString())});