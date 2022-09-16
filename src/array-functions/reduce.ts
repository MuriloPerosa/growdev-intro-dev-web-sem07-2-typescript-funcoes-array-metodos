let numeros: number[] = [10,20,30,40,50,60,70,80,90,100];

let soma: number = numeros.reduce((acumulador: number, proximo: number) => acumulador+=proximo, 0);

console.log('numeros', numeros);
console.log('soma', soma);
