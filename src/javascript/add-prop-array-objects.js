/*
Descrição
  O método map chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. A função callback é chamada apenas para os elementos do array original que tiverem valores atribuídos; os elementos que estiverem como undefined, que tiverem sido removidos ou os que nunca tiveram valores atribuídos não serão considerados.
  A função callback é chamada com três argumentos: o valor do elemento corrente, o índice do elemento corrente e o array original que está sendo percorrido.
  Se o parametro thisArg foi passado para o método map, ele será repassado para a função callback no momento da invocação para ser utilizado como o this. Caso contrário, o valor undefined será repassado para uso como o this. O valor do this a ser repassado para o callback deve respeitar as regras para determinar como o this é acessado por uma função (em inglês).
  O método map não modifica o array original. No entanto, a função callback invocada por ele pode fazê-lo.
  A lista de elementos que serão processados pelo map é montada antes da primeira invocação à função callback. Se um elemento for acrescentado ao array original após a chamada ao map, ele não será visível para o callback. Se os elementos existentes forem modificados, os valores que serão repassados serão os do momento em que o método map invocar o callback. Elementos removidos não serão visitados.

Parâmetros
  callback
    Função cujo retorno produz o elemento do novo Array. Recebe três argumentos:
  valorAtual
    O valor do elemento original do Array de origem. 
  indice
    O índice do elemento atual que está sendo processado no array.
  array
    O Array de origem.
  thisArg
    Opcional. Valor a ser utilizado como o this no momento da execução da função callback.
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

let resultado = listaCompras.filter(it => itensSelecionados.find(i => i.id === it.id) === undefined)
resultado.map(p => 
  p.selecionado = false
)
console.log("Resultado")
console.log(resultado)