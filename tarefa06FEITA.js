// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

simples = (capitalInicial, taxaJuros, tempo) => {
    montante = capitalInicial * ( 1 + taxaJuros * tempo)
    return console.log(`Juros Simples: R$${montante}`)
}

compostos = (capitalInicial, taxaJuros, tempo) => {
    taxa = 1 + taxaJuros
    montante = capitalInicial * Math.pow(taxa, tempo)
    return console.log(`Juros Compostos: R$${montante.toFixed(2).replace(".", ",")}`)
}

simples(1200, 0.02, 15)
compostos(620, 0.015, 24)