from tabulate import tabulate


def contatoNovo(contatos):
    nome = input("Digite o nome: ").strip()
    telefone = input("Digite o numero: ").strip()
    email = input("Digite o E-mail: ").strip()
    twitter = input("Digite o twitte: ").strip()
    instagram = input("Digite o instagram: ").strip()
    print()
    contatos[nome.lower().strip().replace(" ","")] = dict(nome=nome, telefone=telefone, email=email, Twitter=twitter, Instagram=instagram)


def adicionarMaisDeUmContato(dicionario):
    print("Deseja adicionar quantos contatos ?")
    numero = int(input("> "))
    i = 0
    for i in range(i, numero):
        contatoNovo(dicionario)


def fazerConsulta(dicionario):  # vou passar o dicionario e a chave que no caso é nome
    nomeConsulta = input("Nome a ser consultado: ").lower().replace(" ", "")
    nomes = []
    for nome in dicionario:  # para cada nome no dicionario
        if nome.startswith(nomeConsulta):  # se o nome começar com qualque letra
            nomes.append(nome)  # vou adiconar o nome no array a cima
    if len(nomes) > 0:
        imprimeContatos(contato, nomes)
    else:
        print(             )
        print("Nome não esta lista\n")


def imprimeContatos(dicionario, chaves):
    tabela = []  # para imprimir usando o tabule temos que colocar cada item em uma lista
    cont = 1  # adicionamos um contador de repeticão
    for palavraChave in chaves:  # Para cada nome irei adiconar na lista tabela
        tabela.append([  # Colocando os itens separados por virgula, para o tabulete conseguir deixar bonito
            cont,
            dicionario[palavraChave]["nome"],
            dicionario[palavraChave]["telefone"],
            dicionario[palavraChave]["email"],
            dicionario[palavraChave]["Twitter"],
            dicionario[palavraChave]["Instagram"]
        ])
        cont += 1
    print(tabulate(tabela, headers=["Quantidade", "Nome", "Telefone", "Email", "Twitter", "Instagram"],
                   tablefmt="github"))


def imprimeTodosContatos(dicionario):
    tabela = []  # para imprimir usando o tabule temos que colocar cada item em uma lista
    cont = 1  # adicionamos um contador de repeticão
    for palavraChave in dicionario:  # Para cada nome irei adiconar na lista tabela
        tabela.append([  # Colocando os itens separados por virgula, para o tabulete conseguir deixar bonito
            cont,
            dicionario[palavraChave]["nome"],
            dicionario[palavraChave]["telefone"],
            dicionario[palavraChave]["email"],
            dicionario[palavraChave]["Twitter"],
            dicionario[palavraChave]["Instagram"]
        ])
        cont += 1
    print(tabulate(tabela, headers=["Quantidade", "Nome", "Telefone", "Email", "Twitter", "Instagram"],
                   tablefmt="github"))


def remover(dicionario):
    removerNome = input("Digite o nome a ser removido: ").strip().lower().replace(" ", "")
    contNome = 0
    nomes = []
    for nome in contato:
        if nome == removerNome:
            dicionario.pop(removerNome)
            # remover(contato, removerNome)
            contNome += 1
            break
        else:
            if nome.startswith(removerNome):
                nomes.append(nome)
                contNome += 1
    if contNome > 1:
        print()
        print("Voce digitou sem o sobrenome, verifique qual voce quer tirar \n")
        imprimeContatos(contato, nomes)
        print()
    elif contNome == 1:
        print("Contato removido com suscesso!!")
    else:
        print("Contato não existe em sua lista")

    # dicionario.pop(chave)


def editar(dicionario):
    nomeEditado = input("Contato a ser editado: \n").strip().lower().replace(" ", "")

    if nomeEditado in contato:
        while True:
            print("Escolha o item a ser alterado")
            print("A - Nome")
            print("B - Numero")
            print("C - Email")
            print("D - Twitter")
            print("E - Instagram")
            print("F - Sair")
            escolha = input("> ").strip().lower()

            if escolha == "a":
                nomeNovo = input(" Digite o nome novo: ")
                dicionario[nomeEditado]["nome"] = nomeNovo
            elif escolha == "b":
                nomeNovo = input(" Digite o numero novo: ")
                dicionario[nomeEditado]["telefone"] = nomeNovo
            elif escolha == "c":
                nomeNovo = input(" Digite o E-mail novo: ")
                dicionario[nomeEditado]["email"] = nomeNovo
            elif escolha == "d":
                nomeNovo = input(" Digite o Twitter novo: ")
                dicionario[nomeEditado]["Twitter"] = nomeNovo
            elif escolha == "e":
                nomeNovo = input(" Digite o Instagram novo: ")
                dicionario[nomeEditado]["Instagram"] = nomeNovo
            elif escolha == "f":
                break
            else:
                print()
                print("Essa opção não existe")
                print()
    else:
        nomes = []
        for nome in dicionario:
            if nome.startswith(nomeEditado):
                nomes.append(nome)
        if len(nomes) > 0:
            imprimeContatos(contato, nomes)
            print("\n Exites mais de um nome coloque o sobrenome\n")
        else:
            print("Esse nome não esta em sua agenda")

contato = {
    "mateus": {
        "nome": "Mateus",
        "telefone": "33333333",
        "email": "mateus@gmail.com",
        "Twitter": "mate",
        "Instagram": "mate"
    },

    "joãotavares": {
        "nome": "João Tavares",
        "telefone": "555555",
        "email": "joão@gmail.com",
        "Twitter": "jo",
        "Instagram": "jo"
    },
    "joãovenancio": {
        "nome": "João Venancio",
        "telefone": "555555",
        "email": "joão@gmail.com",
        "Twitter": "jo",
        "Instagram": "jo"
    },

    "lucas": {
        "nome": "Lucas",
        "telefone": "44444444444",
        "email": "lcuas@gmail.com",
        "Twitter": "luca",
        "Instagram": "luca"
    }
}

while True:
    print()
    print("***********Agenda Telefonica************\n")
    print("1 - Inserir numero novo ")
    print("2 - Fazer uma consulta")
    print("3 - Remover")
    print("4 - Fazer uma alteração")
    print("5 - Mostrar todos os contatos")
    print("6 - Sair")
    escolha = int(input("> "))

    if escolha == 1:
        while True:
            opcao = input("Deseja inserir mais de um contato [S/N] ? ").strip().lower()
            if opcao == "s":
                print()
                adicionarMaisDeUmContato(contato)
                break
            elif opcao == "n":
                contatoNovo(contato)
                break
            else:
                print()
                print("opcão invalida \n")
                continue

    elif escolha == 2:
        fazerConsulta(contato)
    elif escolha == 3:
        remover(contato)
    elif escolha == 4:
        editar(contato)
    elif escolha == 5:
        imprimeTodosContatos(contato)
    elif escolha == 6:
        break
    else:
        print("                      ")
        print("Essa opcão não existe\n")
