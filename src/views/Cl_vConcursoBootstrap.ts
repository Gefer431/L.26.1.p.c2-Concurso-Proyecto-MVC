import { I_vConcurso } from "../interfaces/I_vConcurso.js";

export default class Cl_vConcursoBootstrap implements I_vConcurso {
    btNuevoAspirante: HTMLButtonElement;
    btTerminar: HTMLButtonElement;
    lblMejor: HTMLElement;
    lblFinal: HTMLElement;
    lblPromEdad: HTMLElement;   
    lblPromFinal: HTMLElement;  
    vista: HTMLElement;

    constructor() {
        this.vista = document.getElementById("app-Bootstrap") as HTMLElement;
        this.btNuevoAspirante = document.getElementById("concurso_btNuevoAspirante") as HTMLButtonElement;
        this.btTerminar = document.getElementById("concurso_btTerminar") as HTMLButtonElement;
        this.lblMejor = document.getElementById("concurso_lblMejor") as HTMLElement;
        this.lblFinal = document.getElementById("concurso_lblFinal") as HTMLElement;
        this.lblPromEdad = document.getElementById("concurso_lblPromEdad") as HTMLElement;
        this.lblPromFinal = document.getElementById("concurso_lblPromFinal") as HTMLElement;
    }

    onNuevoAspirante(callback: () => void): void {
        this.btNuevoAspirante.onclick = callback;
    }

    onTerminar(callback: () => void): void {
        this.btTerminar.onclick = callback;
    }

    reportarMejor(nombre: string, puntos: number, promedioEdad: number): void {
        if (!nombre) {
            this.lblMejor.textContent = "Aún no hay aspirantes.";
            this.lblPromEdad.textContent = "0.0";
        } else {
            this.lblMejor.textContent = `Mejor aspirante hasta ahora: ${nombre} (${puntos} puntos)`;
            this.lblPromEdad.textContent = promedioEdad.toFixed(2);
        }
    }

    reportarFinal(nombre: string, puntos: number, promedioEdad: number): void {
        if (!nombre) {
            this.lblFinal.textContent = "No se registró ningún aspirante.";
            this.lblPromFinal.textContent = "0.0";
        } else {
            this.lblFinal.textContent = `Concurso finalizado. Contratado: ${nombre} con ${puntos} puntos.`;
            this.lblPromFinal.textContent = promedioEdad.toFixed(2);
        }
    }
}