const datosConf = {
email: '',
nombre: '',
servicio: '',
fecha: '',
hora: ''
}

function llenarInput(){
email = document.querySelector("#exampleInputEmail1").value
nombre = document.querySelector("#exampleInputPassword1").value
servicio = document.querySelector("#servicio").value
fecha = document.querySelector("#fechaReg").value
hora = document.querySelector("#hora").value

//Llenar el objeto 
datosConf.email = email;
datosConf.nombre = nombre;
datosConf.servicio = servicio;
datosConf.fecha = fecha;
datosConf.hora = hora;
}

function tomarDatos(params) {
   llenarInput();
   let confirmacion = document.getElementById("confirmacion")
   confirmacion.innerHTML = `<section id ="prod" >
                            <div class="container mt-4">
                            <div class="card p-3"><h2> ¡Muchas gracias! Tu turno quedó reservado </h2>
                                <p> <b>Mail:</b> ${email}</p>
                                <p> <b>Nombre: </b>${nombre}</p>
                                <p> <b>Servicio: </b>${servicio}</p>
                                <p> <b>Fecha y hora:</b> ${fecha} ${hora}</p>
                                <button class="btn" onclick="location.href='index.html'">Realizar otra reserva</button>
                                <button class="btn" onclick="location.href='Misturnos.html'">Consultar mis turnos</button>
                            </div>
                            </div>
                            </section>`;

                            const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
                            guardarLocal("reservaConfirmada", JSON.stringify(datosConf));
                        }


//validación de formulario
let miFormulario = document.getElementById("myForm")
myForm.addEventListener("submit", validarFormulario);
function validarFormulario(e){
	e.preventDefault()
     let error = document.getElementById("error")
     error.innerHTML= "";
     error.style.color = "red";
	if(document.getElementById("servicio").value === "seleccion" || document.getElementById("exampleInputEmail1").value === "" || document.getElementById("exampleInputPassword1").value === "" || document.getElementById("fechaReg").value === "" || document.getElementById("hora").value === ""){
        error.innerHTML = "Todos los campos son obligatorios</br>";
        return;
    }else {

tomarDatos()
}

if(error.innerHTML == ""){
		myForm.style.display = "none"
	}
} 


