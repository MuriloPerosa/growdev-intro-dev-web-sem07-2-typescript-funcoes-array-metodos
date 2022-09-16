// 6. Utilize a função findIndex, para descobrir a posição da pessoa de nome 'Eva Trindade'.


import data from './data';

const posicao: number = data.findIndex((pessoa: any) => pessoa.nome === 'Eva Trindade');
console.log(posicao);