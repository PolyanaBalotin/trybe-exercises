//faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n 
let n = 5;
let asterisco = '*';
let inputLine = '';

for (let index = 0; index < n; index += 1) {
  inputLine = inputLine + asterisco;
};
for (let index = 0; index < n; index += 1) {
  console.log(inputLine);
};

//imprima um triângulo retângulo com 5 asteriscos de base.
let n = 5;
let asterisco = '*';
let inputLine = '';

for (let index = 0; index <= n; index += 1) {
  console.log(inputLine);
  inputLine = inputLine + asterisco;
};

//Agora inverta o lado do triângulo
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};