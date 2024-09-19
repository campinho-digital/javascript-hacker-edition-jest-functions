const {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
  ehImpar,
} = require("../src/index");

// Testes para a função somar
test("Soma dois números corretamente", () => {
    expect(somar(2,2)).toBe(4)
});


test("Soma dois números negativos corretamente", () => {
  expect(somar(-2,-2)).toBe(-4)
});

// Testes para a função subtrair
test("Subtrai dois números corretamente", () => {
  expect(subtrair(2,2)).toBe(0)
});

test("Subtrai com resultado negativo", () => {
  expect(subtrair(-2,2)).toBe(-4)
});

// Testes para a função multiplicar
test("Multiplica dois números corretamente", () => {
  expect(multiplicar(2,2)).toBe(4)
});

test("Multiplica número por zero", () => {
  expect(multiplicar(2,0)).toBe(0)
});

// Testes para a função dividir
test("Divide dois números corretamente", () => {
  expect(dividir(2,2)).toBe(1)
});

test("Lança erro ao dividir por zero", () => {
  expect(() => dividir(2, 0)).toThrow('Error')

});

// Testes para a função ehPar
test("Verifica se o número é par", () => {
  expect(ehPar(2)).toBe(true)
});

test("Verifica se o número é ímpar", () => {
  expect(ehImpar(3)).toBe(true)
});
