# Como adicionar um livro novo ao site

Vale para qualquer livro. O exemplo é o primeiro livro de **Finanças**.

## 1. Criar a pasta do livro

Cada livro fica numa pasta com o endereço dele, em letras minúsculas e sem acento:

```
editorajm-site/
  historias-da-biblia/        livro que já existe (use como modelo)
  [endereco-do-livro]/        ex.: organizar-o-dinheiro
    index.html                página de vendas
    obrigado/index.html       página depois da compra
    img/
      livro-3d.jpg            900x900, aparece no card da página principal
      compartilhar.jpg        1200x630, aparece quando o link é enviado no WhatsApp
```

O jeito mais rápido é copiar a pasta `historias-da-biblia` e trocar os textos e as imagens.

## 2. O que toda página do livro precisa ter

Para ficar no padrão do site:

- **Topo padrão.** Copie o bloco `<header class="barra">` da página do livro da Bíblia, com o mesmo menu "Nossos livros". O botão amarelo do topo (`menu-cta`) mostra o preço do livro novo.
- **Arquivos compartilhados**, no fim do `<head>` e antes de `</body>`:
  ```html
  <link rel="stylesheet" href="/comum/topo.css">
  <script src="/comum/topo.js" defer></script>
  ```
- **Coluna central de 1200px.** Todo o conteúdo fica dentro de `<div class="dentro">`, e o rodapé usa `padding:56px max(var(--borda),calc((100% - 1200px)/2)) 40px`.
- **Testar no celular** (390px de largura) e no PC antes de publicar.

## 3. O que trocar na página de vendas

| Onde | O quê |
|---|---|
| `<title>`, `og:title`, `og:description` | Nome e descrição do livro |
| `og:image` e `canonical` | Endereço novo: `https://editorajm.com.br/[endereco-do-livro]/...` |
| `const CHECKOUT = "..."` | Link de pagamento da Hotmart do livro novo |
| `const FIM = new Date("...")` | Data em que o preço de lançamento acaba |
| Textos "até 30/11" | A data nova (aparece em vários lugares, procure por ela) |
| `menu-cta` no topo | O preço do livro novo |

Na página `obrigado/`, mantenha o `<meta name="robots" content="noindex">` e configure o endereço dela na Hotmart como página de obrigado.

**Cores do tema Finanças:** verde `#1f7a50` e verde-claro `#d6f1e3`, os mesmos do quadro de Finanças na página principal. O azul-marinho e o amarelo continuam sendo as cores da Editora (topo, rodapé e botão de compra).

## 4. Colocar o livro na página principal

No `index.html` da raiz, dentro do quadro `id="financas"`:

1. Apague o bloco `<div class="breve">` (o "Em breve").
2. Tire o comentário do card que já está pronto logo acima dele e troque o que está entre `[colchetes]`.

Com um livro só, o card ocupa o quadro inteiro no PC. Do segundo livro em diante eles ficam lado a lado sozinhos.

Ajuste também os textos que hoje falam só da Bíblia:

- No topo da página principal: "E-books de João Moura, autor do canal Oração do Dia..." passa a citar o Dindin com Ciência.
- Na seção "Quem está por trás da Editora JM": incluir o canal Dindin com Ciência.

## 5. Publicar

```
git add -A
git commit -m "Livro novo: [título]"
git push
```

O GitHub Pages atualiza o site em 1 ou 2 minutos.
