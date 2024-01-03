const barraDeProgreso = document.getElementById("barra-de-progreso");
const circulos = document.querySelectorAll(".circulo");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const botones = document.querySelectorAll(".btn")
let progresoActual = -1;

next.addEventListener("click", function(){
    if(progresoActual < circulos.length) {
        progresoActual++;
        actualizarProgreso();
    }
})

prev.addEventListener("click", function (){
    if(progresoActual <= circulos.length) {
        progresoActual--;
        actualizarProgreso();
    }
})

function actualizarProgreso(){
    let botones = document.querySelectorAll(".btn");
    const avanceDelPorcentaje = 100 / (circulos.length - 1);
    let anchoBarra = progresoActual * avanceDelPorcentaje;
    const maximoAnchoBarra = 100;
    anchoBarra = Math.min(anchoBarra, maximoAnchoBarra);
    const minimoAnchoBarra = -1;
    anchoBarra = Math.max(anchoBarra, minimoAnchoBarra)
    barraDeProgreso.querySelector(".barra").style.width = `${anchoBarra}%`;

    circulos.forEach((circulo, index) => {
        const porcentajeCirculo = index * avanceDelPorcentaje;
        if(porcentajeCirculo <= anchoBarra){
            circulo.classList.add("active");
        } else {
            circulo.classList.remove("active");
        }
    });
}
