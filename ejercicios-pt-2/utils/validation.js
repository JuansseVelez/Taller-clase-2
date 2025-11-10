/**
 * Valida si un email es correcto
 * @param {string} email - Email a validar
 * @returns {boolean} true si es válido, false si no
 */
function validateEmail(email) {
    // FIX: Ahora valida si el email está vacío o undefined
    if (!email || email.trim() === "") {
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

console.log("\n✅ Bug corregido: emails vacíos ahora se validan correctamente")