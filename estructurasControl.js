// BUCLES 'for' Y CONDICIONAL SIMPLE 'if'

let cuenta = 9;
let mensaje = "Estas en la iteracion numero ";

// BUCLE PARA REPETIR UNA INSTRUCCION N NUMERO DE VECES
// for (let n = 0; n <= 10; n = n + 2) {
//     console.log(mensaje + n + " y llevas la cuenta en " + cuenta);

//     if (n == cuenta) {
//         console.log("IGUALES!!!");
//     }
//     else {
//         // console.log("NO SON IGUALES!!!");
//     }
//     // LO DECREMENTAMOS AL FINAL PARA QUE LEA EL IF ANTES
//     cuenta--;
// }
// console.log("BOOOM!!!");

// OPEADORES ARITMETICOS
// + SUMA
// - RESTA
// * PRODUCTO
// / DIVISION
// % MODULO --> RESTO DE UNA DIVISION
// ++ INCREMENTO
// -- DECREMENTO

// OPERADORES DE COMPARACION
// <= MENOR O IGUAL
// >= MAYOR O IGUAL
// == IGUALDAD SIMPLE --> SOLO TIENE QUE COINCIDIR EL CONTENIDO O VALOR
// === IGUAL ESTRICTA --> TIENE QUE COINCIDIR ADEMAS EL TIPO DE DATO

// CONDICION SIMPLE
// DEBE CUMPLIRSE LA CONDICION PARA QUE EJECUTE EL CODIGO DEL INTERIOR
// if (n == cuenta) {
//     console.log("IGUALES!!!");
// }


let dia = "hoy";
// CARACTERISTICAS ESPECIALES DE LOS STRINGS
    // TEXTO CONCATENANDO LAS VARIABLES 
    // console.log("ACERTASTE! EL DIA SELECCIONADO ES EL " + dia + " Asi que ENHORABUENA! El " + dia + " es comienzo de una nueva semana. VIVA el " + dia);
    // TEXTO INTERPOLANDO LAS VARIABLES
    // SE USAN EL APOSTROFO O COMILLA FRANCESA --> LA VARIABLE SE ENCIERRAN CON ${variable}
    // console.log(`ACERTASTE! EL DIA SELECCIONADO ES EL ${dia} Asi que ENHORABUENA! El ${dia} es comienzo de una nueva semana. VIVA el ${dia}`);
    // PODEMOS USAR TANTO COMILLAS DOBLES COMO SIMPLES CON LOS STRINGS
    // console.log('Hola soy un texto dentro de una comilla simple');
    // PARA IMPRIMIR COMILLAS DOBLES DENTRO DE UN STRING, ACOTAMOS SU CONTENIDO CON SIMPLES
    // console.log('Ejemplo de "comilla doble" en un string');
    // PARA IMPRIMIR COMILLAS SIMPLES DENTRO DE UN STRING, ACOTAMOS SU CONTENIDO CON DOBLES
    // console.log("Ejemplo de 'comilla simple' en un string");

// EJ. DIAS SEMANA
// QUIERO SEÑALAR EL DIA DE LA SEMANA SI ES DE ENTRE SEMANA O DE FINDE
dia = "Sabado"
if (dia == "lunes"){
    console.log("ENTRE SEMANA");
}
else if (dia == "martes"){
    console.log("ENTRE SEMANA");
}
else if (dia == "miercoles"){
    console.log("ENTRE SEMANA");
}
else if (dia == "jueves"){
    console.log("ENTRE SEMANA");
}
else if (dia == "viernes"){
    console.log("ENTRE SEMANA");
}
else if (dia == "sabado"){
    console.log("FIN DE SEMANA");
}
else if (dia == "domingo"){
    console.log("FIN DE SEMANA");
}
else {
    console.log("NO HAS ESCRITO BIEN EL DIA")
}

dia = "miercoles";
// CONDICION MULTIPLE SWITCH
switch (dia){
    case "lunes":
        console.log("ENTRE SEMANA");
        break
    case "martes":
        console.log("ENTRE SEMANA");
        break
    case "miercoles":
        console.log("ENTRE SEMANA");
        break
    case "jueves":
        console.log("ENTRE SEMANA");
        break
    case "viernes":
        console.log("ENTRE SEMANA");
        break
    case "sabado":
        console.log("FIN DE SEMANA");
        break
    case "domingo":
        console.log("FIN DE SEMANA");
        break
    default:
        console.log("NO HAS ESCRITO BIEN EL DIA");
}