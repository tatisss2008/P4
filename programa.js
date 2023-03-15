//Crear los EventListener

let botonAlmacenar = document.getElementById("btnAlmacenar");

botonAlmacenar.addEventListener('click', ()=>{
    //Almacenar un dato en sessionStorage
    //Se borra si se cierra la sesion/ navegador
    sessionStorage.setItem('nombre','AnaM');
    sessionStorage.setItem('apellido','DB');

    //Se mantiene durante todas las sesion del navegador
    localStorage.setItem('nombre','Anna');
});

let btnBorrar=document.getElementById("btnBorrar");
btnBorrar.addEventListener('click', function(){
    sessionStorage.clear();
    localStorage.clear();
})

//Recorrer el sessionStorage y el localStorage
//Mostrando las variables como una fila en la tabla del DOM

function construirFilas(){
    
    //crear un arreglo con las fuentes de datos
    let fuentes = [localStorage, sessionStorage];

    for (let k=0; k<fuentes.length; k++)
    {
        let miFuente=fuentes[k];
        //for (let i=0; i<window.sessionStorage.length; i++)
        for (let i=0; i<miFuente.length; i++)
        {
            let cuerpoTable = document.getElementById("cuerpoTabla");
            let fila=document.createElement("tr");

            let celda=document.createElement("td");
            //crear un nodo de texto
            //let texto = document.createTextNode(sessionStorage.key(i));
            let texto = document.createTextNode(miFuente.key(i));
            celda.appendChild(texto);
            fila.appendChild(celda);

            celda = document.createElement("td");
            //let valor= sessionStorage.getItem(sessionStorage.key(i));
            let valor= miFuente.getItem(miFuente.key(i));
            texto=document.createTextNode(valor);
            celda.appendChild(texto);
            fila.appendChild(celda);

            cuerpoTable.appendChild(fila);

        }
    }

} 

construirFilas();