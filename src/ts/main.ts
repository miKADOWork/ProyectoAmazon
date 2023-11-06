
// Cojemos la barra lateral que querremos mostrar y su contenedor
const barra_lateral = document.getElementsByClassName("barra-lateral")[0] as HTMLDivElement;
const barra_closer_area = document.getElementsByClassName("zona-cierre-barra-lateral")[0] as HTMLDialogElement;
const contenedor_barra_lateral = document.getElementsByClassName("container-barra-lateral")[0] as HTMLDivElement;

// Llamamos al boton que activa la barra:
const boton_despleaga_barra = document.getElementsByClassName("desplegador-barra-lateral")[0] as HTMLButtonElement;

// añadimos el evento al contenedor para poder cerrar la barra lateral clicando encima
barra_closer_area.addEventListener("click", ()=>{
    contenedor_barra_lateral.style.display = "none";
});

// añadimos un evento al boton de desplegar la barra:
boton_despleaga_barra.addEventListener("click", ()=>{
    if (contenedor_barra_lateral.style.display == "none" || contenedor_barra_lateral.style.display == ""){
        barra_lateral.style.display = "block";
        barra_closer_area.style.display = "block";
        contenedor_barra_lateral.style.display = "block";
    }
    else{ // si la barra se ve la ocultamos 
        barra_lateral.style.display = "none";
        contenedor_barra_lateral.style.display = "none";
        barra_closer_area.style.display = "none";
    }
});


// Llamamos a las cavezeras de la experiència
const exeriencias_trabajos = document.getElementsByClassName("desplega-texto") as HTMLCollectionOf<HTMLParagraphElement>;
const explicacion_experiencias = document.getElementsByClassName("experiencia") as HTMLCollectionOf<HTMLParagraphElement>;
const experiencias_json: Record<string, number> = {
    "etra-bonal": 0,
    "gli": 1,
    "uab": 2,
    "uoc": 3
};

let valor:string;
for (const experiencia of exeriencias_trabajos) {
    experiencia.addEventListener("click", ()=>{
        valor = experiencia.getAttribute("trabajo") as string;
        if(experiencia.style.backgroundColor == "transparent" || experiencia.style.backgroundColor == ""){
            experiencia.style.backgroundColor = "black";
            experiencia.style.color = "white";
            console.log(explicacion_experiencias[experiencias_json[valor]].style.display);
            explicacion_experiencias[experiencias_json[valor]].style.display = "block";
            console.log(explicacion_experiencias[experiencias_json[valor]].style.display);
        }
        else{
            experiencia.style.backgroundColor = "transparent";
            experiencia.style.color = "black";
            explicacion_experiencias[experiencias_json[valor]].style.display = "none";
        }
    });
}

// cogemos la imagen del banner principal y 
const PATH_IMG_DIR = "./Imagenes/fotos-cv/"
const word_img_corpo = "professional_image_num_"
const TOTAL_IMG = 5;
let int_num:number =1; // possición de la imagen actual

// COjemos la imagen que contiene las diferentes iamgenes corporativas
let img_main_principal = document.getElementsByClassName("bg-container-main-principal")[0] as HTMLImageElement;

// Cojemos los botones de siguiente y anterior
let botones_next_previous = document.getElementsByClassName("move-btn") as HTMLCollectionOf<HTMLButtonElement>;
let btn_next = botones_next_previous[1];
let btn_previous = botones_next_previous[0];

btn_next.addEventListener("click", ()=>{
    int_num = (int_num%TOTAL_IMG +1);
    img_main_principal.src = PATH_IMG_DIR + word_img_corpo +  int_num + ".jpg";
    
});

btn_previous.addEventListener("click", ()=>{
    int_num = (int_num -1)%TOTAL_IMG;
    
    if(int_num == 0){
        int_num = TOTAL_IMG;
    }
    
    img_main_principal.src = PATH_IMG_DIR + word_img_corpo +  int_num + ".jpg";
});


// Creamos una estructura de PILA para guardar los links a las imagenes 
// y creamos una lista con todas las imagenes

let PILA_IMG:Array<string>;
let list_container_all_url_img:Array<string>;


