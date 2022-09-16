// 4. Imprima no console a soma do salario de todos as pessoas do sexo Masculino.

import data from './data';

const salarioTotal: number = data.reduce((acumulador: number, pessoa: any) => {
    if (pessoa.sexo === 'M') {
        return acumulador+=pessoa.salario;
    }
    return acumulador;
}, 0);
console.log(salarioTotal);