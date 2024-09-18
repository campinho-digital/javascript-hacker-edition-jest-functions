const {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
 
} = require("../src/index");

// Testes para a função somar
test("Soma dois números corretamente", () => {
  expect(somar(2, 3)).toBe(5);
});

test("Soma dois números negativos corretamente", () => {
  expect(somar(-2, -3)).toBe(-5);
});

// Testes para a função subtrair
test("Subtrai dois números corretamente", () => {
  expect(subtrair(5, 3)).toBe(2);
});

test("Subtrai com resultado negativo", () => {
  expect(subtrair(3, 5)).toBe(-2);
});

// Testes para a função multiplicar
test("Multiplica dois números corretamente", () => {
  expect(multiplicar(4, 5)).toBe(20);
});

test("Multiplica número por zero", () => {
  expect(multiplicar(5, 0)).toBe(0);
});

// Testes para a função dividir
test("Divide dois números corretamente", () => {
  expect(dividir(10, 2)).toBe(5);
});

test("Lança erro ao dividir por zero", () => {
  expect(() => dividir(10, 0)).toThrow("Divisão por zero");
});

// Testes para a função ehPar
test("Verifica se o número é par", () => {
  expect(ehPar(4)).toBe(true);
});

test("Verifica se o número é ímpar", () => {
  expect(ehPar(5)).toBe(false);
});



