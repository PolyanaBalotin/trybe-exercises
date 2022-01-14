const readline = require('readline-sync');

function calculaIMC () {
  const peso = readline.questionFloat('Qual o seu peso?');
  const altura = readline.questionFloat('Qual sua altura?');

  const imc = (peso / (altura * altura)).toFixed(1);

  console.log(`IMC: ${imc}`)
}

calculaIMC();
