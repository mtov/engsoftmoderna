# Perguntas Frequentes sobre Testes {.unnumbered}

#### Este artigo está em andamento; em breve, iremos adicionar mais perguntas e respostas {.unnumbered}

O objetivo deste artigo é responder algumas perguntas frequentes que são feitas
sobre o [Capítulo 8](https://engsoftmoderna.info/cap8.html) do livro. No entanto,
estamos interessados apenas em perguntas conceituais, principalmente sobre os 
três tipos de testes abordados no capítulo: unidade, integração e sistema. 
Também, não pretendemos abordar questões específicas de um framework 
de testes ou de qualquer outra tecnologia.

### O que é uma unidade? {.unnumbered}

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

### O certo é teste de unidade ou teste unitário? {.unnumbered}

Na verdade, os dois termos são usados. Então, assumindo que a língua é uma
entidade viva e dinâmica, não consideramos errado usar qualquer um deles. 
Dito isso, preferimos teste de unidade, porque teste unitário pode passar a
ideia errada de que temos um único teste no sistema.

### Precisamos testar métodos privados? {.unnumbered}

Não, pois eles vão ser testados quando testarmos os métodos públicos da classe. 
Em outras palavras, o foco deve ser testar o comportamento dos métodos públicos. 
Por tabela, isso vai garantir que os métodos privados também estão funcionando.

### Como testar métodos que têm efeito colateral? {.unnumbered}

Primeiro, uma rápida definição de efeito colateral: o termo designa métodos 
cuja execução não apenas retorna um valor, mas altera o contexto de execução. 
Por exemplo, um método tem um efeito colateral quando ele altera o estado do 
seu objeto ou o valor de uma variável global, salva um valor em algum arquivo, 
envia um mail, etc.

Voltando então à resposta, vamos dividi-la em duas situações: 

* Quando o efeito colateral é "próximo" do método sob teste.
* Quando o efeito colateral é "distante" do método sob teste.

O efeito colateral é "próximo" quando o método altera apenas o 
estado de seu objeto (isto é, os valores de atributos desse objeto). 
Por exemplo, um método `push()` altera o estado da pilha, para 
incluir mais um item. Nesse caso, normalmente, podemos usar um 
outro método, do próprio objeto, para testar se o efeito colateral 
desejado ocorreu. Por exemplo, um método `size()`,  que retorna 
o tamanho da pilha, pode ajudar. Veja um exemplo:

```
void testSizeStack() {
  Stack stack = new Stack();
  stack.push(10);           // método sob teste (com efeito colateral)
  stack.push(20);
  stack.push(30);
  int size = stack.size();  // acessa o efeito colateral dos pushes
  assertEquals(3,size);     // após os pushes, a pilha deve ter tamanho 3
}
```

No outro extremo, o efeito colateral pode estar "distante" do método 
chamado. Por exemplo, suponha que o método envie um mail, que chega na caixa 
postal de um outro processo. Normalmente, não é fácil contactar esse processo 
para saber que se a mensagem, de fato, chegou. Uma possível solução é então 
usar um `mock` e realizar um tipo de teste chamado comportamental. Isto é, 
testamos se a execução do método sob teste chamou algum método de interesse. 
No nosso caso, se essa execução chamou o método que produz o efeito colateral 
que nos interessa (o envio de um mail). Veja um exemplo:

```
void testeEnvioDeMail {
  SomeObject obj = new SomeObject();	
  Mailer m = mock(Mailer.class); // cria mock para serviço de envio de mail
  obj.someBusinessLogic(m);      // método que gera o efeito colateral
  verify(m).send(anyString());   // testa se a execução chamou o método send do mock, com um parâmetro do tipo string
}
```

Antes de concluir, a definição de efeito colateral "próximo" e "distante" 
de um método de teste não é totalmente objetiva. Na explicação acima, usamos 
exemplos extremos, nos quais existe pouca dúvida. Porém, em certos casos 
a decisão de testar o efeito colateral real ou de usar um mock pode ser 
mais difícil.

### Suponha um teste com dois asserts. Se o primeiro assert falhar, o segundo é executado? {.unnumbered}

Não, quando um comando `assert` falha, ele levanta uma exceção que finaliza 
imediatamente a execução do método de teste. Logo, o segundo `assert` não será 
executado.

Inclusive, esse é um dos motivos pelos quais recomenda-se ter apenas um comando
`assert` por método de teste. 

Para ficar mais claro, veja um exemplo:

```
@Test
public void test() {
  System.out.println("Primeiro assert: falha e termina execução");
  assertTrue(false);
  System.out.println("Segundo assert: não vai ser executado");
  assertTrue(true);
}
```

### Em qual diretório devo colocar os arquivos de teste? {.unnumbered}

Tipicamente, em um diretório separado, apenas com o código de testes.

Veja o exemplo do sistema `google/guava`:

* As classes e pacotes do sistema ficam em `src/com/google/common`.
* Os respectivos testes ficam em `test/com/google/common `.

Ou seja, normalmente, o diretório de testes "espelha" a organização dos
diretórios com as classes do sistema.

### O que é um teste de fumaça (smoke test)? {.unnumbered}

É um teste de sistema, porém rápido e superficial. O objetivo é 
garantir que não existe um erro grave no funcionamento do sistema.
Ou seja, se não existe um "incêndio" (ou problema) de grandes
proporções e que está gerando uma grande quantidade de "fumaça".
Por exemplo, um teste de fumaça pode verificar se algumas telas da
aplicação estão abrindo ou se determinadas APIs respondem a
solicitações básicas. Mas, complementando, um teste de fumaça é um
teste automático. 

Veja a descrição do teste de fumaça de uma aplicação:

> O nosso teste gera uma requisição HTTP para cada página da aplicação e então 
> testamos se o código de resposta HTTP retornado está correto. Embora não seja
> nada sofisticado, ele nos permite responder uma questão essencial:
> a aplicação está rodando?


* * * 

Voltar para a lista de [artigos](./artigos.html).
