function ehPrimo (num: number) : boolean {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return num > 1;
}

const listaDeNumeros: number[] = [20, 30, 35, 9, 70];
const existePrimo: boolean = listaDeNumeros.some((item: number) => ehPrimo(item));

console.log('existe primo?', existePrimo);