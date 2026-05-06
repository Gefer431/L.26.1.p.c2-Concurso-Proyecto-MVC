import Cl_mAspirante from "./Cl_mAspirante.js";

export default class Cl_mConcurso {
    private mejorNombre: string = "";
    private mejorPuntaje: number = -1;
    private acEdades: number = 0;
    private cntAspirantes: number = 0;

    procesarAspirante(aspi: Cl_mAspirante): void {
        const puntos = aspi.puntaje();  
        const edad = aspi.edad();
        this.acEdades += edad;
        this.cntAspirantes++;

        if (puntos > this.mejorPuntaje) {
            this.mejorPuntaje = puntos;
            this.mejorNombre = `${aspi.nombre} ${aspi.apellido}`;
        }
    }

    obtenerMejorNombre(): string { return this.mejorNombre; }
    obtenerMejorPuntaje(): number { return this.mejorPuntaje; }
    promedioEdad(): number {
        return this.cntAspirantes === 0 ? 0 : this.acEdades / this.cntAspirantes;
    }
}