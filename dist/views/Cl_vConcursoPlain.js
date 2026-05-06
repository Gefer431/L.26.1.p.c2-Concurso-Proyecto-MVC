export default class Cl_vConcursoPlain {
    constructor() {
        this.btnNuevo = document.getElementById("concurso_btNuevoAspirante");
        this.lblMejor = document.getElementById("concurso_lblMejor");
        this.lblFinal = document.getElementById("concurso_lblFinal");
        this.lblPromEdad = document.getElementById("concurso_lblPromEdad");
        this.lblPromFinal = document.getElementById("concurso_lblPromFinal");
    }
    onNuevoAspirante(callback) {
        this.btnNuevo.onclick = callback;
    }
    reportarMejor(nombre, puntos, promedioEdad) {
        if (!nombre) {
            this.lblMejor.textContent = "Aún no hay aspirantes.";
            this.lblPromEdad.textContent = "0.0";
        }
        else {
            this.lblMejor.textContent = `${nombre} (${puntos} puntos)`;
            this.lblPromEdad.textContent = promedioEdad.toFixed(2);
        }
    }
    reportarFinal(nombre, puntos, promedioEdad) {
        if (!nombre) {
            this.lblFinal.textContent = "No se registró ningún aspirante.";
            this.lblPromFinal.textContent = "0.0";
        }
        else {
            this.lblFinal.textContent = `Contratado: ${nombre} con ${puntos} puntos.`;
            this.lblPromFinal.textContent = promedioEdad.toFixed(2);
        }
    }
}
