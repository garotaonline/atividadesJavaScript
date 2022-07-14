// 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”

formula = (ax2, bx, c) => {
    delta = Math.pow(bx, 2) - (4*ax2*c)
    raiz = Math.sqrt(delta)
    divisao = 2*ax2
    contaUm = (-bx + raiz) / divisao
    contaDois = (-bx - raiz) / divisao
    if (delta === +delta) {
        return console.log(`${contaUm}, ${contaDois}`)
    } else {
        console.log("Delta é negativo")
    }
}

formula(1, 12, -13)