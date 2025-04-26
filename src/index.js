// Função que soma dois números
function somar(a, b) {
  let soma = a + b
  return soma
}
console.log(somar(4, 3))

// Função que subtrai dois números
function subtrair(a, b) {
  let subtracao = a - b
  return subtracao
}
console.log(subtrair(4, 3))

// Função que multiplica dois números
function multiplicar(a, b) {
  let multiplicacao = a * b
  return multiplicacao
}
console.log(multiplicar(4, 3))

// Função que divide dois números, com verificação de divisão por zero
function dividir(a, b) {
  if(b === 0 && a !== 0){
    return "Impossível algum número por zero, além do zero"
  }
  else if (a === 0 && b === 0){
    return 0
  }
  else{
    let divisao = (a / b)
    let numeroArredondado = parseFloat(divisao.toFixed(2))
    return numeroArredondado
  }
}
console.log(dividir(0, 0))

// Função que verifica se um número é par
function ehPar(n) {
  if (n % 2 === 0){
    return `O número ${n} é par.`
  }
  else {
    return `O número ${n} é ímpar.`
  }
}
console.log(ehPar(4))

// Exporta todas as funções para serem usadas nos testes
module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
};
