const obj = [
    {
        colores: ['amarillo', 'rojo']
    },
    {
        colores: ['azul', 'amarillo']
    },
    {
        colores: ['azul','rojo']
    },
];
//for (let i in obj) {
 //   console.log(obj[i]);}

//bucle for
 for(let i=0;i<obj.length;i++){
    console.log(obj[i])
 }
// Accede a un elemento específico del array usando el indice
const tercerObjeto = obj[2];
console.log(tercerObjeto);
const blueColor = tercerObjeto.colores[0];
console.log(blueColor);
console.log(obj.length);

//recorre el array entregando id y contenido de los array
obj.forEach((item, index) => {
    console.log(index);
    console.log(item);
  });
  


// Muestra el contenido del tercer objeto en una alerta
console.log(JSON.stringify(tercerObjeto));

//variables
let colorPrimario = ['amarillo', 'rojo', 'azul']
alert('Los colores primarios son: '+ colorPrimario)
let elegir = prompt('Dame un color primario')
let indice = colorPrimario.indexOf(elegir)
//iteracion elimar un elemento elegido
if(indice !== -1){
    colorPrimario.splice(indice,1)
}
alert('Los demás colores primarios son: '+ colorPrimario)

//if, else if, else
const color = ["rojo", "amarillo"];
const color2 = ["azul", "amarillo"];
const color3 = ["azul", "rojo"];
const croma1 = prompt("Ingrese un color primario:");
const croma2 = prompt("Ahora mezclalo con otro color primario:");
if (color.includes(croma1) && color.includes(croma2)) {
    alert("Revisa la mezcla en la consola");
    console.log("El color secundario es anaranjado");
} else if(color2.includes(croma1) && color2.includes(croma2)){
    alert("Revisa la mezcla en la consola");
    console.log("El color secundario es verde");
}else if(color3.includes(croma1) && color3.includes(croma2)){
    alert("Revisa la mezcla en la consola");
    console.log("El color secundario es violeta");
  } else {
    alert("El color ingresado no es válido.");
}