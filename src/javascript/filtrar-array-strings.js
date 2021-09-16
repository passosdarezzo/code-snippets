/*
Definição de uso

O método filtro() cria um array preenchido com todos os elementos que passam um teste (provido como uma função)

(1) - filter() não altera o array original
(2) - filter() não executa a função para elementos do array sem valores
*/

// Definição da listagem
let listaCompras = ['banana', 'molho de tomate', 'bolacha', 'arroz', 'feijao']
console.log("Lista de Compras")
console.log(listaCompras)

// Filtrar um item da lista
let resultadoA = listaCompras.filter(item => item === 'banana')
console.log("Resultado A")
console.log(resultadoA)

// Se precisar utilizar a função de filtro em vários locais
const filtroPersonalizado = valorAtual => valorAtual === 'banana'
let resultadoB = listaCompras.filter(filtroPersonalizado)
console.log("Resultado B")
console.log(resultadoB)
