# 🌐 Paulo Carvalho Perito Judicial — Website Responsivo

> Website institucional desenvolvido para **Paulo Carvalho**, Assistente Técnico e Perito Judicial, com o **objetivo** de aumentar o **alcance da empresa**, priorizando **performance** e seguindo as boas práticas de desenvolvimento front-end.

🔗 **Acesse o site online:** [paulocarvalhoperitojudicial.com](https://paulocarvalhoperitojudicial.com)  
📦 **Deploy:** [Vercel](https://vercel.com)  
💻 **Repositório GitHub:** [github.com/matheus-fraga/paulo-carvalho](https://github.com/matheus-fraga/paulo-carvalho)

---

## 🏷️ Status do Projeto

[![Vercel Deploy](https://img.shields.io/badge/Vercel-Deploy-brightgreen?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)](https://github.com/FragaTheus/paulo-carvalho/actions)

---

## 🚀 Tecnologias Utilizadas

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Joy UI](https://img.shields.io/badge/Joy%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/joy-ui/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/)

---

## 🧠 Principais Funcionalidades

- ✅ **Design responsivo** e otimizado para diferentes dispositivos.  
- 🔄 **Navegação dinâmica** utilizando React Router.  
- 🧩 **Componentização** e reutilização de elementos visuais para aumentar a performance.  
- 🧹 **Configuração de lint e type-checking** para padronizar o código e torná-lo mais legível.  
- ✉️ **Envio de mensagens e e-mails** para contato direto com o cliente.   

---

## 💻 Como Rodar Localmente
### 📋 Pré-requisitos
- Node.js instalado
- Yarn (Gerenciador de pacote) instalado

```bash
# Clone o repositório
git clone https://github.com/matheus-fraga/paulo-carvalho.git](https://github.com/FragaTheus/site-perito-judicial-paulo-carvalho.git

# Entre na pasta do projeto
cd site-perito-judicial-paulo-carvalho

# Instale as dependências
yarn install

# Rode o projeto em modo de desenvolvimento
yarn dev

# Abra no navegador
http://localhost:5173
```

---

## 📁 Estrutura do Projeto

```
.
├── 📂 public/ // Arquivos públicos: imagens, ícones, sitemap
├── 📂 src/ // Código-fonte da aplicação
│ ├── 🧩 components/ // Componentes reutilizáveis
│ ├── ⚙️ contexts/ // Contextos e funções globais
│ ├── 🏗 layout/ // Layouts: main, página e seção
│ ├── 📄 pages/ // Páginas que combinam componentes e layouts
│ ├── 🌐 router/ // Rotas entre páginas
│ ├── 🎨 theme/ // Configurações de tema
│ ├── App.tsx // Componente principal, provê contextos e renderiza páginas
│ ├── index.css // Estilos globais
│ ├── main.tsx // Entry point: insere App no index.html
│ └── vite-env.d.ts // Tipos do Vite
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
├── vite.config.ts
└── yarn.lock
```

---

## 🖼️ Visual do Projeto (Em breve)

| Versão Desktop                           | Versão Mobile                          |
| ---------------------------------------- | -------------------------------------- |
| ![desktop](./public/preview-desktop.png) | ![mobile](./public/preview-mobile.png) |

---

## 🚀 Funcionalidade Futura

- Adicionar integração com **Google Analytics**  

---

## 💡 Aprendizados e Desafios

- Uso de **React** e seus **componentes** para criar uma interface modular e escalável, focando em desempenho por meio da reutilização de componentes principais.  
- Aplicação de **TypeScript**, **hooks** para gerenciamento de estado e validação de inputs, e **contexts** para fornecer funções (como de responsividade) em todo o projeto.  
- Desenvolvimento do **design do zero**, alinhando cores, temas, tipografia e responsividade.  
- Integração e uso do **Joy UI (Material UI)**, garantindo consistência visual e enfrentando desafios de customização.  
- Controle de versão com **Git**, organizando commits e branches de forma eficiente.  
- Deploy do site na **Vercel** e configuração do **domínio personalizado** pela Hostinger.  
- Integração do site ao **Google**, tornando-o acessível para toda a comunidade que necessita de assistência técnica.  
- Aprimoramento das **metatags** e inclusão de **scripts** no corpo do HTML para otimizar o SEO de busca.  

---

## 🧩 Observações (ou “Maior Gambiarra”)

Durante o projeto, criei um componente chamado **SectionLayout**, responsável por automatizar a criação de seções.  
No início, a ideia parecia genial — e realmente ajudou bastante —, mas acabou limitando a diversidade de layouts.  
Conforme o projeto crescia, precisei refatorar e adaptar várias partes para recuperar a flexibilidade.  
Essa “gambiarra controlada” me ensinou o valor de planejar melhor a arquitetura dos componentes antes de abstrair demais. 😅  


---

## 👨‍💻 Sobre o Desenvolvedor

Desenvolvido por **Matheus Fraga** — **Desenvolvedor Fullstack Júnior**, com experiência em **Next.js e Spring Boot**.  
Atualmente aprimorando conhecimentos em **desenvolvimento Full Stack e aplicações escaláveis**.

🔗 [LinkedIn](https://www.linkedin.com/in/matheus-fraga-dev-full-stack/)  
💻 [GitHub](https://github.com/FragaTheus)  
📬 Contato: matheusguto1@hotmail.com

---

## 📄 Licença

Copyright (c) 2025 Matheus Fraga.  
Todos os direitos reservados. Este projeto foi desenvolvido sob contrato para Paulo Carvalho e não pode ser copiado, modificado ou distribuído sem autorização expressa do autor ou do cliente.

---


