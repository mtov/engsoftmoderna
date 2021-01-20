# Perguntas Frequentes sobre Testes {.unnumbered}

#### Este artigo está em andamento; em breve, iremos adicionar mais perguntas e respostas {.unnumbered}

## Introdução {.unnumbered}

O objetivo deste artigo é responder algumas perguntas frequentes que são feitas
sobre o [Capítulo 8](https://engsoftmoderna.info/cap8.html) do livro. No entanto,
estamos interessados apenas em perguntas conceituais, principalmente sobre os 
três tipos de testes abordados no capítulo: unidade, integração e sistema. 
Também, não pretendemos abordar questões específicas de um framework 
de testes ou de qualquer outra tecnologia.

## O que é uma unidade? {.unnumbered}

No contexto de testes de unidade, a definição de unidade não é totalmente objetiva.
Tendemos a dizer que uma unidade é uma classe, no caso de sistemas
orientados a objetos. No entanto, não precisamos ser dogmáticos e podemos considerar 
que certos testes vão testar um **conjunto de classes**.
O fundamental é que tais testes atendam aos princípios FIRST, principalmente
no que diz respeito à letra F. Isto é, eles devem ser rápidos!

Complementando, se um teste T testa um conjunto de classes C1, C2, ..., Cn e
uma delas possui uma dependência *d* para um determinado serviço que deixa 
o teste lento, temos duas opções:

- Criar um mock para *d*: nesse caso, podemos chamar T de um 
  teste de unidade.
- Continuar a usar *d*: no entanto, como será um "teste lento", ele deve ser
chamado de um teste de integração.

Para completar a explicação, se o número de classes testadas (*n*, no exemplo)
for grande e incluir classes de diversas camadas da aplicação, sem qualquer
uso de mocks, é melhor chamar o teste de teste de sistema.

## O certo é teste de unidade ou teste unitário?

Na verdade, os dois termos são usados. Então, assumindo que a língua é uma
entidade viva e dinâmica, não consideramos errado usar qualquer um deles. 
Dito isso, preferimos teste de unidade, porque teste unitário pode passar a
ideia errada de que temos um único teste no sistema.

## Precisamos testar métodos privados? {.unnumbered}

Não, pois eles vão ser testados quando testarmos os métodos públicos da classe. 
Em outras palavras, o foco deve ser testar o comportamento dos métodos públicos. 
Por tabela, isso vai garantir que os métodos privados também estão funcionando.

## O que é um teste de fumaça (smoke test)? {.unnumbered}

É um teste de sistema, porém rápido e superficial. O objetivo é 
garantir que não existe um erro grave no funcionamento do sistema. Ou seja, se
não existe um "incêndio" (ou problema) de grandes proporções e que está gerando uma 
grande quantidade de "fumaça". Por exemplo, um teste de fumaça pode verificar 
se algumas telas da aplicação estão abrindo ou se determinadas APIs respondem 
a solicitações básicas. Mas, complementando, um teste de fumaça é um teste 
automático. 

Veja a descrição do teste de fumaça de uma aplicação:

> O nosso teste gera uma requisição HTTP para cada página da aplicação e então 
> testamos se o código de resposta HTTP retornado está correto. Embora não seja
> nada sofisticado, ele nos permite responder uma questão essencial:
> a aplicação está rodando?


* * * 

Voltar para a lista de [artigos](./artigos.html).
