import Cl_mConcurso from "../models/Cl_mConcurso.js";
import { I_vConcurso } from "../interfaces/I_vConcurso.js";
import { I_vAspirante } from "../interfaces/I_vAspirante.js";
import Cl_cAspirante from "./Cl_cAspirante.js";
import Cl_mAspirante from "../models/Cl_mAspirante.js";

export default class Cl_cConcurso {
    private modelo: Cl_mConcurso;
    private vistaPrincipal: I_vConcurso;
    private controladorAspirante: Cl_cAspirante;

    constructor(vistaConcurso: I_vConcurso, vistaAspirante: I_vAspirante) {
        this.modelo = new Cl_mConcurso();
        this.vistaPrincipal = vistaConcurso;
        this.controladorAspirante = new Cl_cAspirante(vistaAspirante);

        this.vistaPrincipal.onNuevoAspirante(() => this.procesarAspirante());
        this.vistaPrincipal.onTerminar(() => this.terminarConcurso());

       
        this.cargarDatosIniciales();
        this.actualizarVista();
    }

     procesarAspirante(): void {
        this.controladorAspirante.solicitarAspirante((aspirante) => {
            if (aspirante !== null) {
                this.modelo.procesarAspirante(aspirante);
                this.actualizarVista();
            }
        });
    }

    terminarConcurso(): void {
        this.vistaPrincipal.reportarFinal(
            this.modelo.MejorAspiranteNombre(),
            this.modelo.MayorPuntos(),
            this.modelo.promedioEdad()
        );
    }

     actualizarVista(): void {
        this.vistaPrincipal.reportarMejor(
            this.modelo.MejorAspiranteNombre(),
            this.modelo.MayorPuntos(),
            this.modelo.promedioEdad()
        );
    }

     cargarDatosIniciales(): void {
    const datos = [
        ["Ana", "García", "111", "F", "1990-03-15", 15, 8, 5],
        ["Luis", "Pérez", "222", "M", "2000-07-22", 10, 5, 3],
        ["María", "López", "333", "F", "1985-11-02", 20, 10, 8],
        ["Carlos", "Sánchez", "444", "M", "1995-01-10", 8, 4, 2],
        ["Laura", "Ramírez", "555", "F", "1980-06-18", 18, 12, 6],
        ["Pedro", "Gómez", "666", "M", "2005-12-05", 12, 6, 4],
        ["Sofía", "Torres", "777", "F", "1998-09-25", 5, 3, 1],
        ["Javier", "Castro", "888", "M", "1975-04-12", 25, 15, 10],
        ["Valentina", "Ortiz", "999", "F", "2002-08-30", 7, 4, 2],
        ["Diego", "Ruiz", "000", "M", "1992-12-14", 22, 13, 9],
        ["Camila", "Méndez", "123", "F", "1988-07-19", 3, 2, 1],
        ["Andrés", "Herrera", "456", "M", "1996-02-28", 14, 9, 5]
    ];

    for (const d of datos) {
        const aspirante = new Cl_mAspirante(
            d[0] as string,         
            d[1] as string,         
            d[2] as string,          
            d[3] as string,          
            new Date(d[4] as string), 
            d[5] as number,          
            d[6] as number,         
            d[7] as number          
        );
        this.modelo.procesarAspirante(aspirante);
      
        this.controladorAspirante["vista"].agregarAFila(aspirante.nombre, aspirante.apellido, aspirante.totalPuntos());
    }
}
}