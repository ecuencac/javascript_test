//let nombre = prompt('Cual es tu nombre?');
//let edad = prompt('Cual es tu edad?');

//document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad} años`;

(function(tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
})('Javascript');

// Crear un array
const numero = [10, 20, 30, 40, 50, 60];
const meses = new Array('Enero','Febrero','Marzo','Abril');
console.log(Array.isArray(meses));

meses[4] = 'Mayo';
meses.push('Junio');

console.log(meses.indexOf('Abril'));

//Añade primer elemento
meses.unshift('Mes 0');

//Eliminar último elemento
meses.pop()

//Eliminar primer elemento
meses.shift();

// Quitar un rango
meses.splice(2,1);

// Revertir array
meses.reverse();

console.log(meses);

// Concatenar arrays
let arreglo1 = [1,2,3],
    arreglo2 = [9,8,7];

console.log(arreglo1.concat(arreglo2));

// Ordenar un arreglo
const frutas = ['Platano','Manzanas','Fresa','Naranja'];
frutas.sort();
console.log(frutas);

// Ordenar números
let arreglo3 = [3, 9, 91, 92, 93, 23, 45, 56, 1, 39];

arreglo3.sort(function(x, y) {
    return x - y;
    // Revertir el orden con: return y - x;
})
console.log(arreglo3);



obtenerClientes();
try {
    algo(); // No existe, por lo que da error
} catch (error) {
    console.log(error);
} finally {
    console.log('No le importa, ejecuta de todos modos');
}


obtenerClientes(); // No lo carga por el error

function obtenerClientes() {
    console.log('Descargando...');

    // Lanzar función asincrona
    setTimeout(function(){
        console.log('Completo');
    }, 3000);
}



const diaHoy = new Date();

let valor;
// Mes
valor = diaHoy.getMonth();
// Dia
valor = diaHoy.getDate();
// Día de la semana (?)
valor = diaHoy.getDay();
// Año
valor = diaHoy.getFullYear();
// Minutos
valor = diaHoy.getMinutes();
// Horas
valor = diaHoy.getHours();

// Milisegundos desde 1970
valor = diaHoy.getTime();


valor = diaHoy.getFullYear();
valor = diaHoy.setFullYear(2016);
valor = diaHoy.getFullYear();


console.log(valor);