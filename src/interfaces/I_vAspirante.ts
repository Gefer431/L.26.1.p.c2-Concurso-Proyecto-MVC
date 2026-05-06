export interface I_vAspirante {
    get nombre(): string;
    get apellido(): string;
    get cedula(): string;
    get sexo(): string;
    get fechaNacimiento(): string;
    get puntosIA(): number;
    get puntosPrep(): number;
    get puntosDiplomas(): number;

    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
    mostrar(): void;
    ocultar(): void;
    limpiarFormulario(): void;
    mostrarMensaje(texto: string): void;

    
    agregarAFila(
        nombre: string, apellido: string, cedula: string, sexo: string,
        fechaNac: string, edad: number,
        puntosIA: number, puntosPrep: number, puntosDiplomas: number,
        puntosEdad: number, puntosSubTotal: number, puntaje: number
    ): void;
}