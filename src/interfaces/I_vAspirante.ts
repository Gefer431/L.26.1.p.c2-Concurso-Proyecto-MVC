export interface I_vAspirante {
    get nombre(): string;
    get apellido(): string;
    get cedula(): string;
    get sexo(): string;
    get fechaNacimiento(): string;
    get puntosAcademicos(): number;
    get puntosPreparador(): number;
    get puntosDiplomas(): number;

    onAceptar(callback: () => void): void;
    onCancelar(callback: () => void): void;
    mostrar(): void;
    ocultar(): void;
    limpiarFormulario(): void;
    mostrarMensaje(texto: string): void;
    agregarAFila(nombre: string, apellido: string, puntos: number): void;
}