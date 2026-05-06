import Cl_mConcurso from "../models/Cl_mConcurso.js";
import Cl_cAspirante from "./Cl_cAspirante.js";
import Cl_mAspirante from "../models/Cl_mAspirante.js";
export default class Cl_cConcurso {
    constructor(vistaConcurso, vistaAspirante) {
        this.modelo = new Cl_mConcurso();
        this.vistaPrincipal = vistaConcurso;
        this.controladorAspirante = new Cl_cAspirante(vistaAspirante);
        this.vistaPrincipal.onNuevoAspirante(() => this.procesarAspirante());
        this.cargarDatosIniciales();
        this.actualizarVista();
    }
    procesarAspirante() {
        this.controladorAspirante.solicitarAspirante((aspirante) => {
            if (aspirante !== null) {
                this.modelo.procesarAspirante(aspirante);
                this.actualizarVista();
            }
        });
    }
    actualizarVista() {
        const mejorNombre = this.modelo.obtenerMejorNombre();
        const mejorPuntos = this.modelo.obtenerMejorPuntaje();
        const promedio = this.modelo.promedioEdad();
        this.vistaPrincipal.reportarMejor(mejorNombre, mejorPuntos, promedio);
        this.vistaPrincipal.reportarFinal(mejorNombre, mejorPuntos, promedio);
    }
    cargarDatosIniciales() {
        const datos = [
            ["Ana", "Gil", "8888", "F", "2001-06-15", 11, 5, 0],
            ["Mery", "Paz", "6666", "F", "1999-07-25", 4, 0, 7],
            ["Juan", "Sanz", "9999", "M", "1980-09-20", 7, 12, 0],
            ["Paty", "Ortiz", "3333", "F", "1970-05-14", 18, 0, 5],
            ["Liz", "Ramos", "2222", "F", "2005-01-03", 17, 8, 5],
            ["Raul", "Mendez", "5555", "M", "1995-10-11", 7, 15, 1],
            ["Tony", "Flores", "7777", "M", "1999-08-07", 5, 6, 7],
            ["Gaby", "Lopez", "1111", "F", "1966-07-19", 17, 3, 6]
        ];
        for (const d of datos) {
            const aspirante = new Cl_mAspirante(d[0], d[1], d[2], d[3], new Date(d[4]), d[5], d[6], d[7]);
            this.modelo.procesarAspirante(aspirante);
            this.controladorAspirante["vista"].agregarAFila(aspirante.nombre, aspirante.apellido, aspirante.cedula, aspirante.sexo, aspirante.fechaNac.toISOString().split('T')[0], aspirante.edad(), aspirante.puntosIA, aspirante.puntosPrep, aspirante.puntosDiplomas, aspirante.puntosEdad(), aspirante.puntosSubTotal(), aspirante.puntaje());
        }
    }
}
