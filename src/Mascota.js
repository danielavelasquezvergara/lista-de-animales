import Persona from './Persona'

const persona1 = new Persona();
class Mascota extends Persona {
    constructor() {
        super()
        this.nombre_mascota = persona1.datosMascotas().animal_nombre
        this.especie = persona1.datosMascotas().animal_especie
        this.causa = persona1.datosMascotas().animal_causa
    }
}

export default Mascota