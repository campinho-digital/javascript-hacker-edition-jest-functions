// Função que soma dois números
function somar(n1, n2) {
  return n1 + n2
}

// Função que subtrai dois números
function subtrair(n1,n2) {
  return n1 - n2
}

// Função que multiplica dois números
function multiplicar(n1,n2) {
  return n1 * n2
}

// Função que divide dois números, com verificação de divisão por zero
function dividir(n1,n2) {
  if(n1 === 0 || n2 === 0){
    throw new Error("Error");
    
  }
  return n1/n2
  
}
console.log(dividir(2,2));


// Função que verifica se um número é par
function ehPar(numero) {
  return numero % 2 === 0
}


function ehImpar(numer) {
  return numer % 3 === 0
}

// Exporta todas as funções para serem usadas nos testes
module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
  ehImpar,
};