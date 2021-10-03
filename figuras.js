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

// Altura de un triángulo isósceles
function alturaIsosceles(ladoA, ladoB) {
    const altura = Math.sqrt((ladoA ** 2) - ((ladoB / 2) ** 2));
    return altura;
}

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
    
    const resultadoTexto = document.getElementById("resultadoCuadradoTexto")
    resultadoTexto.innerText = "El perímetro del cuadrado es de " ;

    const resultado = document.getElementById("resultadoCuadrado")
    resultado.innerText = perimetro + " " + medida;

}

function calcularAreaCuadrado() {
    const inputCuadrado = document.getElementById("InputCuadrado");
    const valueCuadrado = inputCuadrado.value;

    const inputMedida = document.getElementById("InputMedidaCuadrado")
    const medida = inputMedida.value;

    const area = areaCuadrado(valueCuadrado);
    
    const resultadoTexto = document.getElementById("resultadoCuadradoTexto")
    resultadoTexto.innerText = "El área del cuadrado es de " ;

    const resultado = document.getElementById("resultadoCuadrado")
    resultado.innerText = area + " " + medida + "²";
}

//Círculo


function calcularDiametroCirculo() {
    const inputRadio = document.getElementById("circuloRadio");
    const radio = inputRadio.value;

    const InputMedida = document.getElementById("InputMedidaCirculo")
    const medida = InputMedida.value;

    const diametro = diametroCirculo(radio);
    
    const resultadoTexto = document.getElementById("resultadoCirculoTexto")
    resultadoTexto.innerText = "El díametro del círculo es de " ;

    const resultado = document.getElementById("resultadoCirculo")
    resultado.innerText = diametro + " " + medida;
}

function calcularCircunferenciaCirculo() {
    const inputRadio = document.getElementById("circuloRadio");
    const radio = inputRadio.value;

    const InputMedida = document.getElementById("InputMedidaCirculo")
    const medida = InputMedida.value;

    const circunferencia = perimetroCirculo(radio);

    const resultadoTexto = document.getElementById("resultadoCirculoTexto")
    resultadoTexto.innerText = "La circunferencia del círculo es de " ;

    const resultado = document.getElementById("resultadoCirculo")
    resultado.innerText = circunferencia + " " + medida;
}

function calcularAreaCirculo () {
    const inputRadio = document.getElementById("circuloRadio");
    const radio = inputRadio.value;

    const InputMedida = document.getElementById("InputMedidaCirculo")
    const medida = InputMedida.value;

    const area = areaCirculo(radio);

    const resultadoTexto = document.getElementById("resultadoCirculoTexto")
    resultadoTexto.innerText = "El área del círculo es de " ;

    const resultado = document.getElementById("resultadoCirculo")
    resultado.innerText = area + " " + medida + "²";
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
      
    const resultadoTexto = document.getElementById("resultadoTrianguloPerimetroTexto")
    resultadoTexto.innerText = "El perímetro del triángulo es de " ;

    const resultado = document.getElementById("resultadoTrianguloPerimetro")
    resultado.innerText = perimetro + " " + medida;
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("trianguloBase");
    const base = Number(inputBase.value);

    const InputMedida = document.getElementById("InputMedidaTriangulo2")
    const medida = InputMedida.value;

    const inputAltura = document.getElementById("trianguloAltura");
    const altura = Number(inputAltura.value);

    const area = areaTriangulo(altura, base);

    const resultadoTexto = document.getElementById("resultadoTrianguloAreaTexto")
    resultadoTexto.innerText = "El área del triángulo es de " ;

    const resultado = document.getElementById("resultadoTrianguloArea")
    resultado.innerText = area + " " + medida + "²";
}

function calcularAlturaTrianguloIsosceles() {
    const ladoAInput = document.getElementById("alturaIsoscelesLadoA")
    const ladoA = Number(ladoAInput.value);

    const ladoBInput = document.getElementById("alturaIsoscelesLadoB")
    const ladoB = Number(ladoBInput.value);

    const InputMedida = document.getElementById("InputMedidaTriangulo3")
    const medida = InputMedida.value;

    const altura = alturaIsosceles(ladoA, ladoB);

    const resultadoTexto = document.getElementById("resultadoTrianguloAlturaIsoscelesTexto")
    resultadoTexto.innerText = "La altura del triángulo isósceles es de " ;

    const resultado = document.getElementById("resultadoTrianguloAlturaIsosceles")
    resultado.innerText = altura + " " + medida;
}