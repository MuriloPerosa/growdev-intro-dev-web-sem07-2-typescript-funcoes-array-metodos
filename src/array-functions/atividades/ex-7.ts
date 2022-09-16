// 7. Utilize a função filter, para filtrar todas pessoas que o nome possua o sobrenome "Silva". 
// Imprima os nomes utilizando o MAP

import data from './data';

const silvas: Array<any> = data.filter((pessoa: any) => pessoa.nome.includes('Silva'));
silvas.map((pessoa: any) => console.log(pessoa.nome));
