//Pegue um array de inteiros e retorne a soma de todos os elementos.
//### ENTRADA EXEMPLO
//[3, 7, 1]

//### SAIDA EXEMPLO
//11


const inputData = [11, 5, 8, 2];


let total = 0;

const arrayOfResults = inputData.map( (item) => {
    const result = total + item;
    total = result;
    return result;
})

const finalResult = arrayOfResults.pop();

console.log (finalResult);