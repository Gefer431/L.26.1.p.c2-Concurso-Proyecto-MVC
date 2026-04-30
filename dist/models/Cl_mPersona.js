export default class Cl_mPersona {
    constructor(nombre, apellido, cedula, sexo, fechaNacimiento) {
        this._nombre = "";
        this._apellido = "";
        this._cedula = "";
        this._sexo = "";
        this._fechaNacimiento = new Date();
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
    }
    get nombre() { return this._nombre; }
    set nombre(value) { this._nombre = value; }
    get apellido() { return this._apellido; }
    set apellido(value) { this._apellido = value; }
    get cedula() { return this._cedula; }
    set cedula(value) { this._cedula = value; }
    get sexo() { return this._sexo; }
    set sexo(value) { this._sexo = value; }
    get fechaNacimiento() { return this._fechaNacimiento; }
    set fechaNacimiento(value) { this._fechaNacimiento = value; }
}
