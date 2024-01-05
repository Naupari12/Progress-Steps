//=============================
//         VARIABLES
//=============================
//Declaro variables que tienen como valor elementos HTML. 
const barraDeProgreso = document.getElementById("barra-de-progreso");
const circulos = document.querySelectorAll(".circulo");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const botones = document.querySelectorAll(".btn")

//Esta variable tiene como valor el "procentaje" que usare en una funcion para que se llene mi barra.
let progresoActual = 0;

//=============================
//     EVENTOS ESCUCHADORES
//=============================

//Evento para el boton con la id next.
//Que al hacer click este ejecuta la funcion.
next.addEventListener("click", function(){
    //esta funcion que esta dentro del evento entra a una condicional
    //En la cual si 0 es menor que la longitud de la constante circulo(4) 
    if(progresoActual < circulos.length) {
        //si es True, la variable pA ira sumando 1 por 1 por cada iteracion segun la longitud de la
        //constante (circulos). 
        progresoActual++;
        //una vez termine de iterar la totalidad de la longitud ejecuta la funcion--- 
        actualizarProgreso();
    }
})

prev.addEventListener("click", function (){
    //condicional en la que 
    if(progresoActual <= circulos.length) {
        progresoActual--;
        actualizarProgreso();
    }
})

//=============================
//          FUNCION
//=============================

function actualizarProgreso(){
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
