// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function triangulo (ladoUm, ladoDois, ladoTres){
    if (ladoUm === ladoDois && ladoDois === ladoTres){
       return console.log("Esse triângulo é equilátero!") 
    } else if (ladoUm === ladoDois || ladoDois === ladoTres || ladoTres === ladoUm){
        return console.log("Esse triângulo é isósceles!")
    } else {
        return console.log("Esse triângulo é escaleno!")
    }
}

triangulo(32, 32, 32)
triangulo(28, 28, 32)
triangulo(32, 28, 28)
triangulo(28, 32, 28)
triangulo(18, 28, 32)