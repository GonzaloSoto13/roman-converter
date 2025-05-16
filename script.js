function romanToInteger(roman) {
    // Validar tipo
    if (typeof roman !== 'string') {
        throw new Error('Input must be a valid Roman numeral.');
    }

    // Quitar espacios y convertir a mayúsculas
    roman = roman.trim().toUpperCase();

    // Verificar vacío
    if (roman === '') {
        throw new Error('Input must be a valid Roman numeral.');
    }

    // Validar caracteres permitidos
    if (!/^[IVXLCDM]+$/.test(roman)) {
        throw new Error('The Roman numeral contains invalid characters.');
    }

    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };

    let total = 0;
    let prev = 0;

    // Calcular valor de derecha a izquierda
    for (let i = roman.length - 1; i >= 0; i--) {
        const curr = romanMap[roman[i]];
        if (curr < prev) {
            total -= curr;
        } else {
            total += curr;
        }
        prev = curr;
    }

    // Verificar que el número reconstruido es igual al original
    const reconverted = integerToRoman(total);
    if (reconverted !== roman) {
        throw new Error('The Roman numeral is not in canonical form.');
    }

    return total;
}

function integerToRoman(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        throw new Error("The number must be between 1 and 3999.");
    }
    if (num < 1 || num > 3999) {
        throw new Error("The number must be between 1 and 3999.");
    }

    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const numerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let result = "";
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += numerals[i];
            num -= values[i];
        }
    }
    return result;
}

function convert() {
    let input = document.getElementById("input").value.trim().toUpperCase();
    let resultElement = document.getElementById("result");
    let errorElement = document.getElementById("error");
    resultElement.textContent = "";
    errorElement.textContent = "";

    if (/^\d+$/.test(input)) { // Check if input is a number
        let num = parseInt(input, 10);
        try {
            let roman = integerToRoman(num);
            resultElement.textContent = `Result: ${roman}`;
        } catch (error) {
            errorElement.textContent = error.message;
        }
    } else { // Assume Roman numeral input
        let result = romanToInteger(input);
        if (isNaN(result)) {
            errorElement.textContent = "Invalid Roman numeral.";
        } else {
            resultElement.textContent = `Result: ${result}`;
        }
    }
}

// Exponer funciones globalmente para los tests
window.integerToRoman = integerToRoman;
window.romanToInteger = romanToInteger;