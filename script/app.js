
//Declaracion de Variables
let frecuenciaPago;
let tasaNomAnual;
let cantAgnos;
let numeroTotalCuotas;
let tasaIntEquiv;
let seleccionFrecuenciaPago;
let elijeTuAuto;
let costoAutoElegido;
let deseaFinanciamiento;
let montoFinanciar;
let anticipo;
let minimoAnticipo;
let pmt;
let saldoInicial


// Entrada de datos
costoAutoElegido = parseInt(prompt(" Ingrese el Valor del Auto que Desea Comprar: "));

//Calculo de minimo anticipo a entregar
minimoAnticipo= 0.3*costoAutoElegido;
alert ("En caso de requerir financiamiento, el anticipo minimo es de AR$ " + minimoAnticipo)
anticipo = parseInt(prompt("Por favor Ingrese el Monto del anticipo que desea realizar:"));

//Bucle While para garantizar que el anticipo a entregar sea mayor que el minimo
while (anticipo < minimoAnticipo){
    alert ("El monto de dinero que desea adelantar es menor al 30% del valor del costo del auto!");
    anticipo = parseInt(prompt("Por favor Ingrese el Monto del anticipo que desea realizar:"));
}
//Fin de bucle

//Monto a financiar para la adquisicion del auto
montoFinanciar = costoAutoElegido - anticipo;
alert("El monto a financiar es de AR$ " + montoFinanciar);

// Entrada de datos para calculo del financiamiento
tasaNomAnual = parseInt(prompt("Por favor ingrese la tasa Nominal Anual (TNA) a aplicar en %:"));
cantAgnos = parseInt(prompt(" Por favor indique la cantidad de años a Financiar la deuda: "));

//Calculo de numero total de cuotas a financiar
numeroTotalCuotas = 12 * cantAgnos;

//Calculo de tasa de interes equivalente
tasaIntEquiv = tasaNomAnual / 12;

//Funcion para calcular Tasa Efectiva Anual
function calcularTea(tasaNomAnual, numeroTotalCuotas) {
    return ((Math.pow(1 + (tasaNomAnual / 100) / numeroTotalCuotas, numeroTotalCuotas) - 1) * 100);
}

//Llamado a funcion para calcular la tasa efectiva Anual (TEA)
tea = calcularTea(tasaNomAnual, numeroTotalCuotas);

//Funcion para Calculo de valor de la cuota de amortizacion
function calcularPmt (montoFinanciar,tasaIntEquiv,numeroTotalCuotas) {
    return (montoFinanciar * (tasaIntEquiv / 100) / (1 - Math.pow(1 + (tasaIntEquiv / 100), -numeroTotalCuotas)));
}

pmt = calcularPmt(montoFinanciar,tasaIntEquiv,numeroTotalCuotas);

alert("Tu auto te lo puedes llevar en " + numeroTotalCuotas + " cuotas de " + pmt.toLocaleString(undefined, { maximumFractionDigits: 2 }));

// Encabezado de tabla de amortizacion
console.log("Cuota     " + "Saldo Inicial     " + "Amortizacion de Capital       " + "Intereses             " + "Saldo Final     ");

// Ciclo para calcular array con todos los pagos de las cuotas durante el ciclo de financiamiento
saldoInicial = montoFinanciar;
let arrayAmortizacion = [] //Array vacio a llenar por iteracion

for (let i = 0; i < numeroTotalCuotas; i++) {
    let intereses = saldoInicial * tasaIntEquiv / 100;
    let amortizacion = pmt - intereses;
    let saldoFinal = saldoInicial - amortizacion;

    arrayAmortizacion[i] = [[i], saldoInicial.toFixed(2), amortizacion.toFixed(2), intereses.toFixed(2), saldoFinal.toFixed(2)]

    saldoInicial = saldoFinal;
    }

    console.log (arrayAmortizacion); //para ver por consola el array de tabla de amortizacion
    //Esta array alimentará la tabla de amortizacion en el HTML, la cual ya tiene una pagina de esilos CSS con la clase
    //"tabla-amortizacion"













