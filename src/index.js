// Função que soma dois números
function somar(a, b) {
  return `A soma é, ${a+b}`;
}
console.log(somar(2, 3));

// Função que subtrai dois números
function subtrair(a, b) {
  return `A subtração é, ${a-b}`;
}
console.log(subtrair(5, 3));

// Função que multiplica dois números
function multiplicar(a, b) {
  return `A multiplicação é, ${a*b}`;
}
console.log(multiplicar(2, 3));


// Função que divide dois números, com verificação de divisão por zero
function dividir(a,b) {
  if (b === 0) {
    return("Erro: Não dividir por zero");
  }
          else {
        return `A divisão é, ${a/b}`;
      }
    }
  
console.log(dividir(6, 3));
// Função que verifica se um número é par
function ehPar(a,b) {
  if (a % 2 === 0) {
    return 'O número é par';
  } else {
    return 'O número é ímpar';
  }
}
console.log(ehPar(4, 3));

// Exporta todas as funções para serem usadas nos testes
module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
};
