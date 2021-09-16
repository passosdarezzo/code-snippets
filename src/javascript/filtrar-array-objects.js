/*
Definição de uso

O método filtro() cria um array preenchido com todos os elementos que passam um teste (provido como uma função)

(1) - filter() não altera o array original
(2) - filter() não executa a função para elementos do array sem valores
*/

// Definição de listagem
let listaCompras = [
  { id: 1, nome:"Banana" }, { id: 2, nome:"Maça" }, { id: 3, nome: "Laranja" }, { id: 4, nome:"Limão" }, { id: 5, nome: "Melancia" }, 
  { id: 6, nome:"Uva" }, { id: 7, nome:"Abacaxi" }, { id: 8, nome: "Pêra" }, { id: 9, nome: "Abacate" }, { id: 10, nome: "Manga" }, { id: 11, nome: "Morango" },
]
console.log("Lista de Compras")
console.log(listaCompras)

// Filtrar um item da lista
let resultadoA = listaCompras.filter(item => item.nome === "Uva")
console.log("Resultado A")
console.log(resultadoA)


/* 
var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
  ];
   
  // Esta declaração retorna o array: [8, 6, 7, 9]
  elements.map(function(element) {
  return element.length;
  });
   
  // A função regular acima pode ser escrita como a função seta abaixo
  elements.map((element) => {
  return element.length;
  }); // [8, 6, 7, 9]
   
  // Quando somente existe um parâmetro, nós podemos remover os parênteses ao redor
  elements.map(element => {
  return element.length;
  }); // [8, 6, 7, 9]
   
  // Quando a única declaração em uma função seta é 'return', nós podemos remover o 'return' e remover as chaves ao redor
  elements.map(element => element.length); // [8, 6, 7, 9]
   
  // Nesse caso, porque nós somente precisamos da propriedade length, nós podemos desestruturar o parâmetro:
  // Perceba que o 'length' corresponde a propriedade que nós queremos obter enquanto que
  // o obviamente não-especial 'lengthFooBArX' é somente o nome de uma variável o qual pode ser alterado
  // para qualquer nome válido de variável que você queira
  elements.map(({ length :lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]
   
  // Esta atribuição de parâmetro desestruturado pode também ser escrito como abaixo. Entretanto, perceba que
  // neste exemplo nós não estamos atribuindo o valor de 'length' para a propriedade criada. Ao invés disso, o próprio nome literal
  // da variável 'length' é usado como a propriedade que nós queremos obter do objecto.
  elements.map(({ length }) => length); // [8, 6, 7, 9]
   */