javascript fundamentals

// let permite ser modificado em outra linha de codigo posteriormente, mas se ao invés de let, tivesse sido usado const, não seria possível modificar o valor dele em outra linha de código
let message = "hello world!"
message = "hello!"
console.log(message);

const message = "hello world!"

{
  // essa é uma operação local, a de cima é global, isso permite que const seja "modificada", pois elas não são a mesma operação, apesar do nome igual.
  // esse aqui aparece primeiro, pois a função log dele está antes da global e, ela só aparece pois a log está também dentro das chaves, sendo também local.
  
  const message = "hello!"
  console.log(message)
}

console.log(message)

......................

// lista de metas, arrays
let metas = ["mayk", "alô"]
// chamando os dois itens do array acima, concatenando com uma vírgula e espaço (alô, mayk)
// concatenar = junção de 2 ou mais strings ("")
console.log(metas[1] + ", " + metas[0])

// objetos
// chaves {} depois de um sinal de igualdade, são consideradas objetos
let meta = {
  value: "ler um livro por mês",
  checked: false
}

console.log(meta.value)

// método = dentro de um objeto. função = fora de um objeto
// function, arrow function (=>)
const criarMeta = () => {}
// "mesma" função de cima só que de um jeito mais comum (named function)
function criarMeta() {}

.......................

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

.........................

// estrutura de repetição while
// count é igual a zero no começo, e é somado 1 numero a ele ao final, enquanto ele for menor q 10 ele aparecerá no terminal, quando não for mais, a estrutura para de se repetir
const start = () => {
  let count = 0
  while(count < 10){
    console.log(count)
    count = count + 1
  }
}

start()

...........................

// do jeito q o código está abaixo, se no lugar de "sair" fosse uma das outras opções, o terminal ia executar essa função pra sempre
const start = () => {
  while(count < 10){
    let opcao = "sair" // ou "cadastrar", ou "listar"
    switch(opcao) {
      case "cadastrar":
        console.log("vamos cadastrar")
        break
      case "listar":
        console.log("vamos listar")
        break
      case "sair":
        return    
    }
  }
}

start()