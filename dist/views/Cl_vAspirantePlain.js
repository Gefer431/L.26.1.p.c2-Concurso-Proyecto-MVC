export default class Cl_vAspirantePlain {
    constructor() {
        this.formulario = document.getElementById("form-aspirante");
        this.inNombre = document.getElementById("aspirante_inNombre");
        this.inApellido = document.getElementById("aspirante_inApellido");
        this.inCedula = document.getElementById("aspirante_inCedula");
        this.inSexo = document.getElementById("aspirante_inSexo");
        this.inFechaNac = document.getElementById("aspirante_inFechaNac");
        this.inPuntosIA = document.getElementById("aspirante_inPuntosIA");
        this.inPuntosPrep = document.getElementById("aspirante_inPuntosPrep");
        this.inPuntosDip = document.getElementById("aspirante_inPuntosDip");
        this.btnAceptar = document.getElementById("aspirante_btAceptar");
        this.btnCancelar = document.getElementById("aspirante_btCancelar");
        this.mensajeDiv = document.getElementById("mensaje");
        this.tablaBody = document.getElementById("tabla-aspirantes-body");
        this.ocultar();
    }
    get nombre() { return this.inNombre.value.trim(); }
    get apellido() { return this.inApellido.value.trim(); }
    get cedula() { return this.inCedula.value.trim(); }
    get sexo() { return this.inSexo.value.trim().toUpperCase(); }
    get fechaNacimiento() { return this.inFechaNac.value; }
    get puntosIA() { return +this.inPuntosIA.value || 0; }
    get puntosPrep() { return +this.inPuntosPrep.value || 0; }
    get puntosDiplomas() { return +this.inPuntosDip.value || 0; }
    onAceptar(callback) { this.btnAceptar.onclick = callback; }
    onCancelar(callback) { this.btnCancelar.onclick = callback; }
    mostrar() {
        this.limpiarFormulario();
        this.formulario.style.display = "block";
    }
    ocultar() {
        this.formulario.style.display = "none";
        this.limpiarFormulario();
    }
    limpiarFormulario() {
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
    mostrarMensaje(texto) {
        if (this.mensajeDiv)
            this.mensajeDiv.textContent = texto;
    }
    agregarAFila(nombre, apellido, cedula, sexo, fechaNac, edad, puntosIA, puntosPrep, puntosDiplomas, puntosEdad, puntosSubTotal, puntaje) {
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
