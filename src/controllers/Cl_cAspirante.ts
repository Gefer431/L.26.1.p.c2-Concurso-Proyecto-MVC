import Cl_mAspirante from "../models/Cl_mAspirante.js";
import { I_vAspirante } from "../interfaces/I_vAspirante.js";

export default class Cl_cAspirante {
    private vista: I_vAspirante;
    private callback!: (aspirante: Cl_mAspirante | null) => void;

    constructor(vista: I_vAspirante) {
        this.vista = vista;
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }

    solicitarAspirante(callback: (aspirante: Cl_mAspirante | null) => void): void {
        this.callback = callback;
        this.vista.mostrar();
    }

    private btAceptarOnClick(): void {
        const aspirante = new Cl_mAspirante(
            this.vista.nombre,
            this.vista.apellido,
            this.vista.cedula,       
            this.vista.sexo,
            new Date(this.vista.fechaNacimiento),
            this.vista.puntosAcademicos,
            this.vista.puntosPreparador,
            this.vista.puntosDiplomas
        );
        this.callback(aspirante);
        this.vista.agregarAFila(aspirante.nombre, aspirante.apellido, aspirante.totalPuntos());
        this.vista.ocultar();
    }

    private btCancelarOnClick(): void {
        this.callback(null);
        this.vista.ocultar();
    }
}