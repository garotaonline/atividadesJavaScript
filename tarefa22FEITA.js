// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

anuidade = (mes, valor) => {
    compostos = (mes, valor) => {
        tempo = mes - 1
        taxa = 1 + 0.05
        montante = valor * Math.pow(taxa, tempo)
        juros = montante - valor
        return juros
    }
    if(mes != 1) {
        console.log(`Você terá que pagar R$${valor + compostos(mes, valor)}`)
    } else {
        console.log(`Você terá que pagar R$${valor}`)
    }
}

anuidade(3, 300)

