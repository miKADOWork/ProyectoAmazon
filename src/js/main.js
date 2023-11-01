"use strict";
// Cojemos la barra lateral que querremos mostrar y su contenedor
const barra_lateral = document.getElementsByClassName("barra-lateral")[0];
const barra_closer_area = document.getElementsByClassName("zona-cierre-barra-lateral")[0];
const contenedor_barra_lateral = document.getElementsByClassName("container-barra-lateral")[0];
// Llamamos al boton que activa la barra:
const boton_despleaga_barra = document.getElementsByClassName("desplegador-barra-lateral")[0];
// añadimos el evento al contenedor para poder cerrar la barra lateral clicando encima
barra_closer_area.addEventListener("click", () => {
    contenedor_barra_lateral.style.display = "none";
});
// añadimos un evento al boton de desplegar la barra:
boton_despleaga_barra.addEventListener("click", () => {
    if (contenedor_barra_lateral.style.display == "none" || contenedor_barra_lateral.style.display == "") {
        barra_lateral.style.display = "block";
        barra_closer_area.style.display = "block";
        contenedor_barra_lateral.style.display = "block";
    }
    else { // si la barra se ve la ocultamos 
        barra_lateral.style.display = "none";
        contenedor_barra_lateral.style.display = "none";
        barra_closer_area.style.display = "none";
    }
});
// Llamamos a las cavezeras de la experiència
const exeriencias_trabajos = document.getElementsByClassName("desplega-texto");
const explicacion_experiencias = document.getElementsByClassName("experiencia");
const experiencias_json = {
    "etra-bonal": 0,
    "gli": 1,
    "uab": 2,
    "uoc": 3
};
let valor;
for (const experiencia of exeriencias_trabajos) {
    experiencia.addEventListener("click", () => {
        valor = experiencia.getAttribute("trabajo");
        if (experiencia.style.backgroundColor == "transparent" || experiencia.style.backgroundColor == "") {
            experiencia.style.backgroundColor = "black";
            experiencia.style.color = "white";
            console.log(explicacion_experiencias[experiencias_json[valor]].style.display);
            explicacion_experiencias[experiencias_json[valor]].style.display = "block";
            console.log(explicacion_experiencias[experiencias_json[valor]].style.display);
        }
        else {
            experiencia.style.backgroundColor = "transparent";
            experiencia.style.color = "black";
            explicacion_experiencias[experiencias_json[valor]].style.display = "none";
        }
    });
}
