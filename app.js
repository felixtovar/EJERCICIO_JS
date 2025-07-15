// /*
//   1. Crea una función que reciba un texto o parrafo y verifique si contiene alguna las siguientes malas palabras:
//   - "tonto"
//   - "chispas"
//   - "recorcholis"
//   - "rayos"
//   - "caracoles"
//   - "cielos"
//   Si el texto contiene alguna de estas palabras, sustituye por "****" y retorna el texto modificado.
//   Si no contiene ninguna, retorna el texto original.
// */

function censurar_texto(texto){
  const malas = [ "tonto", "chispas", "recorcholis", "rayos", "caracoles", "cielos" ] 
  let partes = texto.split(" ")
  for (let i = 0; i < partes.length; i++){
    if(malas.includes(partes[i].toLowerCase())){
      partes[i] = "*****"
    }
  }
  return partes.join(" ");
}
console.log(censurar_texto("Rayos y cielos que recorcholis situacion"))

//2. Según el siguiente array de objetos
//let personas = [
//{ nombre: "Juan", edad: 25, pais: "España", sexo: "masculino" },
//{ nombre: "María", edad: 30, pais: "México", sexo: "femenino" },
//{ nombre: "Pedro", edad: 22, pais: "Argentina", sexo: "masculino" },
//{ nombre: "Ana", edad: 28, pais: "Chile", sexo: "femenino" },
//{ nombre: "Luis", edad: 35, pais: "España", sexo: "masculino" },
//];

//Crea un código que me haga un filtro del array creando un nuevo array que contenga solo
//las personas que sean mayores de 25 años.

//Luego haz un código que me cree un nuevo array con las personas sean de españa y sean hombres

//Fecha de entrega: 11/07/25


let personas = [
{ nombre: "Juan", edad: 25, pais: "España", sexo: "masculino" },
{ nombre: "María", edad: 30, pais: "México", sexo: "femenino" },
{ nombre: "Pedro", edad: 22, pais: "Argentina", sexo: "masculino" },
{ nombre: "Ana", edad: 28, pais: "Chile", sexo: "femenino" },
{ nombre: "Luis", edad: 35, pais: "España", sexo: "masculino" },
];

let mayoresde25 = [];
for (let i = 0; i < personas.length; i++) {
  if (personas[i].edad > 25) {
    mayoresde25.push(personas[i]);
  }
}
console.log("personas mayores de 25 años:");
console.log(mayoresde25);

// hombre mayor de 25 años
let hombresEspanoles = [];

for ( let i = 0; i < personas.length; i++){
  if (personas[i].pais === " España" && personas[i].sexo === "masculino"){
    hombresEspanoles.push(personas[i]);
  }
}

console.log("Hombre de España");
console.log(hombresEspanoles);