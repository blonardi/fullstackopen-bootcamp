console.log("hello human!");

const persona = {
    name: "Elon Musk",
    twitter: "@elonmusk",
    isDeveloper: false,
    company: ["Tesla", "SpaceX"],
};

let busqueda = "company"
let dato = "Tesla";

if(persona[busqueda].includes(dato)){
  console.log("Dirige Tesla")
} else {

}

const suma = (op1, op2) => {
  return op1 + op2 
}

console.log(suma(10,25))