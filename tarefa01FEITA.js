// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function conta (numeroUm, numeroDois) {
    soma = numeroUm + numeroDois
    subtracao = numeroUm - numeroDois
    multiplicacao = numeroUm * numeroDois
    divisao = numeroUm / numeroDois

    return console.log(`Soma: ${numeroUm} + ${numeroDois} = ${soma}, Subtracão: ${numeroUm} - ${numeroDois} = ${subtracao}, Multiplicação: ${numeroUm} * ${numeroDois} = ${multiplicacao}, Divisão: ${numeroUm} / ${numeroDois} = ${divisao.toFixed(2)}.`)
}

conta(44, 2)