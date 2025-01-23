Aqui está um exemplo de um README em Markdown, abordando as regras solicitadas:

```markdown
# README - Jogo de Amigo Secreto

Este repositório contém as instruções para criar um simples jogo de Amigo Secreto utilizando HTML, JavaScript e boas práticas de desenvolvimento.

## Regras do Jogo

O objetivo deste jogo é permitir que um grupo de pessoas sorteie quem vai tirar quem no Amigo Secreto, sem que ninguém saiba o nome de quem tirou o seu. Aqui estão as instruções para criar a funcionalidade e o front-end básico.

---

## 1. Como Construir um Array para Adicionar Nomes

Primeiro, vamos construir um array de nomes em JavaScript. Este array irá armazenar os nomes das pessoas que estão participando do jogo.

```javascript
let nomes = ["Ana", "Carlos", "João", "Maria", "Paula"];
```

Você pode adicionar novos nomes ao array da seguinte maneira:

```javascript
nomes.push("Lucas"); // Adiciona Lucas ao final do array
```

Ou para remover um nome:

```javascript
nomes.splice(nomes.indexOf("Carlos"), 1); // Remove Carlos do array
```

---

## 2. Incluir Voz à Página

Para adicionar voz ao seu jogo, podemos usar a API de Web Speech para adicionar uma voz que pode ler os nomes dos participantes, ou até mesmo anunciar os resultados.

Exemplo de implementação:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo de Amigo Secreto</title>
</head>
<body>

    <h1>Bem-vindo ao Amigo Secreto!</h1>
    <button onclick="falarNome()">Anunciar Amigo Secreto</button>

    <script>
        function falarNome() {
            let nome = "Ana"; // Nome que será anunciado
            const speech = new SpeechSynthesisUtterance(nome);
            speech.lang = 'pt-BR';
            window.speechSynthesis.speak(speech);
        }
    </script>

</body>
</html>
```

Neste exemplo, ao clicar no botão "Anunciar Amigo Secreto", o nome "Ana" será anunciado pela voz do navegador.

---

## 3. Boas Práticas para HTML

- **Semântica**: Utilize as tags HTML de forma semântica, como `<header>`, `<main>`, `<section>`, `<footer>`, para que o código seja mais legível e acessível.
- **Acessibilidade**: Sempre forneça texto alternativo em imagens com o atributo `alt` e use `aria-label` para melhorar a navegação com leitores de tela.
- **Organização de código**: Mantenha o HTML limpo, organizado e com indentação consistente. Isso facilita a manutenção e leitura do código.
- **Evite Inline Styles**: Coloque o estilo CSS em um arquivo externo para manter o HTML mais limpo.
  
Exemplo de código bem estruturado:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Jogo de Amigo Secreto</title>
</head>
<body>
    <header>
        <h1>Jogo de Amigo Secreto</h1>
    </header>

    <main>
        <button onclick="falarNome()">Anunciar Amigo Secreto</button>
    </main>

    <footer>
        <p>&copy; 2025 Jogo de Amigo Secreto</p>
    </footer>
</body>
</html>
```

---

## 4. Como Fazer um Jogo de Amigo Secreto

Aqui está o fluxo básico para implementar o jogo de Amigo Secreto:

1. **Coletar os Nomes**: Use um formulário para coletar os nomes dos participantes.
2. **Sorteio**: Ao clicar no botão "Sorteio", os nomes são embaralhados e cada pessoa recebe o nome do seu amigo secreto.
3. **Mostrar o Resultado**: O nome sorteado pode ser mostrado em uma mensagem ou até anunciado por voz.

Exemplo de sorteio simples:

```javascript
function sortearAmigo() {
    const amigosSorteados = [];
    const nomes = ["Ana", "Carlos", "João", "Maria", "Paula"];
    
    // Embaralha os nomes
    const nomesSorteados = [...nomes].sort(() => Math.random() - 0.5);
    
    // Atribui cada nome ao próximo sorteado
    for (let i = 0; i < nomes.length; i++) {
        amigosSorteados.push({
            nome: nomes[i],
            amigo: nomesSorteados[(i + 1) % nomes.length]
        });
    }

    console.log(amigosSorteados);
}

sortearAmigo();
```

Este código faz o sorteio e associa cada participante a outro de forma aleatória.

---

## Conclusão

Seguindo essas instruções, você pode criar um jogo simples de Amigo Secreto com HTML, JavaScript e voz, respeitando as boas práticas de desenvolvimento. Fique à vontade para personalizar o jogo de acordo com suas preferências!
```

Este README oferece uma explicação clara de como construir a lógica do jogo de Amigo Secreto, como usar voz e segue as boas práticas para HTML. Se precisar de mais detalhes ou ajustes, só avisar!
