import Cl_mAspirante from "../models/Cl_mAspirante.js";
export default class Cl_cAspirante {
    constructor(vista) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }
    solicitarAspirante(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btAceptarOnClick() {
        const aspirante = new Cl_mAspirante(this.vista.nombre, this.vista.apellido, this.vista.cedula, this.vista.sexo, new Date(this.vista.fechaNacimiento), this.vista.puntosAcademicos, this.vista.puntosPreparador, this.vista.puntosDiplomas);
        this.callback(aspirante);
        this.vista.agregarAFila(aspirante.nombre, aspirante.apellido, aspirante.totalPuntos());
        this.vista.ocultar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
}
