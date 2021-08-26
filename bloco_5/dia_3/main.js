const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

function classTech(event) {
  event.target.className = 'tech';
}
divUm.addEventListener ('click', classTech);

function typeText () {
  divDois.innerText = input.value;
}
divDois.addEventListener('click', typeText)

function click2 () {
  window.open ('https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-eventos/17f2fe86-921e-4e5c-ba08-b6ac47bec409/conteudos/dd5eac1c-23e8-406c-88ce-6404d56b310b/parte-ii-conheca-o-addeventlistener/cd98823f-8ada-43db-9a77-ba0c2a8ea2c7?use_case=side_bar')
}
myWebpage.addEventListener('dblclick', click2)

function hover () {
  myWebpage.style.color = 'pink';
}
myWebpage.addEventListener('mouseover', hover)
/*
1. Copie esse arquivo e edite apenas ele;

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.