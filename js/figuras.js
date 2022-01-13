console.group('Cuadrados')
function perimetroCuadrado(lado) {
    return lado * 4
}

function areaCuadrado(lado) {
    return (lado * lado)
} 
console.groupEnd()

function perimetroTriangulo(lado1, lado2, ladoBase) {
    return (lado1 + lado2 + ladoBase)
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2
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
function calcularPerimetroCuadrado() {
    const input = document.getElementById('input-cuadrado')
    const value = input.value
    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}
function calcularAreaCuadrado() {
    const input = document.getElementById('input-cuadrado')
    const value = input.value
    const area = areaCuadrado(value)
    alert(area)
}