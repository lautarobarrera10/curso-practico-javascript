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
    const inputCuadrado = document.getElementById("InputCuadrado");
    const valueCuadrado = inputCuadrado.value;

    const inputMedida = document.getElementById("InputMedidaCuadrado")
    const medida = inputMedida.value;

    const perimetro = perimetroCuadrado(valueCuadrado);
    alert("El perímetro del cuadrado es " + perimetro + " " + medida)
}

function calcularAreaCuadrado() {
    const inputCuadrado = document.getElementById("InputCuadrado");
    const valueCuadrado = inputCuadrado.value;

    const inputMedida = document.getElementById("InputMedidaCuadrado")
    const medida = inputMedida.value;

    const area = areaCuadrado(valueCuadrado);
    alert("El área del cuadrado es de " + area + " " + medida + "²")
}

// Triángulo

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("trianguloLado1");
    const lado1 = Number(inputLado1.value);

    const inputLado2 = document.getElementById("trianguloLado2");
    const lado2 = Number(inputLado2.value);

    const inputLado3 = document.getElementById("trianguloLado3");
    const lado3 = Number(inputLado3.value);

    const InputMedida = document.getElementById("InputMedidaTriangulo")
    const medida = InputMedida.value;

    const perimetro = perimetroTriangulo(lado1, lado2, lado3);
    alert("El perímetro del triángulo es de " + perimetro + " " + medida);
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("trianguloBase");
    const base = Number(inputBase.value);

    const InputMedida = document.getElementById("InputMedidaTriangulo2")
    const medida = InputMedida.value;

    const inputAltura = document.getElementById("trianguloAltura");
    const altura = Number(inputAltura.value);

    const area = areaTriangulo(altura, base);
    alert("El área del triángulo es de " + area + " " + medida + "²");
}

//Círculo


function calcularDiametroCirculo() {
    const inputRadio = document.getElementById("circuloRadio");
    const radio = inputRadio.value;

    const InputMedida = document.getElementById("InputMedidaCirculo")
    const medida = InputMedida.value;

    const diametro = diametroCirculo(radio);
    alert("El diámetro del círculo es de " + diametro + " " + medida);
}

function calcularCircunferenciaCirculo() {
    const inputRadio = document.getElementById("circuloRadio");
    const radio = inputRadio.value;

    const InputMedida = document.getElementById("InputMedidaCirculo")
    const medida = InputMedida.value;

    const circunferencia = perimetroCirculo(radio);
    alert("La circunferencia del círculo es de " + circunferencia + " " + medida);
}

function calcularAreaCirculo () {
    const inputRadio = document.getElementById("circuloRadio");
    const radio = inputRadio.value;

    const InputMedida = document.getElementById("InputMedidaCirculo")
    const medida = InputMedida.value;

    const area = areaCirculo(radio);
    alert("El área del círculo es de " + area + " " + medida + "²");
}