/*Funcion Cargar y Mostrar datos*/
$(document).ready(function(){    
                  
        /*Obtener datos almacenados*/
        // var nombre = localStorage.getItem("ReservaConfirmada");
        /*Mostrar datos almacenados*/      
        let nombre= 123;
        document.getElementById("turnoSacado").innerHTML = nombre;
});

// guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
// guardarLocal("reservaConfirmada", JSON.stringify(datosConf));