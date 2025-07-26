// recuperar elemento desde DOM
// metodo querySelector

// Ejercicio de POE
// Realizar una calculadora que permita sumar, restar, multiplicar y dividir dos números
//  ingresados por el usuario a través de un formulario.
// El formulario debe contar con un botón para limpiar sus campos.
// El resultado debe de desplegarse en un tercer input con propiedad readonly.
// Si el usuario intenta enviar el formulario sin ingresar los dos números,
//  mostrar un mensaje de error (*) indicando que todos los campos son obligatorios.
// El estudiante tiene total libertad para definir como recolectará los datos
//  que definan el tipo de operación a realizar.
// (*) Los mensajes de error se pueden mostrar con alert, 
// pero el primero en mostrarlos en el DOM con createElement,
//  le pone nombre al gatito por 3 días.

const inputnumero_a = document.querySelector("#inputnumero_a");
const inputnumero_b = document.querySelector("#inputnumero_b");
const sumaFormbtn = document.querySelector("#sumaFormbtn");
const restaFormbtn = document.querySelector("#restaFormbtn");
const multiplicaFormbtn = document.querySelector("#multiplicaFormbtn");
const divideFormbtn = document.querySelector("#divideFormbtn");
const limpiaFormBtn = document.querySelector("#limpiaFormBtn");
const inputresultado = document.querySelector("#inputresultado");

//funcion para obtener los valores
function obtenerValor(){
  const a = document.getElementById("inputnumero_a").value;
  const b = document.getElementById("inputnumero_b").value;
  return [parseFloat(a), parseFloat(b)];
}
//funsion mostrar resultado
function mostrarResultado(valor){
  document.getElementById("inputresultado").value= valor;
}
//funsion limpiar campos 
function limpiarCampos(){
  document.getElementById("inputnumero_a").value = "";
  document.getElementById("inputnumero_b").value = "";
  document.getElementById("inputresultado").value = "";
}
//funsion validar si es numero el valor agregado
function validarNumeros(a, b){
  return !isNaN(a) && !isNaN(b);
}
//funsion calcular las operaciones realizadas 
function calcularOperacion(operacion) {
  const [a, b] = obtenerValor();
  if (!validarNumeros(a, b)) {
    mostrarResultado('Error: números inválidos');
    return;
  }
  let resultado;
  switch (operacion){
    case "sumar": resultado = a + b; break;
    case "restar": resultado = a - b ; break;
    case "multiplicar": resultado = a * b; break;
    case "dividir":
    resultado = b !== 0 ? a / b : `division por cero no valida`;
    break;
    default: resultado =  `Operacion no reconocida`;
    break;
  }
    mostrarResultado(resultado);
}
// realizas los eventos de los botones
document.getElementById('sumaFormbtn').addEventListener('click', () => calcularOperacion('sumar'));
document.getElementById('restaFormbtn').addEventListener('click', () => calcularOperacion('restar'));
document.getElementById('multiplicaFormbtn').addEventListener('click', () => calcularOperacion('multiplicar'));
document.getElementById('divideFormbtn').addEventListener('click', () => calcularOperacion('dividir'));
document.getElementById('limpiaFormBtn').addEventListener('click', limpiarCampos);