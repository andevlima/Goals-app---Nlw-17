// selecionando um prompt da package instalada (inquirer)
const { select } = require("@inquirer/prompts")

// sempre que usar await, a função tem q ter um async
const start = async () => {
  while (true) {
    // o await serve pra esperar a pessoa selecionar alguma opção pra poder rodar a função
    const opcao = await select({
      // na seleção do usuário serão mostradas a mensagem e as opções abaixo
      message: "Menu >",
      choices: [
        {
          name: "Cadastrar meta",
          value: "cadastrar",
        },
        {
          name: "Listar metas",
          value: "listar",
        },
        {
          name: "Sair",
          value: "sair",
        },
      ],
    })

    // o valor da opção escolhida em choices será guardado em 'opcao', switch recebe 'opcao' e executa conforme o código abaixo
    switch (opcao) {
      case "cadastrar":
        console.log("vamos cadastrar")
        break
      case "listar":
        console.log("vamos listar")
        break
      case "sair":
        console.log("Até a próxima!")
        return
    }
  }
}

start()
