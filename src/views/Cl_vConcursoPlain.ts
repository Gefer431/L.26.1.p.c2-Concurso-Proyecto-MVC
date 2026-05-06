import { I_vConcurso } from "../interfaces/I_vConcurso.js";

export default class Cl_vConcursoPlain implements I_vConcurso {
    private btnNuevo: HTMLButtonElement;
    private lblMejor: HTMLElement;
    private lblFinal: HTMLElement;
    private lblPromEdad: HTMLElement;
    private lblPromFinal: HTMLElement;

    constructor() {
        this.btnNuevo = document.getElementById("concurso_btNuevoAspirante") as HTMLButtonElement;
        this.lblMejor = document.getElementById("concurso_lblMejor") as HTMLElement;
        this.lblFinal = document.getElementById("concurso_lblFinal") as HTMLElement;
        this.lblPromEdad = document.getElementById("concurso_lblPromEdad") as HTMLElement;
        this.lblPromFinal = document.getElementById("concurso_lblPromFinal") as HTMLElement;
    }

    onNuevoAspirante(callback: () => void): void {
        this.btnNuevo.onclick = callback;
    }

    reportarMejor(nombre: string, puntos: number, promedioEdad: number): void {
        if (!nombre) {
            this.lblMejor.textContent = "Aún no hay aspirantes.";
            this.lblPromEdad.textContent = "0.0";
        } else {
            this.lblMejor.textContent = `${nombre} (${puntos} puntos)`;
            this.lblPromEdad.textContent = promedioEdad.toFixed(2);
        }
    }

    reportarFinal(nombre: string, puntos: number, promedioEdad: number): void {
        if (!nombre) {
            this.lblFinal.textContent = "No se registró ningún aspirante.";
            this.lblPromFinal.textContent = "0.0";
        } else {
            this.lblFinal.textContent = `Contratado: ${nombre} con ${puntos} puntos.`;
            this.lblPromFinal.textContent = promedioEdad.toFixed(2);
        }
    }
}