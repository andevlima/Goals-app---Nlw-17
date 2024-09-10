// organização de uma única meta
let meta = {
  value: "ler um livro por mês",
  checked: true,
}

// organização de vária metas
let metas = [
  meta,
  {
    value: "caminhar 20 minutos todos os dias",
    checked: false,
  },
]
// pegou a primeira meta (do livro)
console.log(meta[0].value)