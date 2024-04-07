
//Array de  productos (Autos) que alimentara dinamicamente la estructura de HTML de pagina principal
const arrayAutos =  [
    {
        id: 1,
        marca: "Jeep",
        modelo: "Renegade",
        agno: "2024",
        condicion: "Nuevo",
        precio: 26490000,
        color: "Blanco",
        puertas: "5",
        motor: "3.7 ",
        transmision: "Manual",
        tipoCombustible: "Nafta",
        kilometros: "0",
        urlFoto: "./multimedia/img1-jeep-renegade-nuevo.jfif" 
    }, 
    {
        id: 2,
        marca: "Jeep",
        modelo: "Wrangler",
        agno: "2023",
        condicion: "Nuevo",
        precio: 40700000,
        color: "Rojo",
        puertas: "5",
        motor: "3.7 ",
        transmision: "Manual",
        tipoCombustible: "Nafta",
        kilometros: "0",
        urlFoto: "./multimedia/img2-jeep-wrangler-nuevo.jfif" 
    }, 
    {
        id: 3,
        marca: "Jeep",
        modelo: "Compass",
        agno: "2021",
        condicion: "Usado",
        precio: 32500000,
        color: "Blanco",
        puertas: "5",
        motor: "4.7 ",
        transmision: "Automatica",
        tipoCombustible: "Diesel",
        kilometros: "35750",
        urlFoto: "multimedia/img3-jeep-compass-usado.jfif" 
    }, 
    {
        id: 4,
        marca: "Jeep",
        modelo: "Grand Cherokee",
        agno: "2018",
        condicion: "Usado",
        precio: 28000000,
        color: "Negro",
        puertas: "5",
        motor: "4.7 ",
        transmision: "Automatica",
        tipoCombustible: "Nafta",
        kilometros: "56600",
        urlFoto: "multimedia/img4-jeep-grand-cherokee-usado.jfif" 
    }, 
    {
        id: 5,
        marca: "Fiat",
        modelo: "Chronos",
        agno: "2024",
        condicion: "Nuevo",
        precio: 35600000,
        color: "Plata",
        puertas: "5",
        motor: "2.0 ",
        transmision: "Automatico",
        tipoCombustible: "Diesel",
        kilometros: "0",
        urlFoto: "multimedia/img5-fiat-chronos-nuevo.jfif" 
    }, 
    {
        id: 6,
        marca: "Fiat",
        modelo: "Pulse",
        agno: "2023",
        condicion: "Nuevo",
        precio: 31500000,
        color: "Rojo",
        puertas: "5",
        motor: "1.6 ",
        transmision: "Manual",
        tipoCombustible: "Nafta",
        kilometros: "0",
        urlFoto: "multimedia/img6-fiat-pulse-nuevo.jfif" 
    }, 
    {
        id: 7,
        marca: "Fiat",
        modelo: "Mobi",
        agno: "2020",
        condicion: "Usado",
        precio: 22300000,
        color: "Negro",
        puertas: "5",
        motor: "1.3 ",
        transmision: "Manual",
        tipoCombustible: "Nafta",
        kilometros: "65000",
        urlFoto: "multimedia//img7-fiat-mobi-usado.jfif"
    }, 
    {
        id: 8,
        marca: "Fiat",
        modelo: "Argo",
        agno: "2020",
        condicion: "Usado",
        precio: 32000000,
        color: "Azul",
        puertas: "5",
        motor: "1.6 ",
        transmision: "Manual",
        tipoCombustible: "Nafta",
        kilometros: "80000",
        urlFoto: "multimedia/img8-fiat-argo-usado.jfif"
    }, 
    {
        id: 9,
        marca: "Peugeot",
        modelo: "208",
        agno: "2024",
        condicion: "Nuevo",
        precio: 29900000,
        color: "Verde",
        puertas: "5",
        motor: "2.0 ",
        transmision: "Automatica",
        tipoCombustible: "Diesel",
        kilometros: "0",
        urlFoto: "multimedia/img9-peugeot-208-nuevo.jfif"
    }, 
    {
        id: 10,
        marca: "Peugeot",
        modelo: "308",
        agno: "2023",
        condicion: "Nuevo",
        precio: 45000000,
        color: "Rojo",
        puertas: "5",
        motor: "2.0 ",
        transmision: "Automatica",
        tipoCombustible: "Nafta",
        kilometros: "0",
        urlFoto: "multimedia/img10-peugeot-308-nuevo.jfif" 
    }, 
    {
        id: 11,
        marca: "Peugeot",
        modelo: "206",
        agno: "2021",
        condicion: "Usado",
        precio: 19700000,
        color: "Azul",
        puertas: "5",
        motor: "1.6 ",
        transmision: "Manual",
        tipoCombustible: "Nafta",
        kilometros: "23000",
        urlFoto: "multimedia/img11-peugeot-206-usado.jfif"
    }, 
    {
        id: 12,
        marca: "Peugeot",
        modelo: "207",
        agno: "2018",
        condicion: "Usado",
        precio: 19700000,
        color: "Negro",
        puertas: "5",
        motor: "1.3 ",
        transmision: "Automatica",
        tipoCombustible: "Nafta",
        kilometros: "72000",
        urlFoto: "multimedia/img12-peugeot-207-usado.jfif"
    }, 
    {
        id: 13,
        marca: "Ford",
        modelo: "Focus",
        agno: "2023",
        condicion: "Nuevo",
        precio: 43000000,
        color: "Verde",
        puertas: "5",
        motor: "2.0 ",
        transmision: "Automatica",
        tipoCombustible: "Nafta",
        kilometros: "0",
        urlFoto: "multimedia/img13-ford-focus-nuevo.jfif"
    }, 
    {
        id: 14,
        marca: "Ford",
        modelo: "Fiesta",
        agno: "2023",
        condicion: "Nuevo",
        precio: 32000000,
        color: "Amarillo",
        puertas: "5",
        motor: "1.3 ",
        transmision: "Manual",
        tipoCombustible: "Nafta",
        kilometros: "0",
        urlFoto: "multimedia/img14-ford-fiesta-nuevo.jfif"
    }, 
    {
        id: 15,
        marca: "Ford",
        modelo: "KA",
        agno: "2017",
        condicion: "Usado",
        precio: 15000,
        color: "Plata",
        puertas: "2",
        motor: "0.9 ",
        transmision: "Manual",
        tipoCombustible: "Nafta",
        kilometros: "115000",
        urlFoto: "multimedia/img15-ford-ka-usado.jfif"
    }, 
    {
        id: 16,
        marca: "Ford",
        modelo: "Eco Sport",
        agno: "2018",
        condicion: "Usado",
        precio: 33000000,
        color: "blanco",
        puertas: "5",
        motor: "2.6 ",
        transmision: "Manual",
        tipoCombustible: "Nafta",
        kilometros: "88000",
        urlFoto: "multimedia/img16-ford-ecosport-usado.jfif"
    }
]

// Ejemplo de aplicacion de Funcion forEach(): Recorre el array y devuelve  los nombres de las marcas en mayusculas
arrayAutos.forEach((auto) => {
    console.log(auto.marca.toUpperCase());
})


//Ejemplo aplicacion de funcion find(): Devuelve el primer elemento del array que sea de la la marca: Fiat
 const autoFiat = arrayAutos.find((auto => auto.marca === "Fiat"))
 console.log(autoFiat)


//Ejemplo aplicacion de Funcion filter(): Devuelve un array con todos los autos que tengan la propiedad color: Negro
const autosNuevos = arrayAutos.filter (auto => auto.color === "Negro");
console.table (autosNuevos);


//Ejemplo aplicacion de funcion some(): Devuelve un comentario si existe una auto con la marca : Dodge
if( arrayAutos.some((auto => auto.marca ==="Dodge"))) {
    console.log("Si tenemos autos de la marca Dodge");
} else {
    console.log("Lo sentimos!! No tenemos autos de la marca Dodge por ahora!")
}

//Ejemplo de aplicacion de funcion map(): Devuelve un array con informacion principal y precio con iva
const autosPreciosConIva = arrayAutos.map((auto) => {
    return {
        marca: auto.marca,
        modelo: auto.modelo,
        agno: auto.agno,
        condicion: auto.condicion,
        precio: auto.precio*1.21
    }
})
console.log(autosPreciosConIva);


// Ejemplo de aplicacion funcion reduce(): retorna el valor  de la suma total de los autos de condicion: Nuevos y de color: Rojo

const autosNuevosYRojos = arrayAutos.filter((auto) =>{
    return auto.condicion ==="Nuevo" && auto.color ==="Rojo";
})

const totalAutosNuevosYRojos = autosNuevosYRojos.reduce((total,auto) => total + auto.precio,0);
console.log(totalAutosNuevosYRojos);






