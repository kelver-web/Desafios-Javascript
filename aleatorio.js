/*

[ ] Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100.

Não pense que estamos somando 10 + 1 e multiplicando por Math.random(). Na verdade, multiplicamos 10 por Math.random() e, somente depois, somamos uma unidade.

*/

let aleatorio = parseInt(Math.random() * 100 + 1)
console.log(aleatorio)
