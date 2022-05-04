// Each lowercase letter becomes uppercase and each uppercase letter becomes lowercase
const isLowerCase = (char) => char.toLowerCase() === char;
const swapCase = (char) => isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

String.prototype.toAlternatingCase = function() {
    return [...this].map(swapCase).join('');
};