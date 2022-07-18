// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

divisao = (dividendo, divisor) => {
    sobra = dividendo % divisor
    dividido = dividendo / divisor
    return console.log(`${dividendo} / ${divisor} = ${parseInt(dividido)}, e sobra: ${sobra}`)
}

divisao(26, 2)