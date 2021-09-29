// Código del cuadrado

// Perímetro
function perimetroCuadrado(lado) {
    return lado * 4;
}

// Área
function areaCuadrado(lado) {
    return lado * lado;
}


//Código del triángulo

// Perímetro
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// Área
function areaTriangulo(altura, base) {
    return (altura * base) / 2;
}


//Código del círculo

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
    diametro = diametroCirculo(radio);
    return diametro * PI
}

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI
}