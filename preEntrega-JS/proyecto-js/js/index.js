let iniciar = true

while (iniciar) {
    let comprar = prompt("Bienvenid@ a Fontana de Luna. Elegí tu opción de compra \n1-Combo Matero \n2-Agenda \n3-Botella Deportiva \n4-Vaso con Sorbete \n5-Salir")
    let resultado = 0
    let cantidad = 0
    let totalFinal = 0

    function multiplicar(precio, cantidad){
        resultado = precio * cantidad
    }

    switch(comprar){
        case "1":
            cantidad = prompt("Elegiste Combo Matero $2500, cuántos vas a querer?")
            multiplicar(2500, cantidad)
            alert("Precio total Combo Matero " + resultado)
            break;
        case "2":
            cantidad = prompt("Elegiste Agenda $3000, cuántas vas a querer?")
            multiplicar(3000, cantidad)
            alert("Precio total Agenda " + resultado)
            break;
        case "3":
            cantidad = prompt("Elegiste Botella Deportiva $1100, cuántas vas a querer?")
            multiplicar(1100, cantidad)
            alert("Precio total Botella Deportiva " + resultado)
            break;
        case "4":
            cantidad = prompt("Elegiste Vaso con Sorbete $1300, cuántos vas a querer?")
            multiplicar(1300, cantidad)
            alert("Precio total Vaso con Sorbete " + resultado)
            break;
        case "5":
            iniciar = false
            break;
        default:
            alert("No se encontró el producto. Elegí opción 1, 2, 3, 4 o 5")   
    }
}

alert("Gracias por visitar Fontana de Luna!!! Te esperamos la próxima :)")
// let comprar = prompt("Bienvenid@ a Fontana de Luna. Elegí tu opción de compra \n1-Combo Matero \n2-Agenda \n3-Botella Deportiva \n4-Vaso con Sorbete \n5-Salir")
// let resultado = 0
// let cantidad = 0
// let totalFinal = 0

// function multiplicar(precio, cantidad){
//     resultado = precio * cantidad
// }



// switch(comprar){
//     case "1":
//         cantidad = prompt("Elegiste Combo Matero $2500, cuántos vas a querer?")
//         multiplicar(2500, cantidad)
//         alert("Precio total Combo Matero " + resultado)
//         break;
//     case "2":
//         cantidad = prompt("Elegiste Agenda $3000, cuántas vas a querer?")
//         multiplicar(3000, cantidad)
//         alert("Precio total Agenda " + resultado)
//         break;
//     case "3":
//         cantidad = prompt("Elegiste Botella Deportiva $1100, cuántas vas a querer?")
//         multiplicar(1100, cantidad)
//         alert("Precio total Botella Deportiva " + resultado)
//         break;
//     case "4":
//         cantidad = prompt("Elegiste Vaso con Sorbete $1300, cuántos vas a querer?")
//         multiplicar(1300, cantidad)
//         alert("Precio total Vaso con Sorbete " + resultado)
//         break; 
//     default:
//         alert("No se encontró el producto. Elegí opción 1, 2, 3 o 4")   
// }