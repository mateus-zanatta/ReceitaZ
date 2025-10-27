# CadReceitas (Controle de Receitas)

Projeto front-end em React + Vite para gerenciar um catálogo de receitas. A aplicação permite listar, incluir e pesquisar itens (receitas) e consome uma API REST em http://localhost:3000/receitas.

Observação sobre o repositório:
- O nome do pacote foi padronizado para `cadreceitas` e a interface usa o termo "Receitas". Se preferir outro nome, posso ajustar a documentação e o package.json.

## Tecnologias

- React 19
- Vite
- react-hook-form
- react-router
- sweetalert2

## Conteúdo

Este README cobre:
- Como executar o front-end
- Requisitos para a API (ex.: json-server)
- Scripts npm disponíveis
- Estrutura principal de arquivos e rotas
- Observações e próximos passos sugeridos

## Como rodar (desenvolvimento)

1. Instale dependências:

   npm install

2. Inicie o servidor de API (necessário para que a app funcione). Uma opção simples para desenvolvimento é usar o json-server. Crie um arquivo `db.json` com conteúdo inicial, por exemplo:

```json
{
  "receitas": [
    {
      "id": 1,
      "titulo": "Exemplo",
      "tipo": "Sobremesa",
      "porcoes": 4,
      "tempo_preparo_min": 30,
      "ingredientes": "...",
      "modo_preparo": "...",
      "imagem": "https://via.placeholder.com/300",
      "comentarios": [],
      "notas": []
    }
  ]
}
```

   Então rode (na mesma máquina, porta 3000):

   npx json-server --watch db.json --port 3000

3. Inicie a aplicação React (em outro terminal):

   npm run dev

   Isso abre o front-end via Vite (por padrão em http://localhost:5173).

4. Rotas principais:

	- /           → Lista (Home)
	- /inclusao   → Inclusão de nova receita
	- /pesquisa   → Pesquisa por título/tipo

## Scripts (package.json)

- npm run dev — inicia o servidor de desenvolvimento Vite
- npm run build — gera build de produção
- npm run preview — pré-visualiza o build gerado
- npm run lint — executa ESLint

## Estrutura principal de arquivos

- index.html — ponto de entrada HTML
- src/main.jsx — roteamento (react-router) e bootstrapping
- src/App.jsx — lista principal (faz fetch em /receitas)
- src/Inclusao.jsx — formulário para cadastrar novo item (usa react-hook-form)
- src/Pesquisa.jsx — formulário e listagem filtrada
- src/components/Titulo.jsx — cabeçalho e navegação
- src/components/CardReceita.jsx — cartão de exibição com SweetAlert2 para avaliar
- public/ — imagens públicas (logo, new.png)

## API esperada

A aplicação faz chamadas para `http://localhost:3000/receitas`. A API deve oferecer endpoints REST básicos:

- GET /receitas — lista todas as receitas
- POST /receitas — inclui nova receita

Campos esperados por item: `id`, `titulo`, `tipo`, `porcoes`, `tempo_preparo_min`, `ingredientes`, `modo_preparo`, `imagem`, `comentarios`, `notas`.

## Observações e sugestões

- Padronizamos a terminologia para "Receitas" em UI e package name.
- Melhorias possíveis: validar formulários, tratamento de erros com UI (não apenas console/alert), adicionar .env para a URL da API.
- Se for publicar o pacote, verifique o `name` em `package.json` antes de publicar (atualmente `cadreceitas`).

