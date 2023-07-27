# De Leiteiro a Leitor

<p align="center">
<img src="material/deleiteiroaleitor.jpg" alt="logo do projeto De Leiteiro a Leitor" width="500">
</p> <p align="center"> </p>
</h1></br>

## Projeto Final - {Reprograma} - ON22

Projeto de conclusão do bootcamp de desenvolvimento Back-end da [{reprograma}](https://reprograma.com.br/).

<p>

### :green_book: Informações básicas

- Documentação disponível [neste link](https://de-leiteiro-a-leitor.onrender.com/minha-rota-de-documentacao/#/)
- Aplicação disponível [neste link](https://de-leiteiro-a-leitor.onrender.com/)
- Slides da apresentação disponíveis [neste link](XXXXXXXXX)

green: Objetivos

XXXXXXXXXXX **INCENTIVO À LEITURA**.

XXXXXXX **DESCONCENTRAÇÃO DO CIRCUITO CULTURAL**.

XXXXXXXXX. **ESTÍMULO À MUDANÇA DE VISÃO DO BAIRRO**

XXXXXXXXX. **AMBIENTE DE APOIO ÀS MÃES**

Esse projeto une minhas formações profissionais, Ciências Econômicas e Pedagogia, e minha própria experiência pessoal, como moradora de periferia, que, diariamente, observa e passa pelos "corres" de xxxxx, e como mãe, que XXXXX. XXXXXXXXXXXXXXX
O título do projeto é em homenagem ao meu filho, Rudá, hoje com 5 anos, que sempre foi muito apaixnado por "leitinho" e livrinhos, e ganhou esse apelido cedo, quando foi gradativamente se tornando um leitor (o leitinho ele ainda toma, rs!)

green: Funcionalidades

Existem, a princípio, 2 grupos de dados nesta API: LIVROS DISPONÍVEIS e CRIANÇAS FREQUENTADORAS.

Livros disponíveis
- [x] Quando cadastram livros para doação, eles vão para o banco de dados de LIVROS DISPONÍVEIS (books).
- [x] O schema do cadastro de livros disponíveis na API deve conter: id (autogerado), título, ano de lançamento, disponibilidade, editora, gênero, escritor, número de páginas. 
- [x] Com relação aos livros, a API deve ser capaz de: (i) cadastrar um livro, (ii) atualizar os dados do livro cadastrado, (iii) deletar o livro cadastrado.
- [x] Os dados de livros disponíveis devem poder ser (i) filtrados por ID e (ii) apresentados a fim de mostrar todos os livros disponíveis cadastrados.

Crianças frequentadoras
- [x] O cadastro dos dados pessoais das crianças vão para o banco de dados de CRIANÇAS FREQUENTADORAS (kids).
- [x] O schema do cadastro de crianças na API deve conter: nome, data de nascimento, escola, responsável, número de contato, endereço,
- [x] Com relação às crianças, a API deve ser capaz de: (i) cadastrar os dados da criança, (ii) atualizar os dados da criança, (iii) deletar algum cadastro.
- [x] Os dados de crianças disponíveis devem poder ser (i) filtrados por nome e (ii) apresentados a fim de mostrar todos as crianças cadastradas.

> 
green: Arquitetura MVC


```
📁ON22-B3-S17-S18-PROJETO-LIVRE
├── 📁assets
    ├── 📄README.md    
├── 📁DE-LEITEIRO-A-LEITOR
    ├── 📁material
    ├── 📁node_modules 
    ├── 📁src
│       ├── 📁controllers
|           ├── 📄booksController.js
|           ├── 📄kidsController.js
|       ├── 📁database
|           ├── 📄dbConnect.js
│       ├── 📁models
|           ├── 📄booksModel.js
|           ├── 📄kidsModel.js
│       ├── 📁routes
│           ├── 📄booksRoutes.js
│           ├── 📄kidsRoutes.js
|       ├── app.js
    ├── 📁swagger
|       ├── 📄swagger_output.js
    ├── 📄.env
    ├── 📄.env.example 
    ├── 📄.gitignore
    ├── 📄package-lock.json
    ├── 📄package.json
    ├── 📄README.md
    ├── 📄server.js
    ├── 📄swagger.js
```

green: Rotas

                                             
| Livros Disponíveis                              |        |                          |
|-------------------------------------------------|--------|------------------------- |
| Mostrar todos os livros disponíveis             | GET    | library/books/books      |
| Filtrar livros disponíveis por ID               | GET    | library/books/books/:id  |
| Atualizar dados dos livros disponíveis          | PATCH  | library/books/books/:id  |
| Cadastrar livro para disponibilização           | POST   | library/books/books/new  |
| Deletar livro cadastrado por ID                 | DELETE | library/books/books/:id  |

| Crianças Frequentadoras              |          |                                   |
|--------------------------------------|--------  |-----------------------------------|
| Mostrar todas as crianças participantes         | GET    | library/kids/kids        |
| Filtrar crianças por nome                       | GET    | library/kids/kids/:name  |
| Atualizar dados das crianças                    | PATCH  | library/kids/kids/:name  |
| Cadastrar nova criança                          | POST   | library/kids/kids/new    |
| Deletar cadastro de criança por nome            | DELETE | librarykids/kids/:name   |

green: Futuras implementações

- Criar novas funcionalides:
Login para usuários, Voluntários, Empréstimo de livros.

- Fazer novos filtros
Filtro de livros por autor, por título, por responsável, por escola etc.


#