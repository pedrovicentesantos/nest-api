## Aplicação

A aplicação consiste em uma REST API desenvolvida utilizando o framework [NestJS](https://nestjs.com).

A API tem como recurso raças de cachorros. Para persistir os dados, é utilizado um banco de dados SQLite.

## Endpoints

As rotas presentes na aplicação são as seguintes:

- GET /breeds
    * Retorna todas as raças existentes no banco de dados

- GET /breeds/:id
    * Retorna uma raça identificada por `id`

- POST /breeds
    * Cria uma raça nova

- PUT /breeds/:id
    * Atualiza um ou mais dados de uma raça identificada por `id`

- DELETE /breeds/:id
    * Deleta do banco de dados uma raça identificada por `id` 

## Rodando a aplicação

A aplicação possui um `Dockerfile` e um arquivo `docker-compose.yaml` para simplificar sua execução localmente.

Para rodar a aplicação, o primeiro passo é fazer o clone do repositório.

```shell
git clone https://github.com/pedrovicentesantos/nest-api

cd nest-api
```

Depois, basta rodar o comando `docker-compose up` e aplicação já estará rodando e poderá ser acessada em [localhost:3000](http://localhost:3000) no endpoint desejado.