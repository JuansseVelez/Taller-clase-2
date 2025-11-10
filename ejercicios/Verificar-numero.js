// Ejercicio: Verificador de números pares e impares
// Programa interactivo que verifica si un número es par o impar

// Importar módulo para entrada de usuario
const readline = require('readline');

// Crear interfaz para leer entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para verificar si un número es par o impar
function verificarNumero(numero) {
    // Convertir a número por si viene como string
    const num = parseInt(numero);
    
    // Validar que sea un número
    if (isNaN(num)) {
        return "❌ Error: Debes ingresar un número válido";
    }
    
    // Verificar si es par o impar
    if (num % 2 === 0) {
        return `✅ El número ${num} es PAR`;
    } else {
        return `✅ El número ${num} es IMPAR`;
    }
}

// Función principal del programa
function iniciarPrograma() {
    
    console.log("  VERIFICADOR DE NÚMEROS PARES/IMPARES");
    
    
    // Preguntar por el número
    rl.question('Ingresa un número (o escribe "salir" para terminar): ', (respuesta) => {
        
        // Si el usuario quiere salir
        if (respuesta.toLowerCase() === 'salir') {
            console.log("\n ¡Gracias por usar el programa!");
            rl.close();
            return;
        }
        
        // Verificar el número
        const resultado = verificarNumero(respuesta);
        console.log("\n" + resultado + "\n");
        
        // Preguntar si quiere verificar otro número
        rl.question('¿Verificar otro número? (si/no): ', (continuar) => {
            console.log("");
            
            if (continuar.toLowerCase() === 'si' || continuar.toLowerCase() === 's') {
                iniciarPrograma(); // Reiniciar el programa
            } else {
                console.log(" ¡Gracias por usar el programa!");
                rl.close();
            }
        });
    });
}

// Ejemplos automáticos primero (para el screenshot)

console.log("  EJEMPLOS DE VERIFICACIÓN AUTOMÁTICA");


const ejemplos = [5, 10, 17, 24, 33, 50, 7, 100];

ejemplos.forEach(num => {
    console.log(verificarNumero(num));
});


console.log("  MODO INTERACTIVO");


// Iniciar el programa interactivo
iniciarPrograma();