//2 -Escreva duas funções as duas receberam um array de números. Uma retornara os números pares e uma para retornar os números impares
//function numerosPares(numeros) {
 // código aqui
//}

//function numerosImpares(numeros) {
 // código aqui
//}

//const arrayNumeros = [7, 2, 8, 10, 9]
//const apenasPares = numerosPares(arrayNumeros);
//const apenasImpares = numerosImpares(arrayNumeros);

//console.log(apenasPares) // [2, 8, 10]
//console.log(apenasImpares) // [7, 9]

//node ex6.js

const arrayNumbers = [7, 2, 8, 10, 9];

function EvenNumbersSelector (arrayOfNumbers) {
     return arrayOfNumbers.filter ((number) => {
        const isEven = number % 2;
        if (isEven === 0){
            return number;
        }
    })
}

function OddNumbersSelector (arrayOfNumbers) {
    return arrayOfNumbers.filter ((number) => {
       const isOdd = number % 2;
       if (isOdd !== 0){
           return number;
       }
   })
}

const onlyEvenNumbers = EvenNumbersSelector (arrayNumbers);

const onlyOddNumberns = OddNumbersSelector (arrayNumbers);

console.log ("números pares",onlyEvenNumbers);

console.log ("números ímpares", onlyOddNumberns);
