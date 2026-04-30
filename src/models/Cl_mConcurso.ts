import Cl_mAspirante from "./Cl_mAspirante.js";

export default class Cl_mConcurso {
    private acPuntosTotal: number = 0;
    private mayorPuntos: number = -1;
    private mejorAspiranteNombre: string = "";
    private acEdades: number = 0;
    private cntAspirantes: number = 0;

    procesarAspirante(aspi: Cl_mAspirante): void {
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

    MayorPuntos(): number { return this.mayorPuntos; }
    MejorAspiranteNombre(): string { return this.mejorAspiranteNombre; }
    TotalPuntosAcumulados(): number { return this.acPuntosTotal; }
    promedioEdad(): number {
        return this.cntAspirantes === 0 ? 0 : this.acEdades / this.cntAspirantes;
    }
}