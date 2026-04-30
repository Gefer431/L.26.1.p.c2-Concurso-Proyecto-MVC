export default class Cl_mPersona {
    private _nombre: string = "";
    private _apellido: string = "";
    private _cedula: string = "";
    private _sexo: string = "";
    private _fechaNacimiento: Date = new Date();

    constructor(nombre: string, apellido: string, cedula: string, sexo: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
    }

    get nombre(): string { return this._nombre; }
    set nombre(value: string) { this._nombre = value; }

    get apellido(): string { return this._apellido; }
    set apellido(value: string) { this._apellido = value; }

    get cedula(): string { return this._cedula; }
    set cedula(value: string) { this._cedula = value; }

    get sexo(): string { return this._sexo; }
    set sexo(value: string) { this._sexo = value; }
    
    get fechaNacimiento(): Date { return this._fechaNacimiento; }
    set fechaNacimiento(value: Date) { this._fechaNacimiento = value; }
}