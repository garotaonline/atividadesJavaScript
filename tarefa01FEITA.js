// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function conta (numeroUm, numeroDois) {
    soma = numeroUm + numeroDois
    subtraçao = numeroUm - numeroDois
    multiplicacao = numeroUm * numeroDois
    divisao = numeroUm / numeroDois

    return console.log(`Soma: ${numeroUm} + ${numeroDois} = ${soma},
    Subtracão: ${numeroUm} - ${numeroDois} = ${subtraçao}, Multiplicação: ${numeroUm} * ${numeroDois} = ${multiplicacao}, Divisão: ${numeroUm} / ${numeroDois} = ${divisao}.`)
}

conta(44, 26)