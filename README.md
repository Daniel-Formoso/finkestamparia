# 🎨 FINK Estamparia - Landing Page

Bem-vindo(a) à **Landing Page oficial da FINK Estamparia**!  
Aqui você encontra produtos personalizados como canecas, squeezes, camisetas e azulejos, com design moderno e responsivo.  

## 🌟 Sobre o Projeto

Esta LP foi criada para apresentar os produtos da **FINK Estamparia** de forma moderna, responsiva e fácil de manter.  
O conteúdo será dinâmico, permitindo futuras atualizações rápidas via **Strapi**. 

---

## 🚀 Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Strapi](https://img.shields.io/badge/Strapi-000000?style=for-the-badge&logo=strapi&logoColor=white)
![Formspree](https://img.shields.io/badge/Formspree-FF4785?style=for-the-badge&logo=formspree&logoColor=white)

---

## 📁 Estrutura do Projeto

```
/.next - Arquivos gerados pelo Next.js
/node_modules - Dependências do projeto
/public - Imagens e assets públicos
/src
└─ /app
├─ /components - Componentes React reutilizáveis
├─ /Modal - Componentes de modais
└─ /pages
├─ error.tsx
├─ not-found.tsx
├─ page.tsx
├─ favicon.ico
├─ globals.css
└─ layout.tsx
.gitignore
/eslint.config.mjs
/next-env.d.ts
/next.config.ts
/package-lock.json
/package.json
/postcss.config.mjs
/tailwind.config.js
/tsconfig.json
/README.md
```

---

## 📬 Formulário de Contato

A landing page inclui um **formulário de contato** para que os usuários possam enviar mensagens ou pedidos personalizados.  

### Como funciona:

- Campos coletados:
  - Nome
  - E-mail
  - Telefone
  - Mensagem
- Validação de campos obrigatórios.
- Envio via **Formspree** (ou outro endpoint configurável).
- Após o envio, aparece um **modal de confirmação** com feedback visual imediato.

### Exemplo de Modal

- Modal criado como componente React reutilizável.
- Estado controlado com `useState`.
- Pode ser facilmente adaptado para envio via Strapi no futuro.

--- 

