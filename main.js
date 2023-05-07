// EJERCICIO 1 //
/* let numero = 25
for (let i = 1; i < 11; i++) {
    console.log(i*numero);
} */


/* // EJERCICIO 2 //
let ingreseNumero = parseInt(prompt("Ingrese un numero"))
const numeros = []
while (ingreseNumero > 0) {
    ingreseNumero = parseInt(prompt("Ingrese un numero"))
    numeros.push(ingreseNumero)
}
console.log(numeros)

// EJERCICIO 3 //

let numeroSecreto = numeros[numeros.length - 2]
let ingresaNumero = parseInt(prompt("Adivina el numero"))
let finBucle = true
let contador = 0
while (ingresaNumero >= 1 && ingresaNumero <= 100 && finBucle) {
    contador++
 if (ingresaNumero < numeros[numeros.length - 2]) {
    ingresaNumero = parseInt(prompt("El numero ingresado es menor, vuelve a intentarlo."))
} else if (ingresaNumero > numeros[numeros.length - 2]) {
    ingresaNumero = parseInt(prompt("El numero ingresado es mayor, vuelve a intentarlo."))
} else if (ingresaNumero === numeros[numeros.length - 2]) {
    finBucle = false
    alert("Felicitaciones, adivinaste el numero! Te tomo" + " " + contador + " " + "intentos.")
}
}
 */
// EJERCICIO 4 //
/* let numero = Number(prompt("Escribe un numero"));

function divisores(numero) {
    let divisores = []
    for (let i = 1; i <= numero; i++){
       if (numero % i === 0){
        divisores.push(i)
       }
    }
    return divisores;
}
let divisoresDos = divisores(numero)
if(divisores.length <= 2){
    console.log(`El numero ${numero} es primo`)
}else{
    console.log(`El numero ${numero} no es primo`)
} */

// EJERCICIO 5 //
/* let numeroRecibido = parseInt(prompt("Ingrese un numero"))
for (let i = numeroRecibido; i >= 0; i--){
    if (numeroRecibido % i === 0){
        console.log(i)
    }
}
 */

// EJERCICIO 6 //
/* let nombres = ["Mica", "Roma", "Lucas", "Ana", "Fabian", "Mateo", "Martin", "Emma", "July", "Valen"];
for (let i = 0; i <= nombres.length; i++){
    console.log(nombres[i]);
} */

// EJERCICIO 7 //
/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < numeros.length; i++){
    console.log(`${numeros[i]}` * 2);    
}  */

// EJERCICIO 8 //
/* let familia = [
    {Nombre: "Micaela", Edad: 22, Altura: 160, Sexo: "femenino"},
    {Nombre: "Lucas", Edad: 25, Altura: 170, Sexo: "masculino"},
    {Nombre: "Roma", Edad: 1, Altura: 70, Sexo: "femenino"},
    {Nombre: "Analia", Edad: 46, Altura: 156, Sexo: "femenino"},
    {Nombre: "Mateo",Edad: 9, Altura: 125, Sexo: "masculino"}
]
for (let i = 0; i < familia.length; i++) {
    let familiares = familia[i];
    console.log(`Mi nombre es ${familiares.Nombre}, tengo ${familiares.Edad} años, soy ${familiares.Sexo} y mido ${familiares.Altura} cm.`)
}
 */

// EJERCICIO 9 //
/* let diezNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < 10; i++) {
    let numeros = diezNumeros[i]
    if (numeros % 2 !== 0) {
        console.log(numeros)
    }
} */

// EJERCICIO 10 //
/* 
const numerosPares = [0]
const numerosImpares = [0]
let ingresarNumero = parseInt(prompt("Ingrese el primer numero"))


while (ingresarNumero !== 0) {
    if (ingresarNumero % 2 === 0) {
        numerosPares.push(ingresarNumero)
        numerosPares = ingresarNumero + numerosPares
    } else {
        numerosImpares = ingresarNumero + numerosImpares
    }
}
let ingresarNumeroDos = parseInt(prompt("Ingrese el segundo numero"))
 */

// EJERCICIO 11 //
/* let numeross = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
let numeroMayor = numeross[0]
for(let i = 1; i < numeross.length; i++){
    if(numeross[i]> numeroMayor){
        numeroMayor = numeross[i]
    }
}
console.log("El numero mas grande es" + " " + numeroMayor)

// EJERCICIO 12 // 
let numerosVarios = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
let numeroMenor = numerosVarios[0]
for(let i = 1; i > numeross.length; i--){
    if(numeross[i]< numeroMenor){
        numeroMenor = numerosVarios[i]
    }
}
console.log("El numero mas chico es" + " " + numeroMenor) */

// EJERCICIO 13 //
/* function jugar() {
    let jugada = ['piedra', 'papel', 'tijera']
    let jugadorUno = prompt("Ingrese su nombre")
    let jugadorDos = prompt("Ingrese su nombre")
    let ganador = null
  
    while (ganador === null) {
      const jugada1 = prompt(`Elegi piedra, papel o tijera`)
      const jugada2 = prompt(`Elegi piedra, papel o tijera`)
  
      if (jugada1 === jugada2) {
        alert("Empate, vuelvan a intentarlo")
      } else if ((jugada1 === "piedra" && jugada2 === "tijera") || (jugada1 === "papel" && jugada2 === "piedra") || (jugada1 === "tijera" && jugada2 === "papel")) {
        ganador = jugadorUno;
      } else {
        ganador = jugadorDos;
      }
    }  
    alert(`¡${ganador} ha ganado!`);
  }
  jugar(); */

// EJERCICIO 14 //
/* for (let i = 1; i <= 5; i++) {
    let asteriscos = "";
    for (let asterisco = 1; asterisco <= i; asterisco++) {
        asteriscos += "*";
    }
    console.log(asteriscos);
} */

// EJERCICIO 15 //
/* for (let i = 5; i > 0; i--) {
    let asteriscos = "";
    for (let asterisco = 0; asterisco < i; asterisco++) {
        asteriscos += "*";
    }
    console.log(asteriscos);
}
 */

// EJERCICIO 16 //
let numerosDesordenados = [9, 5, 3, 1, 7, 2, 8, 4, 6, 5, 10]
let numerosOrdenados = []
for (let i = 0; i < numerosDesordenados.length; i++){

}
