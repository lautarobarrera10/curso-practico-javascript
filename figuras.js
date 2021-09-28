// Código del cuadrado
console.group("Cuadrado");

// Lado
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " CM");

// Perímetro
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + " CM");

// Área
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("La área del cuadrado es de: " + areaCuadrado + " CM2");

console.groupEnd();


//Código del triángulo
console.group("Triángulo");

// Lados
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 + " CM, " 
    + ladoTriangulo2 + " CM y " 
    + baseTriangulo + " CM."
)

// Perímetro
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo mide: " + perimetroTriangulo + " CM.");

// Altura
const alturaTriangulo = 5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + " CM.");

// Área
const areaTriangulo = (alturaTriangulo * baseTriangulo) / 2;
console.log("El área del triángulo es de: " + areaTriangulo + " CM2.");

console.group();


//Código del círculo
console.group("Círculo")

// Radio
const radioCirculo = 4;
console.log("El radio del círculo es de: " + radioCirculo + " CM.")

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es de: " + diametroCirculo + " CM")

// PI
const PI = Math.PI;
console.log("El número PI es: " + PI)

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("La circunferencia del círculo es de: " + perimetroCirculo + " CM.")

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es de: " + areaCirculo + " CM2.")

console.groupEnd()