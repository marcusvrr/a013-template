//const idadeDepentende = Number(prompt('solicitação de dependente \n Qual a idade do dependente'));
// console.log('prática 1 - if aninhamento e usando operadores')
// /*if(idadeDepentende>=13){
//     if(idadeDepentende<18){
//         console.log('Seu filho pode ter um cartão vinculado ao seu!');
//     }else{
//         console.log('Consulte outras possibilidades Labank');
//     }
// }else{
//     console.log('Consulte outras possibilidades Labank');
// }*/

// if(idadeDepentende>=13&&idadeDepentende<18){
//     console.log('Seu filho pode ter um cartão vinculado ao seu!');
//     }else{
//         console.log('Consulte outras possibilidades Labank');
// }

// console.log('prática 2 - if ternário');

// console.log(idadeDepentende===13? 'O dependente já pode ter um cartão':'Verifique as opções possiveis')

//console.log('prática 3 - switch case');

// switch(numeroRamal=Number(prompt('Solicitação de cartão crédito, Digite a opção desejada: \n 1-Fácil \n 2-Black \n 3- Platinum \n 4-Mater Gold'))){
//     case 1:
//         console.log('Cartão Fácil adquirido')
//         break;
//     case 2:
//         console.log('Cartão Black adquirido')
//         break;
//     case 3:
//         console.log('Cartão Platinum adquirido')
//         break;
//     case 4:
//         console.log('Cartão Master Gold adquirido')
//         break;
//     default:
//         console.log("Escolha umas das opções disponiveis")
// }

const numeroVerifica = Number(prompt('Digite um número!'));
// //parte a
// if((numeroVerifica%2)==0){
//         if((numeroVerifica%3)==0){
//             console.log('Seu número é divisivel por 2 e por 3!');
//         }else{
//             console.log('Seu número não é divisivel por 3');
//         }
//     }else{
//         console.log('Seu número não é divisivel por 2');
//     }
//parte b
    if((numeroVerifica%2)==0&&(numeroVerifica%3)==0){
            console.log('Seu número é divisivel por 2 e por 3!');
            console.log((numeroVerifica==30? 'UFA ACERTEI!':'não foi dessa vez :('))
            switch (numeroVerifica) {
                case 6:
                    console.log("6 é um dos numeros premiados");
                    break;
                case 12:
                    console.log("12 é um dos números premiados");
                    break;
                case 24:
                    console.log("24 é um dos números premiados");
                    break;
                case 30:
                    console.log("30 é um dos números premiados");
                    break;
                default:
                    console.log("O numero que você digitou e menor que 6 ou Maior que 30")
                    break;
            }
            }else{
                console.log('Seu número não é divisivel nem por 2 e nem por 3');
    }
//parte c
//no if anterior
//exer3

