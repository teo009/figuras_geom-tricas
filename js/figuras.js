//Código del cuadrado
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