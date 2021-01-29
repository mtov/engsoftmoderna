# Perguntas Frequentes sobre Testes {.unnumbered}

O objetivo deste artigo é responder algumas perguntas frequentes que são feitas
sobre o [Capítulo 8](https://engsoftmoderna.info/cap8.html) do livro. No entanto,
estamos interessados apenas em perguntas conceituais, principalmente sobre os 
três tipos de testes abordados no capítulo: **unidade, integração e sistema**. 
Também, não pretendemos abordar questões específicas de um framework 
de testes ou de qualquer outra tecnologia.


### 1. O certo é teste de unidade ou teste unitário? {.unnumbered}

Os dois termos são usados. Então, assumindo que a língua é uma
entidade viva e dinâmica, não consideramos errado usar qualquer um deles. 
Dito isso, preferimos teste de unidade, porque teste unitário pode passar a
ideia errada de que temos um único teste no sistema.


### 2. O que é uma unidade? {.unnumbered}

No contexto de testes de unidade, a definição de unidade não é totalmente objetiva.
Tendemos a dizer que uma unidade é uma classe, no caso de sistemas
orientados a objetos. No entanto, não precisamos ser dogmáticos e podemos considerar 
que certos testes vão testar um **conjunto de classes**.
O fundamental é que tais testes atendam aos princípios FIRST, principalmente
aqueles associados às três primeiras letras: rápidos, independentes e repetíveis (ou determinísticos)


### 3. Precisamos testar métodos privados? {.unnumbered}

Não, pois eles vão ser testados quando testarmos os métodos públicos da classe. 
Em outras palavras, o foco deve ser testar os métodos públicos. Por tabela, 
isso vai garantir que os métodos privados também estão funcionando.


### 4. Como testar métodos que têm efeito colateral? {.unnumbered}

Primeiro, uma rápida definição de efeito colateral: o termo designa métodos 
cuja execução não apenas retorna um valor, mas também altera o contexto de 
execução. Por exemplo, um método tem um efeito colateral quando ele altera 
o valor de um atributo do seu objeto ou de uma variável global, 
salva um valor em algum arquivo, envia um mail, etc.

Voltando à pergunta, temos duas possíveis respostas:

* Testar se o efeito colateral ocorreu
* Implementar um teste comportamental ou de interação

Vamos explicar cada um desses casos a seguir.

##### Teste do efeito colateral {.unnumbered}

Suponha um método `push()` que altera o estado da sua pilha, para incluir 
mais um item. Nesse caso, podemos usar um outro método, do próprio objeto, 
para testar se o efeito colateral desejado ocorreu. Por exemplo, um 
método `size()`, que retorna o tamanho da pilha, pode ajudar. Veja um 
exemplo:

```
void testeEmpilhaStack() {
  Stack stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  int size = stack.size();
  assertEquals(3,size);
}
```

Veja que o método `push` retorna `void`. Ou seja, realmente, não
conseguimos testar um `push` de forma usual: isto é, chamando-o e
verificando se o valor que ele retorna é aquele esperado.

##### Teste comportamental (ou de interação) {.unnumbered}

Suponha agora que um método envia um mail, que chega na caixa postal de um outro 
processo. Normalmente, não é fácil contactar esse processo  para testar 
se a mensagem, de fato, chegou. Uma possível solução consiste em 
usar um mock e realizar um tipo de teste chamado de **teste comportamental**
ou **teste de interação**. Isto é, testamos se a execução do método sob 
teste chamou algum método de interesse. No nosso caso, devemos testar 
se essa execução chamou o método que produz o efeito colateral que nos 
interessa (o envio de um mail). Veja um exemplo (retirado da Seção 8.6.2 do 
[Capítulo 8](https://engsoftmoderna.info/cap8.html) do livro)

```
void testeEnvioDeMensagem {
  SomeObject obj = new SomeObject();	
  Mailer m = mock(Mailer.class);
  obj.someBusinessLogic(m);
  verify(m).send(anyString());
}
```

No teste acima, não testamos o efeito colateral (isto é, se a mensagem 
chegou no destino), mas sim se o método `send`, responsável por enviar 
a mensagem, foi chamado durante a execução de `someBusinessLogic`.

Antes de concluir, gostaríamos de mencionar que testes de interação, como
o mostrado acima, são mais frágeis, pois eles estão acoplados a 
detalhes da implementação interna do método que está sendo testado.


### 5. Como testar métodos que não têm efeito colateral? {.unnumbered}

Normalmente, esses são os métodos fáceis de serem testados: eles 
recebem alguns parâmetros, processam eles e retornam um resultado, 
sem alterar absolutamente nada do ambiente de execução. Veja 
um exemplo:

```
public void testeMetodoSemEfeitoColateral() {
  String s = "smiles";
  assertTrue(s.endsWith("miles"));
}

```

Testes como o acima, que apenas verificam o resultado do método 
chamado — ou, no máximo, o estado de alguma outra estrutura de 
dados do sistema — são chamados de **testes de estado**.


### 6. Quando preciso criar um mock para uma dependência? {.unnumbered}

Suponha que temos que testar um método `f` da seguinte classe:

```
class A {
 
  private D d;   
 
  A(D d) {
  	this.d = d;
  }	
 
  public int f(...) {  
    ...
  }
}
```	

A classe `A` possui uma dependência `d` para o tipo `D`. Quando precisamos
criar um mock para essa dependência?

* Quando `D` é um serviço lento, como um banco de dados.

* Quando não é trivial instanciar um objeto do tipo `D`. Por exemplo, a construtora de `D` pode exigir como parâmetro um objeto do tipo `E`; por sua vez, a construtora de `E` pode exigir um objeto do tipo `F` e assim por diante.

* Quando `D` é um serviço não-determinísticos. Por exemplo, `D` é um serviço financeiro cujo resultado varia com a cotação do dólar.

* Quando a execução de um método de `D` for importante para o teste, conforme vimos no teste comportamental da pergunta 4. Nesse teste, `D` é o tipo `Mailer`e precisamos testar se a execução de `f` vai enviar um mail.


### 7. Como criar um mock para uma dependência privada? {.unnumbered}

Se a dependência for configurável por meio do construtor da classe ou de um método `set` não existe problema.

Porém, se a dependência não for configurável de fora da classe, aí sim temos um problema. Nesse caso, a única solução é expor essa dependência de forma a permitir a sua configuração pelo teste. Evidentemente, isso pode quebrar o encapsulamento da classe, mas não existe outra solução.


### 8. Por que não usam o termo dublê de testes no livro? {.unnumbered}

Reconhecemos que **dublê** é um termo usado por diversos autores, desde que foi 
descrito no livro do Gerard Meszaros (*xUnit Test Patterns*).

Porém, achamos que mock é um termo mais comum, principalmente entre ferramentas 
de teste. Veja alguns exemplos:

* *Jest uses a custom resolver for imports in your tests, making it simple to **mock any object** outside of your test’s scope.*

* *Mockito is a **mocking framework** that tastes really good.*

* *unittest.mock ... allows you to replace parts of your system under test with **mock objects**.*

Ou seja, para ficarmos alinhados com a documentação dessas ferramentas, 
preferimos adotar o termo mock. No entanto, também acrescentamos uma nota 
explicando o conceito de dublês e seus tipos, tais como stubs, fakes, etc.


### 9. Em qual pacote (ou módulo, ou diretório) devo colocar os testes? {.unnumbered}

Tipicamente, na maioria das linguagens, os testes ficam em um diretório 
separado, apenas com o código de testes.

Veja o exemplo do sistema `google/guava`:

* As classes e pacotes do sistema ficam em `src/com/google/common`.
* Os respectivos testes ficam em `test/com/google/common `.


### 10. O que é um teste de fumaça (smoke test)? {.unnumbered}

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
