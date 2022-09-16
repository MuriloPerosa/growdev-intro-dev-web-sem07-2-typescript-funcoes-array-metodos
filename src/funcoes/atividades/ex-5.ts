
// // 5. Crie um objeto para colocar nome e duas notas. 
// // Atribua nome e duas notas para o primeiro objeto, que será nosso primeiro aluno. 
// // Agora crie mais um objeto para colocar informações do nosso segundo aluno.
// // Mostre as informações de cada aluno no console. 
// // Mostre também a média do primeiro aluno e a média do segundo aluno. 
// // Por fim mostre a média desta turma de 2 alunos.

// interface Aluno {
//     nome: string,
//     nota1: number,
//     nota2: number
// }

// let aluno1 : Aluno = {
//     nome: 'Murilo',
//     nota1: 10,
//     nota2: 100,
// }

// let aluno2 : Aluno = {
//     nome: 'Murilo',
//     nota1: 10,
//     nota2: 100,
// }

// let aluno3 : Aluno = {
//     nome: 'Murilo',
//     nota1: 20,
//     nota2: 80,
// }

// function calcularMedia (aluno: Aluno) : number {
//     return (aluno.nota1 + aluno.nota2) / 2;
// }

// function calcularTurma (alunos: Array<Aluno>) : number {
//     let total:number = 0;

//     for (let i = 0; i < alunos.length; i++) {
//         total+=alunos[i].nota1;        
//         total+=alunos[i].nota2;        
//     }

//     if (total > 0) {
//         return total / alunos.length;
//     }

//     return 0;
// }

// console.log(`A média do Aluno 1 é ${calcularMedia(aluno1)}`);
// console.log(`A média do Aluno 2 é ${calcularMedia(aluno2)}`);
// console.log(`A média da Turma é ${calcularTurma([aluno1, aluno2, aluno3])}`);