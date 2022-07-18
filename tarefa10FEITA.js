// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

inteiro = numero => {
    if(numero % 3 === 0) {
        return console.log("true")
    } else {
        console.log("false")
    }
}

inteiro(7)