// selecionando um prompt da package instalada (inquirer)
const { select, input, checkbox } = require("@inquirer/prompts")

let meta = {
  value: "Tomar 3L de água por dia",
  checked: false,
}

let metas = [meta]

const cadastrarMeta = async () => {
  const meta = await input({ message: "Digite a meta:" })

  if (meta.length == 0) {
    console.log("A meta não pode ser vazia.")
    return
  }

  metas.push({ value: meta, checked: false })
}

const listarMetas = async () => {
  const respostas = await checkbox({
    message:
      "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
    choices: [...metas],
    instructions: false,
  })
  
  metas.forEach((m) => {
    m.checked = false
  })

  if (respostas.length == 0) {
    console.log("Nenhuma meta selecionada!")
    return
  }

  respostas.forEach((resposta) => {
    const meta = metas.find((m) => {
      return m.value == resposta
    })

    meta.checked = true
  })

  console.log("Meta(s) marcada(s) como concluída(s)")
}

const metasRealizadas = async () => {
  const realizadas = metas.filter((meta) => {
    return meta.checked
  })

  if(realizadas.length == 0) {
    console.log("Não existem metas realizadas! :(")
    return
  }

  await select({
    message: "Metas Realizadas: " + realizadas.length,
    choices: [...realizadas]
  })
}

// aqui entra as metas q não foram marcadas
const metasAbertas = async () => {
  const abertas = metas.filter((meta) => {
    return meta.checked != true // != sinal de diferente
  })

  if(abertas.length == 0) {
    console.log("Não existem metas abertas! :)")
    return
  }

  await select({
    message: "Metas abertas: " + abertas.length,
    choices: [...abertas]
  })
}

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
          name: "Metas realizadas",
          value: "realizadas",
        },
        {
          name: "Metas abertas",
          value: "abertas",
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
        await cadastrarMeta()
        console.log(metas)
        break
      case "listar":
        await listarMetas()
        console.log(metas)
        break
      case "realizadas":
        await metasRealizadas()
        break
      case "abertas":
        await metasAbertas()
        break
      case "sair":
        console.log("Até a próxima!")
        return
    }
  }
}

start()
