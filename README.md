User Management System

Sistema de gerenciamento de usuários desenvolvido com Node.js, Express, Sequelize e PostgreSQL, que permite cadastrar, listar, atualizar e excluir usuários. A aplicação está containerizada usando Docker para facilitar o desenvolvimento e a implementação.

Table of Contents

- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

Funcionalidades

- Cadastrar novos usuários
- Listar todos os usuários
- Obter detalhes de um usuário específico
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

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/GeucyPassosDev/UserManagement.git
   cd UserManagement
2. cd backend
npm install

3.cd ../frontend
npm install

4.cd ..
docker-compose up --build

Sobre o uso da aplicação

O backend estará disponível em http://localhost:3000
O frontend estará disponível em http://localhost:3001
Para cadastrar um novo usuário, preencha o formulário no frontend e clique em "Cadastrar". Você também pode listar todos os usuários, atualizar ou excluir usuários.

Estrutura da Aplicação

UserManagement/

 backend/
   ├── config/
   ├── models/
   ├── routes/
   ├── Dockerfile
   ├── package.json
   └── server.js
 frontend/
   ├── public/
   ├── src/
   ├── Dockerfile
   └── package.json
 docker-compose.yml
 .env
 package.json

Contribuição

