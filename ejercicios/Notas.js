// Ejercicio: Sistema de notas y promedio
// Cálculo de promedio y verificación de aprobación

const nombreEstudiante = "Juan Sebastian Ramirez"; 

// Notas de tres materias
const notaMatematicas = 4.2;
const notaProgramacion = 4.5;
const notaBases = 3.8;

// Nombres de las materias
const materia1 = "Matemáticas";
const materia2 = "Programación";
const materia3 = "Bases de Datos";

// Calcular el promedio
const promedio = (notaMatematicas + notaProgramacion + notaBases) / 3;

// Nota mínima para aprobar
const notaMinima = 3.5;

// Verificar si aprobó
const aprobo = promedio >= notaMinima;

// Mostrar resultados en consola
console.log("SISTEMA DE CALIFICACIONES");
console.log("\nEstudiante:", nombreEstudiante);
console.log("\n--- NOTAS POR MATERIA ---");
console.log(materia1 + ":", notaMatematicas);
console.log(materia2 + ":", notaProgramacion);
console.log(materia3 + ":", notaBases);
console.log("\n--- RESULTADO ---");
console.log("Promedio:", promedio.toFixed(2)); // .toFixed(2) muestra 2 decimales
console.log("Nota mínima para aprobar:", notaMinima);

// Mostrar si aprobó o no
if (aprobo) {
    console.log("\n✅ Estado: APROBADO");
    console.log("¡Felicitaciones " + nombreEstudiante + "!");
} else {
    console.log("\n❌ Estado: NO APROBADO");
    console.log("Necesitas mejorar tu promedio.");
}
