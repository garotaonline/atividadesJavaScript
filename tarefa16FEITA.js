// Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

calculadora = (numeroUm, operacao, numeroDois) => {
    soma = numeroUm + numeroDois
    subtracao = numeroUm - numeroDois
    multiplicacao = numeroUm * numeroDois
    divisao = numeroUm / numeroDois
    switch (operacao) {
        case "+":
            return console.log(`${numeroUm} + ${numeroDois} = ${soma}`)
            break;
        case "-":
            return console.log(`${numeroUm} - ${numeroDois} = ${subtracao}`)
            break;
        case "*":
            return console.log(`${numeroUm} * ${numeroDois} = ${multiplicacao}`)
            break;
        case "/":
            return console.log(`${numeroUm} / ${numeroDois} = ${divisao.toFixed(2)}`)
            break;
        default:
            return console.log(`Operação inválida!`)
    }
}

calculadora(15, "+", 2)