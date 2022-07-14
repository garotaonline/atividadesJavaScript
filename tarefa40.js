// 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.

notas = listaDeNotas => {
    for(let i=0; i <= listaDeNotas.length; i++) {
        if (listaDeNotas[i] <= 4.9 ) {
            return console.log("conceito D")
        } else if (listaDeNotas[i] >= 5 && listaDeNotas[i] <= 6.9){
            return console.log(" conceito C")
        } else if (listaDeNotas[i] >= 7 && listaDeNotas[i] <= 8.9) {
            console.log("conceito B")
        } else if (listaDeNotas[i] >= 9 && listaDeNotas[i] <= 10) {
            console.log("conceito A")
        } else {
            console.log("Nota invalida")
        }
    }
}

notas([2, 6, 10])

