export default class Cl_vAspiranteBootstrap {
    constructor() {
        this.inNombre = document.getElementById("aspirante_inNombre");
        this.inApellido = document.getElementById("aspirante_inApellido");
        this.inCedula = document.getElementById("aspirante_inCedula");
        this.inSexo = document.getElementById("aspirante_inSexo");
        this.inFechaNacimiento = document.getElementById("aspirante_inFechaNac");
        this.inPuntosAcademicos = document.getElementById("aspirante_inPuntosAcad");
        this.inPuntosPreparador = document.getElementById("aspirante_inPuntosPrep");
        this.inPuntosDiplomas = document.getElementById("aspirante_inPuntosDip");
        this.btnAceptar = document.getElementById("aspirante_btAceptar");
        this.btnCancelar = document.getElementById("aspirante_btCancelar");
        this.tablaBody = document.getElementById("tabla-aspirantes-body");
        this.mensajeDiv = document.getElementById("mensaje");
        const modalElement = document.getElementById("aspirante");
        this.modal = new bootstrap.Modal(modalElement);
    }
    get nombre() { return this.inNombre.value.trim(); }
    get apellido() { return this.inApellido.value.trim(); }
    get cedula() { return this.inCedula.value.trim(); }
    get sexo() { return this.inSexo.value.trim().toUpperCase(); }
    get fechaNacimiento() { return this.inFechaNacimiento.value; }
    get puntosAcademicos() { return +this.inPuntosAcademicos.value || 0; }
    get puntosPreparador() { return +this.inPuntosPreparador.value || 0; }
    get puntosDiplomas() { return +this.inPuntosDiplomas.value || 0; }
    onAceptar(callback) { this.btnAceptar.onclick = callback; }
    onCancelar(callback) { this.btnCancelar.onclick = callback; }
    mostrar() {
        this.limpiarFormulario();
        this.modal.show();
    }
    ocultar() { this.modal.hide(); }
    limpiarFormulario() {
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
    mostrarMensaje(texto) {
        if (this.mensajeDiv)
            this.mensajeDiv.textContent = texto;
    }
    agregarAFila(nombre, apellido, puntos) {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${nombre}</td><td class="text-center">${apellido}</td><td class="text-center">${puntos}</td>`;
        this.tablaBody.appendChild(fila);
    }
}
