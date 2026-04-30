import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mAspirante extends Cl_mPersona {
    private _puntosAcademicos: number = 0;
    private _puntosPreparador: number = 0;
    private _puntosDiplomas: number = 0;

    constructor(nombre: string, apellido: string, cedula: string, sexo: string, fechaNacimiento: Date,
                puntosAcademicos: number, puntosPreparador: number, puntosDiplomas: number) {
        super(nombre, apellido, cedula, sexo, fechaNacimiento);
        this.puntosAcademicos = puntosAcademicos;
        this.puntosPreparador = puntosPreparador;
        this.puntosDiplomas = puntosDiplomas;
    }

    get puntosAcademicos() { return this._puntosAcademicos; }
    set puntosAcademicos(v: number) { this._puntosAcademicos = v; }
    get puntosPreparador() { return this._puntosPreparador; }
    set puntosPreparador(v: number) { this._puntosPreparador = v; }
    get puntosDiplomas() { return this._puntosDiplomas; }
    set puntosDiplomas(v: number) { this._puntosDiplomas = v; }

    calcularEdad(): number {
        const hoy = new Date(2024, 5, 1);
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const diffMeses = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (diffMeses < 0 || (diffMeses === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) edad--;
        return edad;
    }

    puntosEdad(): number {
        const edad = this.calcularEdad();
        if (edad < 30) return 10;
        if (edad < 40) return 5;
        return 0;
    }

    totalPuntos(): number {
        const total = this._puntosAcademicos + this._puntosPreparador + this._puntosDiplomas + this.puntosEdad();
        return total > 30 ? 30 : total;
    }
}