// let permite ser modificado em outra linha de codigo posteriormente, mas se ao invés de let, tivesse sido usado const, não seria possível modificar o valor dele em outra linha de código
// let message = "hello world!"
// message = "hello!"
// console.log(message);

const message = "hello world!"

{
  // essa é uma operação local, a de cima é global, isso permite que const seja "modificada", pois elas não são a mesma operação, apesar do nome igual.
  // esse aqui aparece primeiro, pois a função log dele está antes da global e, ela só aparece pois a log está também dentro das chaves, sendo também local.
  const message = "hello!"
  console.log(message)
}

console.log(message)