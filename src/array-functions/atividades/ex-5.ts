// 5. Utilize a função Some, para descobrir se existe algum salário superior a R$ 7.000,
// imprima verdadeiro no console caso exista, caso contrário falso.


import data from './data';

const existe: boolean = data.some((pessoa: any) => pessoa.salario > 7000);
console.log(existe);