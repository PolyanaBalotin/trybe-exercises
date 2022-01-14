const readline = require('readline-sync');

function logResult(n, res) {
  if(n !== res) {
  return console.log(`Opa, não foi dessa vez. O número era ${n}`);
} else {
return console.log('Parabéns, número correto!');
}
}

function runGame(){
  const n = parseInt(Math.random() * 10);
  const res = readline.questionInt('Digite um número entre 0 e 10 para saber se é o número que estou pensando: ');
  logResult(n,res);
}
runGame();