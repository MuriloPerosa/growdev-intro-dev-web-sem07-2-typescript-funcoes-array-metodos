// 3. Crie uma função chamada mostrarDobro(num), que recebe um parâmetro sendo um número inteiro. 
// Esta função será chamada ao abrir a página e mostrará um alerta com o resultado.
// Exemplo: “O dobro do número 5 é 10.” 

let numero: number = 20;

function mostrarDobro(num: number): void {
    console.log(`O dobro de ${num} é ${num*2}`);
}

mostrarDobro(20);