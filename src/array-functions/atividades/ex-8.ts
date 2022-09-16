// 8. Crie cinco objetos JavaScript dentro de um Array contendo nome(texto), idade(número), skills (array), 
// ou seja um total de cinco alunos. Agora crie uma função que receba estes cinco objetos e mais um parâmetro 
// skill. Dependendo da skill enviada mostrar no console.log(), 
// quais alunos têm a skill enviada por parâmetro, mostrar todo o objeto.
// Exemplo: Pedro, 24, [JavaScript, TypeScript, React]. 
// Se mandar chamar a função enviando (alunos, “JavaScript”), 
// precisa mostrar o Pedro e qual mais se encaixa nessa skill.


interface Aluno {
    nome: string, 
    idade: number, 
    skills: string[],
}

const alunos : Aluno[] = [
    {
        nome: 'Pedro', 
        idade: 24,
        skills: ['JavaScript', 'TypeScript', 'React'],
    },
    {
        nome: 'Murilo', 
        idade: 24,
        skills: ['JavaScript', 'TypeScript', 'PHP'],
    },
    {
        nome: 'Bolt', 
        idade: 16,
        skills: ['HTML', 'CSS', 'PHP'],
    },
    {
        nome: 'Cláudio', 
        idade: 25,
        skills: ['HTML', 'CSS', 'C#'],
    },
    {
        nome: 'Snoopy', 
        idade: 25,
        skills: ['Node', 'MongoDb', 'PHP'],
    },
];

const filterBySkill = (turma: Aluno[], skill: string) : void => {
    const selecionados : any[] = turma.filter((aluno: Aluno) => aluno.skills.includes(skill));

    console.log(`Os alunos que tem a skill '${skill}' são:`);

    selecionados.map((aluno: Aluno) => console.log(aluno));
}

filterBySkill(alunos, 'TypeScript');