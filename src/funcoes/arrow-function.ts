let usuario: string = "João da Silva";
let idade: number = 17;
let ativo: boolean = true;
let conhecimentos : string[] = ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'PHP'];
let tarefas: string[] = ['tarefa 1', 'tarefa 2'];

const validaAtivo = (active: boolean, name: string, tecs: Array<string>) : object => {
    if (active) {
        return {
            name,
            active, 
            tecs,
            message: 'Ativo no sistema!'
        };
    }

    return {
        mensagem: 'Não encontrado ou inativo no sistema!',
    };

}

const newFunction = () : void => {
    console.log('New Function');
};

const concatena = (text1:string, text2:string) : string => `${text1} ${text2}`;

const concatena2 = (text1:string, text2:string) : string => {
    return `${text1} ${text2}`;
};

let resultado: object = validaAtivo(ativo, usuario, conhecimentos);
console.log('arrow function');
console.log(resultado);
newFunction();

let texto : string = concatena('O Murilo', 'gosta de TypeScript');
console.log(texto);
