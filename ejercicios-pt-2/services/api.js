
// api.js
// Servicio para hacer peticiones a APIs (REFACTORIZADO)

/**
 * Manejo centralizado de errores
 * @param {string} errorMessage - Mensaje de error
 */
function handleError(errorMessage) {
    console.error(`❌ Error: ${errorMessage}`);
    return null;
}

/**
 * Validación centralizada de IDs
 * @param {number|string} id - ID a validar
 * @param {string} type - Tipo de recurso
 * @returns {boolean} true si es válido
 */
function validateId(id, type) {
    if (!id) {
        handleError(`ID de ${type} no proporcionado`);
        return false;
    }
    return true;
}

/**
 * Función genérica para obtener datos (REFACTORIZADA)
 * @param {number|string} id - ID del recurso
 * @param {string} resourceType - Tipo de recurso
 * @param {object} data - Datos a retornar
 * @returns {object|null} Datos o null si hay error
 */
function fetchData(id, resourceType, data) {
    console.log(`Obteniendo datos del ${resourceType} ${id}...`);
    
    try {
        if (!validateId(id, resourceType)) {
            return null;
        }
        
        console.log("✅ Datos obtenidos correctamente");
        return data;
        
    } catch (error) {
        return handleError(error.message);
    }
}

/**
 * Obtener datos de usuario
 */
function fetchUserData(userId) {
    return fetchData(userId, "usuario", { 
        id: userId, 
        name: "Usuario Ejemplo",
        email: "usuario@example.com"
    });
}

/**
 * Obtener datos de post
 */
function fetchPostData(postId) {
    return fetchData(postId, "post", { 
        id: postId, 
        title: "Post Ejemplo",
        content: "Contenido del post"
    });
}

// Exportar funciones
module.exports = {
    fetchUserData,
    fetchPostData,
    handleError,
    validateId
};

// Ejemplos
console.log("     API SERVICE - REFACTORIZADO ✨");

console.log("Ejemplo 1: Obtener usuario");
const user = fetchUserData(1);
console.log("Datos:", user);

console.log("\nEjemplo 2: Obtener post");
const post = fetchPostData(100);
console.log("Datos:", post);

console.log("\nEjemplo 3: Error - ID vacío");
fetchUserData(null);

console.log("\n✅ Código refactorizado:");
console.log("  - Lógica de errores centralizada");
console.log("  - Validación reutilizable");
console.log("  - Código DRY (Don't Repeat Yourself)");
