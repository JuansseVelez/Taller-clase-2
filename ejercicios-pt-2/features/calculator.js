// features-calculator.js

/**
 * Suma dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} La suma de a y b
 */
function sum(a, b) {
    return a + b;
}



// Exportar funciones para usar en otros archivos
module.exports = {
    sum,
};

// Ejemplo de uso
console.log("CALCULADORA - EJEMPLO");

console.log("Suma: 10 + 5 =", sum(10, 5));

console.log("\n✅ Función de suma implementada correctamente");
