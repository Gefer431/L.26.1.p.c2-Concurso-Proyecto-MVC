import Cl_mAspirante from "../models/Cl_mAspirante.js";
export default class Cl_cAspirante {
    constructor(vista) {
        this.vista = vista;
        this.vista.onAceptar(() => this.aceptar());
        this.vista.onCancelar(() => this.cancelar());
    }
    solicitarAspirante(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    aceptar() {
        if (!this.vista.nombre || !this.vista.apellido || !this.vista.cedula || !this.vista.sexo || !this.vista.fechaNacimiento) {
            this.vista.mostrarMensaje("Complete todos los campos.");
            return;
        }
        if (this.vista.sexo !== "M" && this.vista.sexo !== "F") {
            this.vista.mostrarMensaje("Sexo debe ser M o F.");
            return;
        }
        const fecha = new Date(this.vista.fechaNacimiento);
        if (isNaN(fecha.getTime())) {
            this.vista.mostrarMensaje("Fecha inválida.");
            return;
        }
        const aspirante = new Cl_mAspirante(this.vista.nombre, this.vista.apellido, this.vista.cedula, this.vista.sexo, fecha, this.vista.puntosIA, this.vista.puntosPrep, this.vista.puntosDiplomas);
        this.callback(aspirante);
        this.vista.agregarAFila(aspirante.nombre, aspirante.apellido, aspirante.cedula, aspirante.sexo, aspirante.fechaNac.toISOString().split('T')[0], aspirante.edad(), aspirante.puntosIA, aspirante.puntosPrep, aspirante.puntosDiplomas, aspirante.puntosEdad(), aspirante.puntosSubTotal(), aspirante.puntaje());
        this.vista.ocultar();
    }
    cancelar() {
        this.callback(null);
        this.vista.ocultar();
    }
}
