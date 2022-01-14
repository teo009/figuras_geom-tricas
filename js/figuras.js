console.group('Cuadrados')
function perimetroCuadrado(lado) {
    return lado * 4
}

function areaCuadrado(lado) {
    return (lado * lado)
} 
console.groupEnd()

console.group('Triángulos')
function perimetroTriangulo(lado1, lado2, ladoBase) {
    return (lado1+lado2+ladoBase)
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2
}

function alturaTriangulo(lado1, lado2, base) {
    if(lado1 === lado2) {
        const resultado = (lado1**2)-((base**2)/4)
    return(Math.sqrt(resultado))
    } else {
        return('Tu triángulo no es isosceles, revisa la medida de los lados') 
    }
}
console.groupEnd()

console.group('Círculos')

function diametroCirculo(radio) {
    return (radio * 2)
}

const PI = Math.PI

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio)
    return (diametro * PI)
}

function areaCirculo (radio) {
    return (radio * radio) * PI
}
console.groupEnd()

//Interactuando con HTML
let inputCuadrado = 0
let ladoTriangulo1 = 0
let ladoTriangulo2 = 0
let trianguloBase = 0
let trianguloAltura = 0

function htmlData() {
    const input1 = document.getElementById('input-cuadrado')
    inputCuadrado = input1.value
    const input2 = document.getElementById('input-1-triangulo')
    ladoTriangulo1 = input2.value
    const input3 = document.getElementById('input-2-triangulo')
    ladoTriangulo2 = input3.value
    const input4 = document.getElementById('input-base-triangulo')
    trianguloBase = input4.value
}
function calcularPerimetroCuadrado() {
    htmlData()
    const perimetro = perimetroCuadrado(inputCuadrado)
    alert(perimetro)
}
function calcularAreaCuadrado() {
    htmlData()
    const area = areaCuadrado(inputCuadrado)
    alert(area)
}
function calcularPerimetroTriangulo() {
    htmlData()
    console.log(ladoTriangulo1)
    console.log(ladoTriangulo2)
    console.log(trianguloBase)
    const perimetro = perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, trianguloBase)
    alert(perimetro)
}
function calcularAlturaTriangulo() {
    htmlData()
    trianguloAltura = alturaTriangulo(ladoTriangulo1, ladoTriangulo2, trianguloBase)
    alert(trianguloAltura)
}
function calcularAreaTriangulo() {
    htmlData()
    if(trianguloAltura === 0) {
        alert('Calcula altura antes de calcular área')
    } else {
        const area = areaTriangulo(trianguloBase, trianguloAltura)
        alert(area)
    }
}