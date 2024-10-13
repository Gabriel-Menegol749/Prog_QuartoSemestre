export function Adicionar(Num1, Num2) {
  return parseFloat(Num1) + parseFloat(Num2);
}

export function Diminuir(Num1, Num2) {
  return parseFloat(Num1) - parseFloat(Num2);
}

export function Dividir(Num1, Num2) {
  if (parseFloat(Num2) === 0) {
    return "Erro: divisão por 0";
  }
  return parseFloat(Num1) / parseFloat(Num2);
}

export function Multiplicar(Num1, Num2) {
  return parseFloat(Num1) * parseFloat(Num2);
}
