# Frontend Testing - FarmTech ( PLENO )

## Objetivo

Uma aplicação que funcione como uma lista de países para consulta de dados do COVID.

## Requisitos

- Yarn ou npm

## Estrutura do Projeto

- `src/`: Contém o código-fonte da App.
  - `components/`: Contém os componentes React.
    - `MyComponent/`
      - `MyComponent.tsx`
      - `MyComponent.scss` (estilos para `MyComponent`)
  - `utils/`: Funções utilitárias e helpers.
  - `common/`: Variaveis SCSS.
  - `types/`: Tipagem.
  - `assets`: Imagens e logo.
- `package.json`: Arquivo de configuração do projeto.


## Configuração

1. **Instalar Dependências**

   Execute o comando abaixo para instalar todas as dependências necessárias:

   ```bash
   npm install

1. **Rodar a aplicação**

   Execute o comando abaixo para rodar a app localmente:

   ```bash
   npm run dev
   

## Observações e Considerações

- API: A API busca os dados referente a ultima data de dados coletados ("last_update": "2023-03-10 04:21:03")

- Utilizei a biblioteca de inifite-scroll listada a seguir para renderizar conforme o usuario faça a ação de scrollar a página, utilizando de lazy-loading e carregando assim as proximas paginas da API com os dados.

- Criei um bloco de sugestões que é exibido a partir do momento em que o usuario digita na caixa de texto para buscar determinado país, sendo necessario o clique para a busca do mesmo.
  ( debounce utilizado para garantir que o request não seja feito diversas vezes conforme o usuario digita cada letra, com o tempo de 1seg )

- A aplicação está de forma simples com estilos criados do zero e sem utilização de libs UI, porém minimamente responsiva.
