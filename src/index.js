import Mascota from './Mascota'

const Boton = document.getElementById("Boton");
Boton.addEventListener("click", () => {
    let mascota = new Mascota()

    if (mascota.nombre_persona === "" ||
        mascota.direccion === "" ||
        mascota.telefono === "" ||
        mascota.nombre_mascota === "" ||
        mascota.especie === "" ||
         mascota.causa === "") 
         {

        alert("Ingrese datos solicitados por favor")
        return false
        }

    let hora_atencion = document.getElementById("table_animal");
    hora_atencion.innerHTML = `<tr>
                    <td scope="row">${mascota.nombre_persona}</td>
                    <td scope="row">${mascota.direccion}</td>
                    <td scope="row">${mascota.telefono}</td>
                    <td scope="row">${mascota.nombre_mascota}</td>
                    <td scope="row">${mascota.especie}</td>
                    <td scope="row">${mascota.causa}</td>
                     </tr>`;

    $("#Persona").val("");
    $("#Direccion").val("");
    $("#Telefono").val("");
    $("#Nombre").val("");
    $("#Especie").val("");
    $("#Causa").val("");
})
    
