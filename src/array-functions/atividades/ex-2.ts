// 2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino. 

import data from './data';

const mulheres:Array<any> = data.filter((pessoa: any) => pessoa.sexo === 'F');
console.log(mulheres.length);