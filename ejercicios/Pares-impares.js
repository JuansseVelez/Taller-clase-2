// Ejercicio: Números pares e impares
// Uso de bucles y condicionales

// Arrays para almacenar los números
const numerosPares = [];
const numerosImpares = [];

// Recorrer números del 1 al 30
for (let i = 1; i <= 30; i++) {
    // Verificar si el número es par o impar
    if (i % 2 === 0) {
        // Si el residuo de dividir entre 2 es 0, es PAR
        numerosPares.push(i);
    } else {
        // Si no, es IMPAR
        numerosImpares.push(i);
    }
}

// Mostrar resultados en consola

console.log("NÚMEROS PARES E IMPARES (1-30)");


console.log("\n NÚMEROS PARES:");
console.log("Cantidad:", numerosPares.length);
console.log("Lista:", numerosPares.join(", "));

console.log("\n NÚMEROS IMPARES:");
console.log("Cantidad:", numerosImpares.length);
console.log("Lista:", numerosImpares.join(", "));


