export default class Cl_mConcurso {
    constructor() {
        this.acPuntosTotal = 0;
        this.mayorPuntos = -1;
        this.mejorAspiranteNombre = "";
        this.acEdades = 0;
        this.cntAspirantes = 0;
    }
    procesarAspirante(aspi) {
        const puntos = aspi.totalPuntos();
        const edad = aspi.calcularEdad();
        this.acPuntosTotal += puntos;
        this.acEdades += edad;
        this.cntAspirantes++;
        if (puntos > this.mayorPuntos) {
            this.mayorPuntos = puntos;
            this.mejorAspiranteNombre = `${aspi.nombre} ${aspi.apellido}`;
        }
    }
    MayorPuntos() { return this.mayorPuntos; }
    MejorAspiranteNombre() { return this.mejorAspiranteNombre; }
    TotalPuntosAcumulados() { return this.acPuntosTotal; }
    promedioEdad() {
        return this.cntAspirantes === 0 ? 0 : this.acEdades / this.cntAspirantes;
    }
}
