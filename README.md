<h1 align="center">💄 Palácio das Mulheres</h1>

<p align="center">
  Sistema de gerenciamento de estoque de produtos de beleza (Unha & Cabelo), feito com <strong>TypeScript</strong> e executado no terminal.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-4.x-blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/ts--node-execução%20direta-blueviolet?style=for-the-badge" />
</p>

---

## ✨ Sobre o Projeto

**Palácio das Mulheres** é um sistema de linha de comando que simula o controle de estoque de uma loja de cosméticos voltada para produtos de **unha** e **cabelo**. Ele permite gerenciar produtos, visualizar estoque, calcular faturamento e simular formas de pagamento.

Desenvolvido como exercício prático para consolidar conhecimentos em:

- Programação Orientada a Objetos
- Estruturas de dados
- Entrada de dados no terminal
- Modularização e boas práticas

---

## 🧰 Funcionalidades

| Nº | Funcionalidade                      | Descrição |
|----|-------------------------------------|-----------|
| 1️⃣ | **Adicionar Produto**              | Cadastra um novo item no estoque |
| 2️⃣ | **Listar Produtos**                | Mostra todos os produtos registrados |
| 3️⃣ | **Buscar Produto**                 | Encontra produto pelo número |
| 4️⃣ | **Atualizar Produto**             | Edita informações de um produto |
| 5️⃣ | **Formas de Pagamento**           | Exibe opções de pagamento disponíveis |
| 6️⃣ | **Verificar Faturamento**         | Calcula o valor total em estoque |
| 7️⃣ | **Apagar Produto**                | Remove um produto do sistema |
| 8️⃣ | **Sair do Sistema**               | Finaliza o programa |

---

## 🏗️ Estrutura do Projeto

palacio-das-mulheres/
├── src/
│ ├── Controller/
│ │ └── Lojacontroller.ts
│ ├── model/
│ │ ├── Produtos.ts
│ │ ├── ProdutosUnha.ts
│ │ └── ProdutosCabelo.ts
├── index.ts # Função principal (main)
├── tsconfig.json # Configuração do TypeScript
├── package.json
└── README.md

---

## 🚀 Como Executar o Projeto

> Você precisa ter o **Node.js**, **TypeScript** e **ts-node** instalados.

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/palacio-das-mulheres.git
cd palacio-das-mulheres

npm install
ts-node <nome do projeto>.ts

*****************************************************
                Palácio das Mulheres
*****************************************************
1 - Adicionar estoque de produtos
2 - Listar todos os produtos em estoque
3 - Buscar produto por Número
4 - Atualizar produto por número
5 - Formas de pagamento
6 - Verificar faturamento
7 - Apagar produto
8 - Sair do sistema
*****************************************************
Entre com a opção desejada:

🧠 Conceitos Aplicados
✅ Programação Orientada a Objetos (POO)

✅ Herança e Polimorfismo com classes ProdutosUnha e ProdutosCabelo

✅ Lógica de negócio encapsulada no Lojacontroller

✅ Entrada de dados usando readline-sync

✅ Boas práticas com modularização e tipagem forte (TypeScript)

👩‍💻 Desenvolvedora
Giulia Barreto
Desenvolvedora Full Stack em formação pela Generation Brasil

📜 Licença
Projeto de uso educacional, sem fins comerciais.
Desenvolvido com 💖 como parte do bootcamp da Generation Brasil


