 JavaScript Essentials: Variáveis e Memória

> Um guia técnico e prático sobre os fundamentos de variáveis no JavaScript, cobrindo desde a declaração até o comportamento de escopo e armazenamento na memória.

 Objetivo
Este repositório serve como material de consulta para entender como o motor do JavaScript (V8/outros) gerencia dados, a evolução das palavras-chave `var`, `let` e `const` e as regras de visibilidade no código.

 Conteúdo Detalhado

### 1. Declaração e Evolução
Uma análise sobre as diferenças fundamentais entre:
- **var:** O método clássico (ES5), com escopo de função e comportamento de *hoisting*.
- **let:** Introduzido no ES6, com escopo de bloco.
- **const:** Para valores constantes que não permitem reatribuição.

### 2. Escopo (Scope)
Explicação visual e em código sobre:
- **Global Scope:** Variáveis acessíveis em qualquer lugar.
- **Function Scope:** Variáveis restritas ao corpo da função.
- **Block Scope:** O comportamento restritivo de `let` e `const` dentro de `{ }`.

### 3. Armazenamento na Memória
Como o JavaScript gerencia a pilha e o monte:
- **Stack (Pilha):** Armazenamento de tipos primitivos (Static Allocation).
- **Heap (Monte):** Armazenamento de objetos e funções (Dynamic Allocation).

 Exemplos Práticos
O repositório contém arquivos `.js` comentados demonstrando erros comuns de referência e boas práticas de nomenclatura.

```javascript
// Exemplo de Temporal Dead Zone com let
console.log(nome); // ReferenceError
let nome = "Dev";
