// Definição de listagem
let listaCompras = [
  "Banana", "Maça", "Laranja", "Limão", "Melancia", "Uva", "Abacaxi", "Pêra", "Abacate", "Manga", "Morango", "Açai", "Amora", "Caqui", "Carambola", "Pitaya", "Pitanga"
]
console.log("Lista de Compras")
console.log(listaCompras)

let itensSelecionados = ["Maça", "Abacate", "Caqui"]
console.log("Itens Selecionados")
console.log(itensSelecionados)

// Itens ainda não selecionados
let diferenca = listaCompras.filter(it => itensSelecionados.find(i => i === it) === undefined)

console.log("Itens restantes")
console.log(diferenca)
