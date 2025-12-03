# naFila+ Conteúdos

Aplicação desenvolvida como MVP da disciplina **Desenvolvimento Front-End Avançado**.

O objetivo é organizar conteúdos de estudo (livros, vídeos, artigos e podcasts), permitindo buscar, filtrar, visualizar detalhes e abrir o conteúdo original.  
Os dados são carregados a partir de um arquivo JSON local, simulando uma API.

---

## 🚀 Tecnologias utilizadas

- **React + Vite**
- **React Router DOM**
- **Hooks:** useState, useEffect, useNavigate, useParams, useLocation
- **JSON local** como fonte de dados
- **CSS responsivo** customizado

---

## 📌 Funcionalidades

- **Páginas:**
  - Home (`/`)
  - Biblioteca (`/biblioteca`)
  - Detalhes do Conteúdo (`/conteudo/:id`)
  - Sobre (`/sobre`)
  - Página 404 (`*`)

- **Componentes reutilizáveis:**
  - Header  
  - SearchBar  
  - ContentCard  
  - Button  
  - FeedbackMessage  
  - Loader  
  - TagBadge  

- **Simulação de backend:**
  - Arquivo `contents.json` com os dados
  - Funções em `fakeApi.js` simulando requisições com atraso artificial

- **Usabilidade:**
  - Loader durante “requisições”
  - Mensagens de feedback (informação / sucesso / erro)
  - Responsividade mobile/desktop
  - Mensagem “Nenhum conteúdo encontrado”
  - Botão para abrir o conteúdo original em nova aba

---

## 🧭 Hooks de navegação

O projeto utiliza os três hooks exigidos pela disciplina:

- `useNavigate` → navegação programática
- `useParams` → leitura do ID na URL
- `useLocation` → receber filtros vindos da Home

---

## 📁 Estrutura do projeto

```
src/
  App.jsx
  main.jsx
  index.css
  App.css

  data/
    contents.json

  api/
    fakeApi.js

  components/
    Header.jsx
    Layout.jsx
    SearchBar.jsx
    ContentCard.jsx
    Button.jsx
    FeedbackMessage.jsx
    Loader.jsx
    TagBadge.jsx

  pages/
    Home.jsx
    Library.jsx
    ContentDetails.jsx
    About.jsx
    NotFound.jsx
```

---

## ▶️ Como executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar o servidor de desenvolvimento
```bash
npm run dev
```

### 3. Abrir no navegador
O Vite exibirá o link (exemplo):
```
http://localhost:5173
```

---

## ✔️ Observações

- O projeto está organizado conforme os requisitos da disciplina.  
- Componentes reutilizáveis, rotas, hooks, JSON e usabilidade foram implementados conforme solicitado.  
- Pronto para ser aberto no **GitHub Codespaces** ou localmente.
