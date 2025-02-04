// Ejercicio G.1. Suma de los números pares

const numeros = [1,2,3,4,5]

function sumaNumerosPares(numeros){
    let suma = 0

    for(const numero of numeros){
        if(numero %2 == 0){
            suma += numero
        }
    }

    return suma
}

console.log('Ejercicio G.1 = ', sumaNumerosPares(numeros))


//Ejercicio G.2. Eliminar las consonantes

const cadena = 'Hola Mundo'

function eliminarConsonantes(cadenaInput){
    let vocales = ''

    const cadenaArray = cadenaInput.toLowerCase().split('')

   for(const letra of cadenaArray){
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
        vocales += letra
    }
   }

   return vocales
}

console.log('Ejercicio G.2. = ', eliminarConsonantes(cadena))


//Ejercicio G.3 Temperatura en grados

function celsiusAFahrenheit(gradoCelsius){
return gradoCelsius * (9/5) + 32
}

console.log('Ejercicio G.3. = ' , celsiusAFahrenheit(20))

//Ejercicio G.4 Pares o impares

function checkNumber(numero){
    if(numero % 2 == 0){
        return 'Número Par'
    } else {
        return 'Número Impar'
    } 
}

//Ejercicio G.5 Mayúsculas o minúsculas

const promptUsuario = prompt('Escribe la cadena a evaluar')

function mayusOMinus(cadenaDeTexto){
    if(promptUsuario == promptUsuario.toUpperCase()){
        return alert('La cadena está en mayúsculas')
} else if (promptUsuario == promptUsuario.toLowerCase()) {
    return alert('La cadena está en minùscuas')
}
else {
    return alert('La cadena tiene ambas Mayus y Minus')
}
}

mayusOMinus(promptUsuario)

//Ejercicio G.6 Todo en Mayusculas

const topics = [
    'JavaScript' ,
    'Variables' ,
    'funciones' ,
    'condicionales' ,
    'bucles'
]

function invertirMayus(array){
    const arrayMayus = array.map((topics)=>{
        return topics.toUpperCase()
    })

    arrayMayus.reverse()
    return arrayMayus 
}

console.log('Ejercicio G.6 = ', invertirMayus(topics))

//Ejercicio G.7 Separar los pares

const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 7485, 2683]

function paresArray(arrayNumeros){
    return arrayNumeros.filter(numero => numero % 2 == 0)
}

console.log('Ejercicio G.7=' , paresArray(number))

// Ejercicio G.8 Concatenación de métodos

const meses = [
    'enero' ,
    'febrero' ,
    'marzo' ,
    'abril' ,
    'mayo' ,
    'junio' ,
    'julio' ,
    'agosto' ,
    'septiembre' ,
    'octubre' ,
    'noviembre' ,
    'diciembre'
]

function mesesLargosMayusculas (arrayMeses){
    return arrayMeses.filter((mes)=> mes.length > 7).map((mes)=> {return mes.toUpperCase()})
}

console.log('Ejercicio G.8 = ', mesesLargosMayusculas(meses))