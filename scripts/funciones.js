// Sesión de Funciones

/*
Hoisting:
Es fundamental en el entendimiento de la forma en que se ejecuta nuestro código de JS,esto aplica tanto para variables como para funciones. 

Cómo tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es mucho más intuitivo, lo que hace a grades rasgos es "elevar" las funciones y variables declaradas dentro del código.

Yo puedo invocar una función antes de siquiera declararla. 
*/

/*

Scope : 

El concepto scope hace referencia al alcance que tiene
una variable dentro de un código JS.

var, let y const.

var : global - quiere decir que se puede utilizar o
trabajar con esta variable dentro de cualquier
parte del código

let : porque además de funcionar de manera global
en caso de ser requerida, también puede solo ser
utilizada de manera local.

const : se refiere, por su nombre tan intuitivo,
a la palabra constante, esto quiere decir que su
valor no puede ser reasignado.

El uso de la palabra reservada 'var' no es tan recomendado
por el comportamiento y la poca adaptabilidad de una
variable.

Entonces, se implementan let y const como una 
alternativa mucho más eficiente para determinar el 
Scope o alcance que tiene una variable.

*/

//Funciones, invocación y declaración

//Declaración de una función

/*

1.palabra reservada - function

2.nombre de la funcion - nombreFuncion
3.establecer parametros -recibe de 0 a n parametros y se encasillan
4.dentro un paréntesis ()

5.establecer el bloque de código sobre el que vamos a trabajar
lo hacemos mediante llaves {
codigo a ejecutar
}

JS, cuando es ejecutado por el motor JS del navegador,
primero lee e interpreta las variables y las
funciones declaradas.
*/


// Ejemplo de función pero no retorna ningún valor
// No recibe ningún parámetro
    function nuevaFuncion(){
        console.log("Buenos días CH28");
    }

    nuevaFuncion();

    // Ejemplo de función que si retorna un valor
    // También recibe un parámetro
    function holaMundo(nombre){
        return "Hola " + nombre; // Si retorna un valor
    }

//holaMundo("Fernando");
//console.log(holaMundo("Fernando"));

/*
Elaborar una función que calcule la velocidad de un objeto

-velocidad =distancia /tiempo
-function
-calcularVelocidad
(distancia, tiempo)
-elaborar el bloque de código
*/

function calcularVelocidad(distancia,tiempo){
    let velocidad = distancia/tiempo;
    return "La velocidad calculada es" + velocidad + "m/s";
}

    function calcularVelocidad(distancia,tiempo){
        return "La velocidad calculada es:"  + distancia/tiempo +  "m/s";
    }

    console.log(calcularVelocidad(90,5));


    //Funciones dentro de JS

/*
Funciones flecha | fat arrow | funciones lambda

Funciones anonimas
Funciones callback- que reciben otras funciones como paraámetroos

Promesas

Funciones async -await

Son una manera más compacta y sencilla de escribir una función normal

No son lo mismo que una función general, se utiliza en otro tipo de contectoFunciones Callback que requiern funciones anonímas.

Su uso es limitado

Deckaración de una función flecha. 

var, let, const

const.-buena practica utilizar let para declarar funciones flecha o lambda.

1.nombreFuncionn
2.parámetros
3.Establecer el bloque de código o procesos que va a ejecutar esta función.

=> Fat arrow

*/

    // Funcion general
        function funcionNormal1 (parametro){
            return "hola" + parametro;
        }
    // Funcion flecha - Arrow Function
    //Función flecha más general
        const funcionFlecha = parametro => "Hola" + parametro;

    //Funciones flecha con más parámetros
    const funcionVariosParametros =(datoA, datoB)=>{
        let datoC =datoA + datoB;
        return 'La suma de datosA + datoB =' + datoC;
    }

    //Funciones flecha sin recibir un parámetro
    const funcionSinParametros = () => {
    return "Funcion flecha que no recibe parametros";
    }

        //Funcion flecha para calcular la velocidad

        const calcularVelocidadFlecha =(distanciaFlecha, tiempoFlecha) =>{
            console.log('distancia =' + distanciaFlecha);
            console.log('tiempo =' + tiempoFlecha + 'segundo');
            return 'La velocidad es =' + distanciaFlecha/tiempoFlecha +   'm/s';
        }

    // Ejercicios

/*

Realizar una función que realice o saatisfaga los siguientes escenarios

Realizar en manera de función general y funcion flecha.

1. Calcular el cuadrado de un número.

2. Escribir un código que convierta de grados celsius
a grados farenheit

3. Realizar una función que calcule el valor de
Voltaje, recibiendo como entradas o parámetros
Resistencia y Corriente.

4. Elaborar una función que calcule el volumen de
un cubo, recibiendo como dato de entrada Lado.

5. Calcular el área de un triángulo

6. Calcular el volumen de una esfera

7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

*/

//Calcular el cuadrado de un número
function cuadradoDeUnNumero(numero){
    return numero**2;
}

const cuadradoDeUnNumeroFlecha = (numero)=>{
    return numero**2;
}

//Escribir un código que convierta de grados celsius a grados farenheit

function convertidorDeGrados(grado){
    return (grado * 1.8)+ grado;
}

const convertidorDeGradosFlecha = (grado) =>{
    return (grado * 1.8)+ grado;
}

//Realizar una función que calcule el valor de Voltaje, recibiendo como entradas o parámetrosResistencia y Corriente.

function calcularElVoltaje (resistencia, corriente){
    return corriente * resistencia;
}

const calcularElVoltajeFlecha=(resistencia, corriente)=>{
    return corriente * resistencia;
}

//Elaborar una función que calcule el volumen de un cubo, recibiendo como dato de entrada Lado.

function volumenDeUnCubo (lado){
    return lado * 3;
}


const volumenDeUnCuboFlecha=(lado)=>{
    return lado * 3;
}

//Calcular el área de un triángulo

function areaDeUnTriangulo(base,altura){
    return (base*altura)/2;
}

const areaDeUnTrianguloFlecha = (base,altura) =>{
    return (base*altura)/2;
}

//Calcular el volumen de una esfera

function volumenDeUnaEsfera (radio){
    return (.75 *3.1416)*radio;
}

const volumenDeUnaEsferaFlecha = (radio) =>{
    return (1.3 *3.1416)*radio;
}

//Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

function metodoTUC (oracion){
    return oracion.toUpperCase();
}

const metodoTUCFlecha=(oracion)=>{
     return oracion.toUpperCase();
}

