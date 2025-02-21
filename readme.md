# NLW Backend - Ranking de Indicação

Este é um backend desenvolvido em **Node.js** utilizando **Fastify**, **Drizzle ORM**, **Docker** com **PostgreSQL** e **Redis** para fornecer uma API de ranking de indicação.

## Requisitos

- **Node.js** (v18 ou superior recomendado)
- **Docker** e **Docker Compose**
- **Extensão BIOME** (opcional, para formatação de código)

## Configuração do Ambiente

Crie um arquivo **.env** na raiz do projeto e adicione as seguintes variáveis:

```
PORT=3333
WEB_URL="http://localhost:3000"
POSTGRES_URL="postgresql://docker:docker@localhost:5434/connect"
REDIS_URL="redis://localhost:6379"
```

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/nlw-backend.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd nlw-backend
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## Subindo os Containers Docker

Antes de rodar o servidor, inicie os containers do banco de dados e cache com:

```sh
docker compose up -d
```

## Executando a API

Para rodar a aplicação em modo de desenvolvimento:

```sh
npm run dev
```

## Estrutura do Projeto

```
├── src
│   ├── routers              # Rotas da API
│   ├── functions            # Funções auxiliares
│   ├── redis                # Interação com o Redis
│   ├── server.ts            # Configuração principal do servidor
│   ├── drizzle.config.ts    # Configuração do ORM Drizzle
├── .env                     # Configuração do ambiente
├── docker-compose.yml       # Configuração do Docker Compose
├── package.json             # Dependências e scripts
├── tsconfig.json            # Configuração do TypeScript
```

## Rotas Disponíveis

- `POST /subscribe` - Inscreve um usuário no evento
- `GET /ranking` - Retorna o ranking de indicações
- `GET /invite-clicks` - Obtém o número de cliques nos convites
- `GET /invite-counts` - Obtém o total de convites enviados

## Formatação do Código

Caso deseje utilizar o **BIOME** para formatação, instale a extensão no VSCode ou execute:

```sh
npm install -g @biomejs/biome
```

Para formatar manualmente:

```sh
biome format .
```

## Contribuição

Sinta-se à vontade para abrir **issues** ou **pull requests** no repositório oficial do projeto.

## Licença

Este projeto está sob a licença MIT.
