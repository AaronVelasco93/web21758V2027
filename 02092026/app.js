// Recibe un arreglo de números y devuelve el arreglo ordenado utilizando 
// el algoritmo de ordenamiento rápido (Quick Sort)
function quickSort(arr) {
    //verificamos si el arreglo tiene 1 o menos elementos, 
    // en ese caso ya está ordenado
    if (arr.length <= 1) {
        return arr;
    }
    //tomamos el último elemento del arreglo como pivote
    const pivot = arr[arr.length - 1];
    //creamos dos arreglos para almacenar los elementos 
    // menores y mayores al pivote
    const left = [];
    const right = [];
    //iteramos sobre el arreglo y comparamos cada elemento con el pivote
    for (let i = 0; i < arr.length - 1; i++) {
        //si el elemento es menor que el pivote, 
        // lo agregamos al arreglo izquierdo
        if (arr[i] < pivot) {
            //agregamos el elemento al arreglo izquierdo

            left.push(arr[i]);
        } else {
            //si el elemento es mayor o igual al pivote,
            // lo agregamos al arreglo derecho
            right.push(arr[i]);
        }
    }
    //llamamos recursivamente a la función quickSort 
    // para ordenar los arreglos izquierdo y derecho
    // y concatenamos los resultados con el pivote en el medio
    // los ... operadores de propagación se utilizan para expandir
    //  los elementos de los arreglos izquierdo y derecho en el 
    // nuevo arreglo resultante
    return [...quickSort(left), pivot, ...quickSort(right)];
}   
let numeros = [5, 3, 8, 4, 2];
let numerosOrdenados = quickSort(numeros);
console.log(numerosOrdenados);