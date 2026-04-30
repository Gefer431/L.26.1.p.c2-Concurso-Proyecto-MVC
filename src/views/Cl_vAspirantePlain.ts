import { I_vAspirante } from "../interfaces/I_vAspirante.js";

export default class Cl_vAspirantePlain implements I_vAspirante {
    private inNombre: HTMLInputElement;
    private inApellido: HTMLInputElement;
    private inCedula: HTMLInputElement;
    private inSexo: HTMLInputElement;
    private inFechaNacimiento: HTMLInputElement;
    private inPuntosAcademicos: HTMLInputElement;
    private inPuntosPreparador: HTMLInputElement;
    private inPuntosDiplomas: HTMLInputElement;
    private btnAceptar: HTMLButtonElement;
    private btnCancelar: HTMLButtonElement;
    private formulario: HTMLElement;
    private mensajeDiv: HTMLElement;
    private tablaBody: HTMLElement;

    constructor() {
        this.formulario = document.getElementById("form-aspirante") as HTMLElement;
        this.inNombre = document.getElementById("aspirante_inNombre") as HTMLInputElement;
        this.inApellido = document.getElementById("aspirante_inApellido") as HTMLInputElement;
        this.inCedula = document.getElementById("aspirante_inCedula") as HTMLInputElement;
        this.inSexo = document.getElementById("aspirante_inSexo") as HTMLInputElement;
        this.inFechaNacimiento = document.getElementById("aspirante_inFechaNac") as HTMLInputElement;
        this.inPuntosAcademicos = document.getElementById("aspirante_inPuntosAcad") as HTMLInputElement;
        this.inPuntosPreparador = document.getElementById("aspirante_inPuntosPrep") as HTMLInputElement;
        this.inPuntosDiplomas = document.getElementById("aspirante_inPuntosDip") as HTMLInputElement;
        this.btnAceptar = document.getElementById("aspirante_btAceptar") as HTMLButtonElement;
        this.btnCancelar = document.getElementById("aspirante_btCancelar") as HTMLButtonElement;
        this.mensajeDiv = document.getElementById("mensaje") as HTMLElement;
        this.tablaBody = document.getElementById("tabla-aspirantes-body") as HTMLElement;
        this.ocultar();
    }

    get nombre(): string { return this.inNombre.value.trim(); }
    get apellido(): string { return this.inApellido.value.trim(); }
    get cedula(): string { return this.inCedula.value.trim(); }
    get sexo(): string { return this.inSexo.value.trim().toUpperCase(); }
    get fechaNacimiento(): string { return this.inFechaNacimiento.value; }
    get puntosAcademicos(): number { return +this.inPuntosAcademicos.value || 0; }
    get puntosPreparador(): number { return +this.inPuntosPreparador.value || 0; }
    get puntosDiplomas(): number { return +this.inPuntosDiplomas.value || 0; }

    onAceptar(callback: () => void): void { this.btnAceptar.onclick = callback; }
    onCancelar(callback: () => void): void { this.btnCancelar.onclick = callback; }

    mostrar(): void {
        this.limpiarFormulario();
        this.formulario.style.display = "block";
    }
    ocultar(): void {
        this.formulario.style.display = "none";
        this.limpiarFormulario();
    }

    limpiarFormulario(): void {
        this.inNombre.value = "";
        this.inApellido.value = "";
        this.inCedula.value = "";
        this.inSexo.value = "";
        this.inFechaNacimiento.value = "";
        this.inPuntosAcademicos.value = "";
        this.inPuntosPreparador.value = "";
        this.inPuntosDiplomas.value = "";
        this.mostrarMensaje("");
    }

    mostrarMensaje(texto: string): void {
        if (this.mensajeDiv) this.mensajeDiv.textContent = texto;
    }

    agregarAFila(nombre: string, apellido: string, puntos: number): void {
        const fila = document.createElement("tr");
        fila.innerHTML = `<tr>${nombre}</td><td class="text-center">${apellido}</td><td class="text-center">${puntos}</td>`;
        this.tablaBody.appendChild(fila);
    }
}