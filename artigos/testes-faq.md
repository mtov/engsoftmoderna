# Perguntas Frequentes sobre Testes {.unnumbered}

#### Este artigo está em andamento; em breve, iremos adicionar mais perguntas e respostas {.unnumbered}

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
no que diz respeito à letra F. Isto é, eles devem ser rápidos!

Complementando, se um teste T testa um conjunto de classes C1, C2, ..., Cn e
uma delas possui uma dependência *d* para um determinado serviço que deixa 
o teste lento, temos duas opções:

- Criar um mock para *d*: nesse caso, podemos chamar T de um 
  **teste de unidade**.
- Continuar a usar *d*: no entanto, como será um "teste lento", ele deve ser
chamado de um **teste de integração**.

No entanto, se o número de classes testadas (*n*, no exemplo)
for grande e incluir classes de diversas camadas da aplicação, sem qualquer
uso de mocks, é melhor chamar o teste de **teste de sistema**.

### 3. Precisamos testar métodos privados? {.unnumbered}

Não, pois eles vão ser testados quando testarmos os métodos públicos da classe. 
Em outras palavras, o foco deve ser testar o comportamento dos métodos públicos. 
Por tabela, isso vai garantir que os métodos privados também estão funcionando.

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
void testEmpilhaStack() {
  Stack stack = new Stack();
  stack.push(10);           // método sob teste (com efeito colateral)
  stack.push(20);
  stack.push(30);
  int size = stack.size();  // acessa o efeito colateral dos pushes
  assertEquals(3,size);     // após os pushes, a pilha deve ter tamanho 3
}
```

Veja que o método `push` retorna `void`. Ou seja, realmente, não
conseguimos testar um `push` de forma usual: isto é, chamando-o e
verificando se o valor que ele retorna é aquele esperado.

##### Teste comportamental {.unnumbered}

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
   Mailer m = mock(Mailer.class); // cria mock para serviço de envio de mail
   obj.someBusinessLogic(m);      // método que gera o efeito colateral
   verify(m).send(anyString());   // testa se a execução chamou o método send do mock, com um parâmetro do tipo string
}
```

No teste acima, não testamos o efeito colateral (isto é, se a mensagem 
chegou no destino), mas sim se o método `send`, responsável por enviar 
a mensagem, foi chamado durante a execução de `someBusinessLogic`.

### 5. Como testar métodos que não têm efeito colateral? {.unnumbered}

Normalmente, esses são os métodos fáceis de serem testados: eles 
recebem alguns parâmetros, processam eles e retornam um resultado, 
sem alterar absolutamente nada do ambiente de execução. Veja 
um exemplo:

```
public void testMetodoSemEfeitoColateral() {
  String s = "smiles";
  assertTrue(s.endsWith("miles")); // string termina com "miles"?
}

```
### 6. Em qual pacote (ou módulo, ou diretório) devo colocar os testes? {.unnumbered}

Tipicamente, na maioria das linguagens, os testes ficam em um diretório 
separado, apenas com o código de testes.

Veja o exemplo do sistema `google/guava`:

* As classes e pacotes do sistema ficam em `src/com/google/common`.
* Os respectivos testes ficam em `test/com/google/common `.


### 7. O que é um teste de fumaça (smoke test)? {.unnumbered}

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
