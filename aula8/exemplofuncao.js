let num1 = 6;
let num2 = 7;
let num3 = 8;
let num4 = 9;

function soma(num1, num2, num3, num4){
    let soma=num1+num2+num3+num4

    console.log(`a soma das quatro notas é ${soma}`)
}
soma(num1, num2, num3, num4)


function multiplicação(num1, num2, num3, num4){
    let multiplicação = num1*num2*num3*num4

    console.log(`a multiplicação das notas é de ${multiplicação}`)
}
multiplicação(num1, num2, num3, num4)

function media(num1, num2, num3, num4){
    let media = (num1+num2+num3+num4)/4

    console.log(`a média é de ${media}`)

    if(media < 5 && media < 7){
        console.log("Recuperação");
     }
     else if(media>= 5 && media<7){
        console.log("Aprovado");
     }
     else {
        console.log("Reprovado");
     }
}
media(num1, num2, num3,  num4)
