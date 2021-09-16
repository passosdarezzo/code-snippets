/*
Descrição
  O método find executa a função callback uma vez para cada elemento presente no array até que encontre um onde callback  retorne o
  valor true. Se o elemento é encontrado, find retorna imediatamente o valor deste elemento. Caso contrário, find retorna undefined.
  O callback é acionado para todos os índices do array de 0 a tamanho-1, não apenas para aqueles que possuem valores atribuídos. Sendo
  assim, ele pode ser menos eficiente para arrays muito grandes em que existem outros métodos que só visitam os índices que tenham valor atribuído.
  O callback é acionado com três argumentos: o valor do elemento, o índice do elemento e o objeto do Array que está sendo executado.
  Se um parâmetro thisArg é provido ao find, ele será usado como o this para cada acionamento do callback. Se não for provido, então undefined é usado.
  O find não altera a array à qual foi acionado.
  O conjunto dos elementos processados por find é definido antes do primeiro acionamento do callback. Elementos que são anexados à array após o início da chamada ao find não serão visitados pelo callback. Se um elemento existente ainda não visitado da array for alterado pelo callback, o valor passado ao callback quando o visitar será o valor no momento que find visita o índice daquele elemento; elementos excluídos ainda são visitados.

Parâmetros
  callback
    Função executada a cada iteração do array, recebendo três argumentos:
  element
    O elemento atual que está sendo processado no array.
  indexOptional
    O índice do elemento atualmente sendo processado no array.
  arrayOptional
    O array sobre o qual find foi chamado.
  thisArgOptional
    Opcional. Objeto usado como this quando executando o callback.
  Valor retornado
    O valor do primeiro elemento do array que satisfaz a função de teste fornecida; caso contrário, undefined.
*/

// Definição de listagem
let listaCompras = [
  { id: 1, nome:"Banana" }, { id: 2, nome:"Maça" }, { id: 3, nome: "Laranja" }, { id: 4, nome:"Limão" }, { id: 5, nome: "Melancia" }, 
  { id: 6, nome:"Uva" }, { id: 7, nome:"Abacaxi" }, { id: 8, nome: "Pêra" }, { id: 9, nome: "Abacate" }, { id: 10, nome: "Manga" }, { id: 11, nome: "Morango" },
  { id: 12, nome: "Açai" }, { id: 13, nome: "Amora" }, { id: 14, nome: "Caqui" }, { id: 15, nome: "Carambola" }, { id: 16, nome: "Pitaya" }, { id: 17, nome: "Pitanga" },
]
console.log("Lista de Compras")
console.log(listaCompras)

let itensSelecionados = [
  { id: 2, nome:"Maça" }, { id: 9, nome: "Abacate" }, { id: 14, nome: "Caqui" },
]
console.log("Itens Selecionados")
console.log(itensSelecionados)

// Itens ainda não selecionados
let diferenca = listaCompras.filter(it => itensSelecionados.find(i => i.id === it.id) === undefined)

console.log("Itens restantes")
console.log(diferenca)
