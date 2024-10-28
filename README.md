"User Management System"

Sistema de gerenciamento de usuários desenvolvido com Node.js, Express, Sequelize e PostgreSQL, que permite cadastrar, listar, atualizar e excluir usuários. A aplicação está containerizada usando Docker para facilitar o desenvolvimento e a implementação.

Table of Contents

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Sobre o uso da aplicação](#sobre-o-uso-da-aplicação)
- [Estrutura da aplicação](#strutura-da-aplicação)

Funcionalidades

- Cadastrar novos usuários
- Listar todos os usuários
- Atualizar informações de um usuário
- Excluir usuários

Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- PostgreSQL
- Docker

Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/en/download/) (v18 ou superior)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

Instalação

1. Clone o repositório:
   pelo github: acesse o link que direciona ao projeto:
   link:https://github.com/GeucyPassosDev/UserManagement
   Clique em "<> Code", e copie o link de clone do projeto.
   
2.No VScode abra a paleta de comandos com a combinação de teclas Ctrl + Shift + P. No prompt da paleta de comandos, digite gitcl , selecione o comando Git: Clone e, em seguida, selecione Clone do GitHub e pressione Enter. Quando for solicitada a URL do Repositório, selecione Clonar do GitHub e pressione Enter

3. Abra um prompt no VScode direcione até a raiz do projeto e digite cd backend para acessas o backend, em seguidas digite:
npm install

4.Abra um prompt no VScode direcione até a raiz do projeto e digite cd frontend para acessas o backend, em seguidas digite:
npm install

5.Clique com o botão direito do mouse no arquivo docker-compose.yml e abra o arquivo em um prompt de comando, em seguida digite no prompt:
docker-compose up --build

Sobre o uso da aplicação

O backend estará disponível em http://localhost:3000
O frontend estará disponível em http://localhost:3001
Para cadastrar um novo usuário, preencha o formulário no frontend e clique em "Cadastrar". Você também pode listar todos os usuários, atualizar ou excluir usuários.

Estrutura da Aplicação

Raiz - USER_MANAGER_PT
── backend
   ── config
   ── migrations
   ── models
   ── node_modules
   ── routes
   ── seeders
   ── Dockerfile
   ── package-lock.json
   ── package.json
   ── server.js
   ── wait-for-it.sh
── frontend
   ── build
   ── node_modules
   ── public
   ── src
   ── .gitignore
   ── Dockerfile
   ── package-lock.json
   ── package.json
── node_modules
── .env
── docker-compose.yml
── package-lock.json
── package.json
── README.md


