// 3. Imprima no console a soma do salário de todas as pessoas.

import data from './data';

const salarioTotal: number = data.reduce((acumulador: number, pessoa: any) => acumulador+=pessoa.salario, 0);
console.log(salarioTotal);