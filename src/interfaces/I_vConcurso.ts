export interface I_vConcurso {
    onNuevoAspirante(callback: () => void): void;
    onTerminar(callback: () => void): void;
    reportarMejor(nombre: string, puntos: number, promedioEdad: number): void;
    reportarFinal(nombre: string, puntos: number, promedioEdad: number): void;
}