// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

aumento = (plano, salario) => {
    planos = salario / 10
    planoA = planos
    planoB = (planos / 2) * 3
    planoC = planos * 2
    if (plano === "A"){
        return console.log(`Seu novo salário é: R$${salario + planoA}`)
    } else if(plano === "B"){
        return console.log(`Seu novo salário é: R$${salario + planoB}`)
    } else if(plano === "C"){
        return console.log(`Seu novo salário é: R$${salario + planoC}`)
    }

    switch(plano) {
        default: console.log("Plano inválido!")
    }
}

aumento("H", 1800)