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



// HTML

// Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro =perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}

// Triángulo

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("trianguloLado1");
    const lado1 = Number(inputLado1.value);

    const inputLado2 = document.getElementById("trianguloLado2");
    const lado2 = Number(inputLado2.value);

    const inputBase = document.getElementById("trianguloBase");
    const base = Number(inputBase.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("trianguloBase");
    const base = Number(inputBase.value);

    const inputAltura = document.getElementById("trianguloAltura");
    const altura = Number(inputAltura.value);

    const area = areaTriangulo(altura, base);
    alert(area);
}

//Círculo

function calcularDiametroCirculo() {
    const inputRadio = document.getElementById("circuloRadio");
    const radio = inputRadio.value;

    const diametro = diametroCirculo(radio);
    alert(diametro);
}

function calcularCircunferenciaCirculo() {
    const inputRadio = document.getElementById("circuloRadio");
    const radio = inputRadio.value;

    const circunferencia = perimetroCirculo(radio);
    alert(circunferencia);
}

function calcularAreaCirculo () {
    const inputRadio = document.getElementById("circuloRadio");
    const radio = inputRadio.value;

    const area = areaCirculo(radio);
    alert(area);
}