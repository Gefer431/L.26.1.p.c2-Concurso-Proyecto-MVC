import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mAspirante extends Cl_mPersona {
    constructor(nombre, apellido, cedula, sexo, fechaNacimiento, puntosAcademicos, puntosPreparador, puntosDiplomas) {
        super(nombre, apellido, cedula, sexo, fechaNacimiento);
        this._puntosAcademicos = 0;
        this._puntosPreparador = 0;
        this._puntosDiplomas = 0;
        this.puntosAcademicos = puntosAcademicos;
        this.puntosPreparador = puntosPreparador;
        this.puntosDiplomas = puntosDiplomas;
    }
    get puntosAcademicos() { return this._puntosAcademicos; }
    set puntosAcademicos(v) { this._puntosAcademicos = v; }
    get puntosPreparador() { return this._puntosPreparador; }
    set puntosPreparador(v) { this._puntosPreparador = v; }
    get puntosDiplomas() { return this._puntosDiplomas; }
    set puntosDiplomas(v) { this._puntosDiplomas = v; }
    calcularEdad() {
        const hoy = new Date(2024, 5, 1);
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const diffMeses = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (diffMeses < 0 || (diffMeses === 0 && hoy.getDate() < this.fechaNacimiento.getDate()))
            edad--;
        return edad;
    }
    puntosEdad() {
        const edad = this.calcularEdad();
        if (edad < 30)
            return 10;
        if (edad < 40)
            return 5;
        return 0;
    }
    totalPuntos() {
        const total = this._puntosAcademicos + this._puntosPreparador + this._puntosDiplomas + this.puntosEdad();
        return total > 30 ? 30 : total;
    }
}
