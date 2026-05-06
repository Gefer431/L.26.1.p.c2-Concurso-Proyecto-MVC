export default class Cl_mConcurso {
    constructor() {
        this.mejorNombre = "";
        this.mejorPuntaje = -1;
        this.acEdades = 0;
        this.cntAspirantes = 0;
    }
    procesarAspirante(aspi) {
        const puntos = aspi.puntaje();
        const edad = aspi.edad();
        this.acEdades += edad;
        this.cntAspirantes++;
        if (puntos > this.mejorPuntaje) {
            this.mejorPuntaje = puntos;
            this.mejorNombre = `${aspi.nombre} ${aspi.apellido}`;
        }
    }
    obtenerMejorNombre() { return this.mejorNombre; }
    obtenerMejorPuntaje() { return this.mejorPuntaje; }
    promedioEdad() {
        return this.cntAspirantes === 0 ? 0 : this.acEdades / this.cntAspirantes;
    }
}
