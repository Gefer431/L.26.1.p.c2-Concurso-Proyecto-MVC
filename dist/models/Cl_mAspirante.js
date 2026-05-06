import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mAspirante extends Cl_mPersona {
    constructor(nombre, apellido, cedula, sexo, fechaNac, puntosIA, puntosPrep, puntosDiplomas) {
        super(nombre, apellido, cedula, sexo, fechaNac);
        this._puntosIA = 0;
        this._puntosPrep = 0;
        this._puntosDiplomas = 0;
        this.puntosIA = puntosIA;
        this.puntosPrep = puntosPrep;
        this.puntosDiplomas = puntosDiplomas;
    }
    get puntosIA() { return this._puntosIA; }
    set puntosIA(v) { this._puntosIA = v; }
    get puntosPrep() { return this._puntosPrep; }
    set puntosPrep(v) { this._puntosPrep = v; }
    get puntosDiplomas() { return this._puntosDiplomas; }
    set puntosDiplomas(v) { this._puntosDiplomas = v; }
    puntosEdad() {
        const e = this.edad();
        if (e < 30)
            return 10;
        if (e < 40)
            return 5;
        return 0;
    }
    puntosSubTotal() {
        return this.puntosIA + this.puntosPrep + this.puntosDiplomas + this.puntosEdad();
    }
    puntaje() {
        const total = this.puntosSubTotal();
        return total > 30 ? 30 : total;
    }
}
