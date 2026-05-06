import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mAspirante extends Cl_mPersona {
    private _puntosIA: number = 0;
    private _puntosPrep: number = 0;
    private _puntosDiplomas: number = 0;

    constructor(
        nombre: string, apellido: string, cedula: string, sexo: string, fechaNac: Date,
        puntosIA: number, puntosPrep: number, puntosDiplomas: number
    ) {
        super(nombre, apellido, cedula, sexo, fechaNac);
        this.puntosIA = puntosIA;
        this.puntosPrep = puntosPrep;
        this.puntosDiplomas = puntosDiplomas;
    }

    get puntosIA(): number { return this._puntosIA; }
    set puntosIA(v: number) { this._puntosIA = v; }
    get puntosPrep(): number { return this._puntosPrep; }
    set puntosPrep(v: number) { this._puntosPrep = v; }
    get puntosDiplomas(): number { return this._puntosDiplomas; }
    set puntosDiplomas(v: number) { this._puntosDiplomas = v; }

    puntosEdad(): number {
        const e = this.edad();
        if (e < 30) return 10;
        if (e < 40) return 5;
        return 0;
    }

    puntosSubTotal(): number {
        return this.puntosIA + this.puntosPrep + this.puntosDiplomas + this.puntosEdad();
    }

    puntaje(): number {
        const total = this.puntosSubTotal();
        return total > 30 ? 30 : total;
    }
}