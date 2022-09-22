//EXERCÍCIO 01 - variáveis

// let nomeProduto = prompt('Insira o nome de um produto, por favor')

// let precoProduto = Number(prompt('Insira o valor de um produto'))
// precoProduto = precoProduto - 1
// console.log(`O nome do produto é ${nomeProduto}, e seu preço é de ${precoProduto} reais`);

//EXERCÍCIO 02 - operadores aritiméticos

// let num1=Number(prompt('Insira um número'))
// let num2=Number(prompt('Insira outro número'))

// let soma=num1+num2
// let subtracao=num1-num2
// let multiplicacao=num1*num2
// let divisao=num1/num2
// let resto=num1%num2

// console.log(`A soma entre ${num1} e ${num2} é igual a ${soma}`);
// console.log(`A subtração entre ${num1} e ${num2} é igual a ${subtracao}`);
// console.log(`A multiplicação entre ${num1} e ${num2} é igual a ${multiplicacao}`);
// console.log(`A divisão entre ${num1} e ${num2} é igual a ${divisao}`);
// console.log(`O resto da divisão entre ${num1} e ${num2} é igual a ${resto}`);

//EXERCÍCIO 03 - Comparadores

// const numeroSorteado=8

// let numeroUsuario=Number(prompt('Insira um número'))

// let verificacaoMenor=numeroSorteado<numeroUsuario
// let verificacaoMaior=numeroSorteado>numeroUsuario
// let verificacaoIgual=numeroSorteado===numeroUsuario

// console.log(`O número escolhido é menor que o sorteado? ${verificacaoMenor}`);
// console.log(`O número escolhido é maior que o sorteado? ${verificacaoMaior}`);
// console.log(`O número escolhido é igual ao sorteado? ${verificacaoIgual}`);

//EXERCÍCIO 04 - Operadores Lógicos

// let maiorIdade=Number(prompt('Qual a sua idade?'))
// let verificacaoAltura=prompt('Qual a sua altura em cm?')
// let problemaCardiaco=prompt('Você tem problemas cardíacos? S/N')

// if (maiorIdade>=18 && verificacaoAltura >=160 && problemaCardiaco==='N') {
//     console.log('Uhuul!! É hora de aventura');
// }else{
//     console.log('Infelizmente você não completou os requisitos para entrar nessa aventura :/');
// }

//EXERCÍCIO 5 - Strings

// const fraseCenoura='  Hoje vou comer cenoura, ebaaa  '

// console.log(fraseCenoura, fraseCenoura.length);
// console.log(fraseCenoura, fraseCenoura.trim());
// console.log(fraseCenoura, fraseCenoura.toLowerCase());
// console.log(fraseCenoura.includes('cenoura'), fraseCenoura.includes('batata'));
// console.log(fraseCenoura.replaceAll('cenoura', 'batata'));
// console.log(fraseCenoura.includes('comer'), fraseCenoura.includes('batata'));

// EXERCÍCIO 06 - Arrays

// let listaCompras=['batata', 'cenoura','beterraba']

// console.log(`O segundo item da lista é ${listaCompras[1]}`);
// console.log(`O tamanho da lista é de ${listaCompras.length} itens`);

// listaCompras.push('Mandioca')

// console.log(`Segue lista atualizada de compras: ${listaCompras}`);
// console.log(listaCompras.includes('cenoura'));
// console.log(listaCompras.splice(1));

//EXERCÍCIO 07 - Funções

// const array=[14,12,16,18,20]

// function numbers (arrayNumerico) {
//     const primeiro = arrayNumerico[0]/2
//     const segundo = arrayNumerico[arrayNumerico.length-1]

//     arrayNumerico=primeiro
//     arrayNumerico[arrayNumerico.length-1]=segundo
//     return arrayNumerico
// }
// console.log(numbers(array));

//EXERCÍCIO 08 - OBJETOS

// const pessoa={
//     nome: 'Leonardo',
//     idade:26,
//     generoMusicalPreferido: 'Rap'
// }

// console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusicalPreferido}`);

// const novaPessoa={
//     ...pessoa,
//     nome: 'Amanda'
// }

// console.log(`O nome da pessoa é ${novaPessoa.nome}, ela tem ${novaPessoa.idade} anos e gosta muito de ${novaPessoa.generoMusicalPreferido}`);

//EXERCÍCIO 09 - Condicionais

// let numeroUsuario=Number(prompt('Insira um número'))

// if (numeroUsuario%2===0) {
//     console.log('É par');
// } else {
//     console.log('É impar');
// }

// EXERCÍCIO 10 - Condicionais.2

// const nomeDoPet=prompt('Insira a espécie de um pet')

// switch (nomeDoPet) {
//     case 'cachorro':
//         console.log('AuAu');
//         break;
//     case'gato':
//         console.log('Miau');
//         break;
//     case 'vaca':
//         console.log('Muuu');
//         break;
//     default:
//         console.log('Sem barulho reconhecido :/');
//         break;
// }

// EXERCÍCIO 11 - loops

// const arrayNumeros=[11,15,18,14,26,28]

// for (const numero of arrayNumeros) {
//     if (numero>arrayNumeros) {
//         console.log(`O número é maior que 28`);
//     }
// }

