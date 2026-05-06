import { I_vAspirante } from "../interfaces/I_vAspirante.js";
declare var bootstrap: any;

export default class Cl_vAspiranteBootstrap implements I_vAspirante {
    private inNombre: HTMLInputElement;
    private inApellido: HTMLInputElement;
    private inCedula: HTMLInputElement;
    private inSexo: HTMLInputElement;
    private inFechaNac: HTMLInputElement;
    private inPuntosIA: HTMLInputElement;
    private inPuntosPrep: HTMLInputElement;
    private inPuntosDip: HTMLInputElement;
    private btnAceptar: HTMLButtonElement;
    private btnCancelar: HTMLButtonElement;
    private modal: any;
    private tablaBody: HTMLElement;
    private mensajeDiv: HTMLElement;

    constructor() {
        this.inNombre = document.getElementById("aspirante_inNombre") as HTMLInputElement;
        this.inApellido = document.getElementById("aspirante_inApellido") as HTMLInputElement;
        this.inCedula = document.getElementById("aspirante_inCedula") as HTMLInputElement;
        this.inSexo = document.getElementById("aspirante_inSexo") as HTMLInputElement;
        this.inFechaNac = document.getElementById("aspirante_inFechaNac") as HTMLInputElement;
        this.inPuntosIA = document.getElementById("aspirante_inPuntosIA") as HTMLInputElement;
        this.inPuntosPrep = document.getElementById("aspirante_inPuntosPrep") as HTMLInputElement;
        this.inPuntosDip = document.getElementById("aspirante_inPuntosDip") as HTMLInputElement;
        this.btnAceptar = document.getElementById("aspirante_btAceptar") as HTMLButtonElement;
        this.btnCancelar = document.getElementById("aspirante_btCancelar") as HTMLButtonElement;
        this.tablaBody = document.getElementById("tabla-aspirantes-body") as HTMLElement;
        this.mensajeDiv = document.getElementById("mensaje") as HTMLElement;
        const modalElem = document.getElementById("aspirante");
        this.modal = new bootstrap.Modal(modalElem);
    }

    get nombre(): string { return this.inNombre.value.trim(); }
    get apellido(): string { return this.inApellido.value.trim(); }
    get cedula(): string { return this.inCedula.value.trim(); }
    get sexo(): string { return this.inSexo.value.trim().toUpperCase(); }
    get fechaNacimiento(): string { return this.inFechaNac.value; }
    get puntosIA(): number { return +this.inPuntosIA.value || 0; }
    get puntosPrep(): number { return +this.inPuntosPrep.value || 0; }
    get puntosDiplomas(): number { return +this.inPuntosDip.value || 0; }

    onAceptar(callback: () => void): void { this.btnAceptar.onclick = callback; }
    onCancelar(callback: () => void): void { this.btnCancelar.onclick = callback; }

    mostrar(): void {
        this.limpiarFormulario();
        this.modal.show();
    }
    ocultar(): void { this.modal.hide(); }

    limpiarFormulario(): void {
        this.inNombre.value = "";
        this.inApellido.value = "";
        this.inCedula.value = "";
        this.inSexo.value = "";
        this.inFechaNac.value = "";
        this.inPuntosIA.value = "";
        this.inPuntosPrep.value = "";
        this.inPuntosDip.value = "";
        this.mostrarMensaje("");
    }

    mostrarMensaje(texto: string): void {
        if (this.mensajeDiv) this.mensajeDiv.textContent = texto;
    }

    agregarAFila(
        nombre: string, apellido: string, cedula: string, sexo: string,
        fechaNac: string, edad: number,
        puntosIA: number, puntosPrep: number, puntosDiplomas: number,
        puntosEdad: number, puntosSubTotal: number, puntaje: number
    ): void {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${cedula}</td>
            <td>${sexo}</td>
            <td>${fechaNac}</td>
            <td>${edad}</td>
            <td>${puntosIA}</td>
            <td>${puntosPrep}</td>
            <td>${puntosDiplomas}</td>
            <td>${puntosEdad}</td>
            <td>${puntosSubTotal}</td>
            <td>${puntaje}</td>
        `;
        this.tablaBody.appendChild(fila);
    }
}