let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};
console.log('Bem vinda, ' + info.personagem)

for (let key in info) {
  console.log(info[key])
}