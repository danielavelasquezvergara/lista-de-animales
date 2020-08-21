class Persona {
    constructor() {
        this.nombre_persona = document.getElementById("Persona").value 
        this.direccion = document.getElementById("Direccion").value 
        this.telefono = document.getElementById("Telefono").value 

    }
    datosMascotas(){
        return{
            animal_nombre : document.getElementById("Nombre").value ,
            animal_especie : document.getElementById("Especie").value ,
            animal_causa : document.getElementById("Causa").value 
        }
    }
}

export default Persona