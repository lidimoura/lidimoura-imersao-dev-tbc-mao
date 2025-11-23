<div align="center">

# 🌿 Base de conhecimento: Turismo & TBC Manaus
### Projeto imersão dev Alura & Google

![Status](https://img.shields.io/badge/Status-MVP%20Concluído-success?style=for-the-badge)
![Tech](https://img.shields.io/badge/Stack-Node.js%20%7C%20Gemini%20AI-blueviolet?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

<br>

![Banner do Projeto](https://via.placeholder.com/1000x500?text=Substitua+pelo+Print+da+Sua+Tela)
*(Interface desenvolvida com foco em acessibilidade e identidade visual amazônica)*

[🔗 **Acesse o projeto online (GitHub Pages)**](https://lidimoura.github.io/lidimoura-imersao-dev-tbc-mao/)

</div>

---

## Sobre o projeto

Este projeto é uma **base de conhecimento interativa** focada em **Turismo regional** e experiências autênticas em Manaus, com destaque especial para o **Turismo de base comunitária (TBC)**.

Desenvolvido durante a **imersão dev com Alura e Google**, o objetivo foi aplicar conceitos de Fullstack (Front-end e Back-end com IA) para resolver um problema real: a falta de centralização de informações atuais sobre roteiros turísticos "raiz", gastronômicos e sustentáveis na Amazônia, especialmente em Manaus. 

---

## O processo (Curadoria híbrida)

O grande diferencial deste projeto é a engenharia de dados utilizada para popular a aplicação. Diferente de listas estáticas, utilizamos um fluxo que une expertise humana e Inteligência Artificial:

1.  **A semente (Curadoria humana):**
    Criação manual de um arquivo `baseDeConhecimento.json` contendo **25 locais validados** por uma especialista, garantindo a qualidade inicial e o "tom" das descrições.

2.  **O motor (Expansão via IA):**
    Desenvolvimento de um script em **Node.js** conectado à API do **Google Gemini**. O script lê a base inicial e expande a lista automaticamente, buscando novos locais de turismo e TBC que não estavam mapeados.

3.  **O filtro (anti-alucinação):**
    Utilização de **Prompt Engineering** para focar exclusivamente em cultura regional, natureza e gastronomia autêntica, filtrando locais genéricos.

4.  **O resultado (Front-End):**
    A aplicação web consome o arquivo JSON final (50 itens) e renderiza os cards com links inteligentes de busca, tags de acessibilidade e design responsivo.

---

## Tecnologias utilizadas

| Tech | Função no projeto |
| :--- | :--- |
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) | **Back-end Scripting:** Leitura de arquivos e conexão com API. |
| ![Google Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=flat&logo=googlebard&logoColor=white) | **Inteligência Artificial:** Geração e estruturação de novos dados. |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | **Lógica Front-end:** Fetch API, filtros dinâmicos e manipulação do DOM. |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | **Estilização:** Variáveis CSS (Paleta Rio Negro & Açaí) e Flexbox/Grid. |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | **Estrutura:** Semântica e acessível. |

---

## Como rodar localmente

Para testar o motor de curadoria IA na sua máquina:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/lidimoura/lidimoura-imersao-dev-tbc-mao.git](https://github.com/lidimoura/lidimoura-imersao-dev-tbc-mao.git)
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure a Chave API:**
    Crie um arquivo `.env` na raiz e adicione sua chave do Google AI Studio:
    ```env
    GEMINI_API_KEY=sua_chave_aqui
    ```

4.  **Execute o Gerador:**
    ```bash
    npm start
    ```
    *O script lerá a base atual e buscará novos locais automaticamente.*

---

## Autora

<div align="center">
  <img src="https://github.com/lidimoura.png" width="100px" style="border-radius:50%" alt="Foto Lidi Moura">
  
  **Lídi Moura**
  <br>
  *Criadora de soluções full-stack. Projetando soluções digitais acessíveis (Encontro D'Água Hub) com foco em CS e impacto social.*
  <br>
  *Especialização em Data Science(aluna ALURA).*
  <br>
  <br>
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/lidimoura)
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lidimoura)

</div>

---

> Feito com 💛 durante a Imersão Dev da Alura.
