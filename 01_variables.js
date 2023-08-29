/*************************************/
/* VARIABLES => VAR,LET,CONST        */
/*************************************/

// Que es una variable?
/** Es un espacio de memoria donde se almacena una referencia o un valor */

/* Reglas de nomenclatura de variables:

  - Usar solo let, var , const para declarar variables.
  - No se puede utilar palabras palabras claves de javascript: var , for, funtion, if
  ❌ Una variable no puede comenzar con numero
  ❌ Una variable no puede llevar espacios
  ✅ Una variable puede llevar guiones bajos, puede comenzar con un guion bajo, puede comenzar $, puede contener letrar y tambien numero.
  ✅ Una variable puede llevar camelCase,
*/

/***************************/
/* VARIABLE => VAR         */
/**************************/

//Declaracion de una variable
var nombre

//Asignacion de una variable
nombre = "Brandhom"

// Declaracion y asigancion de una variable
var apellido = "Martinez"

// crear multiples variables en una misma linea => ❌ Mala práctica
var edad = 30; var correo = "martinez@gmail.com"

//crear variables en multiples en lineas => ✅ Buena práctica
var color = 'red'
var pasatiempo = 'jugar futbol'

//Reasignacion de vaiables
nombre = 'Robert'

//Re declaracion de variable var ❌❌❌❌❌❌❌
var nombre = 'Alejandra'
//console.log(nombre)


/***************************/
/* VARIABLE => LET         */
/**************************/

//Declaracion de una variable
let nombre2

//Asignacion de una variable
nombre2 = 'Jack'

//Reasignacion de variable
nombre2 = 'Roberts'
console.log(nombre2);

//Re declaracion de una variable
//  let nombre2 = 'Sofia'  

/***************************/
/* VARIABLE => CONST       */
/**************************/

//Declaracion y asignacion en la misma linea
const pi = 3.1426

//Reasignacion de variable ❌ 
// pi = 'Juan'
console.log(pi);

//Re declaracion de la variable
// const pi = 9

