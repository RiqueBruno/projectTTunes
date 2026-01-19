# 🎵 Project TTunes

![Project Banner](https://via.placeholder.com/1200x400?text=TTunes+Preview)
> Aplicação de streaming de música que simula a experiência do iTunes/Spotify, consumindo dados reais.

[![Deploy](https://img.shields.io/badge/Acesse_o_App-Ver_Online-success?style=for-the-badge&logo=vercel)](https://project-t-tunes.vercel.app/)

## 🎧 Sobre o Projeto

O **TTunes** é uma aplicação Front-end desenvolvida para listar álbuns e reproduzir prévias de músicas de qualquer artista do mundo. O projeto consome a **iTunes Search API** da Apple para trazer dados reais (capas de álbuns, nomes das faixas e arquivos de áudio).

Originalmente desenvolvido durante o bootcamp da Trybe, o projeto foi refatorado e melhorado para garantir uma experiência de usuário mais fluida e um código mais limpo.

## ✨ Funcionalidades

- 🔐 **Login de Usuário:** Simulação de sistema de autenticação para identificação na navegação.
- 🔎 **Busca Global:** Pesquise por qualquer banda ou artista (ex: "Queen", "Anitta", "Linkin Park").
- 💿 **Explorador de Álbuns:** Visualização de discografia completa retornada pela API.
- 🔊 **Player de Áudio:** Reprodução de prévias (30 segundos) das faixas diretamente no navegador.
- ❤️ **Sistema de Favoritos:** Adicione ou remova músicas da sua lista pessoal de "Músicas Favoritas" (persistência de dados).
- 👤 **Gerenciamento de Perfil:** Visualização e edição de dados do usuário logado.

## 🚀 Tecnologias Utilizadas

- **[React.js](https://reactjs.org/)** - Biblioteca principal para construção de interfaces e gerenciamento de estado.
- **[React Router](https://v5.reactrouter.com/)** - Gerenciamento de rotas e navegação (SPA).
- **CSS3** - Estilização responsiva e layouts.
- **iTunes Search API** - Fonte de dados externa.

## 🧠 Desafios e Aprendizados

Este projeto foi fundamental para solidificar conceitos centrais do React:
* **Ciclo de Vida (Lifecycle Methods):** Controle do que acontece quando o componente monta, atualiza ou desmonta.
* **Gerenciamento de Estado:** Uso de `setState` e passagem de informações via *props*.
* **Requisições Assíncronas:** Consumo de API e tratamento de *Promises* para exibir as músicas.
* **Roteamento:** Criação de uma Single Page Application (SPA) onde a página não recarrega ao mudar de tela.

## 📂 Como Rodar o Projeto

```bash
# 1. Clone o repositório
git clone [https://github.com/RiqueBruno/projectTTunes.git](https://github.com/RiqueBruno/projectTTunes.git)

# 2. Entre na pasta
cd projectTTunes

# 3. Instale as dependências
npm install

# 4. Rode o projeto
npm start
