export default class Cl_vConcursoBootstrap {
    constructor() {
        this.vista = document.getElementById("app-Bootstrap");
        this.btNuevoAspirante = document.getElementById("concurso_btNuevoAspirante");
        this.btTerminar = document.getElementById("concurso_btTerminar");
        this.lblMejor = document.getElementById("concurso_lblMejor");
        this.lblFinal = document.getElementById("concurso_lblFinal");
        this.lblPromEdad = document.getElementById("concurso_lblPromEdad");
        this.lblPromFinal = document.getElementById("concurso_lblPromFinal");
    }
    onNuevoAspirante(callback) {
        this.btNuevoAspirante.onclick = callback;
    }
    onTerminar(callback) {
        this.btTerminar.onclick = callback;
    }
    reportarMejor(nombre, puntos, promedioEdad) {
        if (!nombre) {
            this.lblMejor.textContent = "Aún no hay aspirantes.";
            this.lblPromEdad.textContent = "0.0";
        }
        else {
            this.lblMejor.textContent = `Mejor aspirante hasta ahora: ${nombre} (${puntos} puntos)`;
            this.lblPromEdad.textContent = promedioEdad.toFixed(2);
        }
    }
    reportarFinal(nombre, puntos, promedioEdad) {
        if (!nombre) {
            this.lblFinal.textContent = "No se registró ningún aspirante.";
            this.lblPromFinal.textContent = "0.0";
        }
        else {
            this.lblFinal.textContent = `Concurso finalizado. Contratado: ${nombre} con ${puntos} puntos.`;
            this.lblPromFinal.textContent = promedioEdad.toFixed(2);
        }
    }
}
