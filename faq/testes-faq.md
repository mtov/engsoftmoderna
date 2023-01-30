

# Perguntas Frequentes sobre Testes {.unnumbered}

O objetivo deste artigo é responder algumas perguntas frequentes que são feitas
sobre o [Capítulo 8](https://engsoftmoderna.info/cap8.html) do livro. No entanto,
estamos interessados apenas em perguntas conceituais, principalmente sobre os 
três tipos de testes abordados no capítulo: **unidade, integração e sistema**. 
Também, não pretendemos abordar questões específicas de um framework 
de testes ou de qualquer outra tecnologia.

A lista atual de perguntas está organizada em quatro grandes temas:

##### Perguntas sobre conceitos de testes {.unnumbered}

1. [O certo é teste de unidade ou teste unitário?](#o-certo-%C3%A9-teste-de-unidade-ou-teste-unit%C3%A1rio)
2. [O que é uma unidade?](#o-que-%C3%A9-uma-unidade)
3. [No contexto de testes, o que significam os termos falso positivo/negativo e verdadeiro positivo/negativo?](#no-contexto-de-testes-o-que-significam-os-termos-falso-positivonegativo-e-verdadeiro-positivonegativo)
4. [Por que não usam o termo dublê de testes no livro?](#por-que-n%C3%A3o-usam-o-termo-dubl%C3%AA-de-testes-no-livro)

##### Perguntas sobre a escrita de testes {.unnumbered}

5. [Precisamos testar métodos privados?](#precisamos-testar-m%C3%A9todos-privados)
6. [Como testar métodos que têm efeito colateral?](#como-testar-m%C3%A9todos-que-t%C3%AAm-efeito-colateral)
7. [Como testar métodos que não têm efeito colateral?](#como-testar-m%C3%A9todos-que-n%C3%A3o-t%C3%AAm-efeito-colateral)
8. [Quando preciso criar um mock para uma dependência?](#quando-preciso-criar-um-mock-para-uma-depend%C3%AAncia)
9. [Como criar um mock para uma dependência privada?](#como-criar-um-mock-para-uma-depend%C3%AAncia-privada)
10. [Em qual pacote (ou módulo, ou diretório) devo colocar os testes?](#em-qual-pacote-ou-m%C3%B3dulo-ou-diret%C3%B3rio-devo-colocar-os-testes)

##### Perguntas sobre a execução de testes {.unnumbered}

11. [Com que frequência devemos rodar os testes?](#com-que-frequ%C3%AAncia-devemos-rodar-os-testes)
12. [Quais testes devem ser rodados por um servidor de Integração Contínua (CI)?](#quais-testes-devem-ser-rodados-por-um-servidor-de-integra%C3%A7%C3%A3o-cont%C3%ADnua-ci)
13. [Para que servem suítes de testes?](#para-que-servem-su%C3%ADtes-de-testes)

##### Perguntas sobre outros tipos de testes {.unnumbered}

14. [O que é um teste de fumaça (smoke test)?](#o-que-%C3%A9-um-teste-de-fuma%C3%A7a-smoke-test)
15. [O que é um teste de snapshot?](#o-que-%C3%A9-um-teste-de-snapshot)
16. [O que são testes exploratórios?](#o-que-s%C3%A3o-testes-explorat%C3%B3rios)
17. [O que é um Teste de Mutação?](#o-que-%C3%A9-um-teste-de-muta%C3%A7%C3%A3o)

Segue a lista de perguntas e suas respostas.

* * * 

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
aqueles associados às três primeiras letras: rápidos, independentes e repetíveis (ou determinísticos). Mais detalhes sobre esses princípios na 
Seção 8.3.1 do [Capítulo 8](https://engsoftmoderna.info/cap8.html#princ%C3%ADpios-first).

### 3. No contexto de testes, o que significam os termos falso positivo/negativo e verdadeiro positivo/negativo? {.unnumbered}

Seguem as definições:

* Falso positivo: um teste que falha, embora o código testado esteja correto.
* Falso negativo: um teste que passa, apesar de o código testado ter um bug.
* Verdadeiro positivo: um teste que falha e o código testado, de fato, tem um bug.
* Verdadeiro negativo: um teste que passa e o código testado, de fato, está correto.

Ou seja, com testes, sempre almejamos obter verdadeiro positivos ou negativos. Um falso positivo indica um bug nos nossos testes. Por fim, um falso negativo indica que deixamos de testar entradas que levariam o programa a falhar.

Ainda para ficar mais claro:

* verdadeiro = teste cujo resultado é confiável
* falso = teste cujo resultado não é confiável
* positivo = teste que falha, isto é, emite um "alerta"
* negativo = teste que passa

### 4. Por que não usam o termo dublê de testes no livro? {.unnumbered}

Reconhecemos que **dublê** é um termo usado por diversos autores, desde que foi 
descrito no livro do Gerard Meszaros (*xUnit Test Patterns*).

Porém, achamos que mock é um termo mais comum, principalmente entre ferramentas 
de teste. Veja alguns exemplos:

* *Jest uses a custom resolver for imports in your tests, making it simple to **mock any object** outside of your test’s scope.*

* *Mockito is a **mocking framework** that tastes really good.*

* *unittest.mock ... allows you to replace parts of your system under test with **mock objects**.*

Ou seja, para ficarmos alinhados com a documentação dessas ferramentas, 
preferimos adotar o termo mock. 

Além disso, achamos que a diferença entre os vários tipos de dublês não é 
intuitiva, nem auto-explicativa. Ou seja, não é tão simples lembrar, no dia a dia, 
a característica distintiva de um spy, stub, dummy, fake, etc.

Por outro lado, é importante ressaltar que acrescentamos, no livro, uma nota 
explicando o conceito de dublês e seus diferentes tipos.


### 5. Precisamos testar métodos privados? {.unnumbered}

Não, pois eles vão ser testados quando testarmos os métodos públicos da classe. 
Em outras palavras, o foco deve ser testar os métodos públicos. Por tabela, 
isso vai garantir que os métodos privados também estão funcionando.


### 6. Como testar métodos que têm efeito colateral? {.unnumbered}

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
[Capítulo 8](https://engsoftmoderna.info/cap8.html#mocks-vs-stubs) do livro)

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


### 7. Como testar métodos que não têm efeito colateral? {.unnumbered}

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


### 8. Quando preciso criar um mock para uma dependência? {.unnumbered}

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

* Quando `D` é um serviço não-determinístico. Por exemplo, `D` é um serviço financeiro cujo resultado varia com a cotação do dólar.

* Quando a execução de um método de `D` for importante para o teste, conforme vimos no teste comportamental da pergunta 4. Nesse teste, `D` é o tipo `Mailer`e precisamos testar se a execução de `f` vai enviar um mail.


### 9. Como criar um mock para uma dependência privada? {.unnumbered}

Se a dependência for configurável por meio do construtor da classe ou de um método `set` não existe problema.

Porém, se a dependência não for configurável de fora da classe, aí sim temos um problema. Nesse caso, a única solução é expor essa dependência de forma a permitir a sua configuração pelo teste. Evidentemente, isso pode quebrar o encapsulamento da classe, mas não existe outra solução.


### 10. Em qual pacote (ou módulo, ou diretório) devo colocar os testes? {.unnumbered}

Tipicamente, na maioria das linguagens, os testes ficam em um diretório 
separado, apenas com o código de testes.

Veja o exemplo do sistema `google/guava`:

* As classes e pacotes do sistema ficam em `src/com/google/common`.
* Os respectivos testes ficam em `test/com/google/common `.


### 11. Com que frequência devemos rodar os testes? {.unnumbered}

Basicamente, essa resposta depende do tipo de teste!

Por um lado, testes de unidade devem ser executados com grande 
frequência. Por exemplo, sempre que compilar o código, nada 
impede que você também execute tais testes. Veja que, por definição, 
testes de unidade rodam rapidamente. 

No outro extremo, temos os testes de sistema ou testes end-to-end,
os quais devem ser executados com uma frequência muito menor.
Por exemplo, os autores do livro Software Engineering at 
Google afirmam o seguinte: 

> Os times no Google frequentemente isolam os testes maiores, 
executando-os somente durante o processo de build e de release, 
de forma a não impactar o fluxo de trabalho dos desenvolvedores.

No meio do caminho, temos os testes de integração. Alguns deles 
costumam rodar rápido, em alguns minutos. Porém, sabemos que
existem também testes de integração que levam horas para rodar, 
o que inviabiliza a sua execução frequente.

### 12. Quais testes devem ser rodados por um servidor de Integração Contínua (CI)? {.unnumbered}

A resposta para essa pergunta é uma consequência da 
resposta da pergunta anterior. Basicamente, ela é a seguinte:

* Testes de unidade: com certeza, devem ser executados por 
um servidor de CI.

* Testes de sistema, testes end-to-end ou testes de requisitos
não funcionais (tais como testes de performance): normalmente, 
como são testes mais lentos, eles não são incluídos no serviço 
de CI.

* Testes de integração: aqui a resposta varia, pois existem testes 
de integração que rodam rápido (por exemplo, em alguns minutos) ou 
que levam bem mais tempo para rodar. Então, se o teste de integração 
rodar dentro de um limite de tempo razoável, ele pode ser sim 
incluído no serviço de CI.

### 13. Para que servem suítes de testes?  {.unnumbered}

Uma suíte de testes é um conjunto de testes que
pretendemos rodar juntos. Por exemplo, podemos optar por 
particionar os testes de um dado sistema em duas suítes: a primeira 
com os testes rápidos e que serão executados com frequência; e a 
segunda com testes que demoram mais tempo e que, por isso mesmo, 
queremos rodar mais raramente.


### 14. O que é um teste de fumaça (smoke test)? {.unnumbered}

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

### 15. O que é um teste de snapshot? {.unnumbered}

Esses testes são usados para testar a saída de componentes visuais,
como, por exemplo, componentes implementados usando-se frameworks 
como React, Vue.js, etc.

Na definição acima, o termo saída refere-se ao leiaute do componente,
conforme representado, por exemplo, em um documento HTML.

Um teste de snapshot funciona então assim:

* Na primeira vez que o teste for executado, ele simplesmente vai
renderizar o componente que está sendo testado e obter a sua saída em
HTML. Essa saída textual é chamada de snapshot e será gravada em um
arquivo específico.
 
* Nas execuções seguintes, o teste renderiza de novo o componente que
está sendo testado e compara o seu leiaute atual com o snapshot
gravado em disco. Se os dois arquivos forem iguais, o teste vai
passar. Caso contrário, o teste vai falhar e será mostrado o diff 
dos arquivos.

Em caso de falha, o framework de teste oferece um comando para
resetar, isto é, apagar o snapshot. Feito isso, o processo acima 
se repete.

A principal vantagem de testes de snapshot é que eles podem ser
implementados de forma simples, por meio de pequenos trechos de
código. Por outro lado, a principal desvantagem é a sua fragilidade,
pois mesmo pequenas mudanças no leiaute de uma página resultam em
falsos positivos.

Por isso, alguns desenvolvedores consideram que testes de snapshot, 
na verdade, geram *warnings* que alertam sobre mudanças na
apresentação de um componente. Esses warnings devem ser analisados
para comprovar se, de fato, eles representam regressões ou não. 
Se não representarem, os defensores de testes de snapshot 
argumentam que o processo de resetar os snapshots é simples e 
rápido.


### 16. O que são testes exploratórios? {.unnumbered}

Basicamente, existem dois tipos de testes manuais:

* Testes baseados em Casos de Teste. Um caso de teste documenta o que deve 
ser testado, incluindo as entradas que devem ser fornecidas no teste, como
 fornecer essas entradas (por exemplo, por meio de quais telas e campos) e, 
 por fim, eles especificam os resultados esperados. Logo, supondo a existência 
 de casos de teste precisos e completos, mesmo um testador com pouca 
 experiência deve ser capaz de testar um sistema de forma manual.

* Testes Exploratórios. Neste caso, um testador executa e testa um sistema 
com um maior grau de liberdade, ou seja, não existe um roteiro pré-definido 
formado por um conjunto detalhado de casos de teste. Em vez disso, o 
testador usa de sua experiência e habilidade para navegar pelo sistema e 
verificar o seu comportamento. Testes exploratórios podem ser usados para 
ajudar na escrita de casos de teste (assumindo que iremos ter testes manuais) 
e também para subsidiar a escrita de testes automatizados (principalmente, 
testes de integração e testes end-to-end).

### 17. O que é um Teste de Mutação? {.unnumbered}

O conceito de teste de mutação é antigo, tendo sido proposto pela
primeira vez em 1978 
no seguinte [artigo](https://doi.org/10.1109/C-M.1978.218136). 
Para entender melhor o conceito, o principal 
ponto que deve ser lembrado é que um teste de mutação não tem como 
objetivo detectar bugs no código de produção, tal como ocorre, 
por exemplo, com testes de unidade, integração, end-to-end, 
snapshot, etc.

Em vez disso, testes de mutação são usados para avaliar a 
efetividade dos testes automatizados que já existem no sistema. 
Ou seja, o pressuposto é que você já tem diversos testes e quer 
saber se eles são efetivos, isto é, realmente capazes de detectar 
bugs e regressões.

Para isso, uma ferramenta de testes de mutação realiza pequenas 
modificações aleatórias no código de produção, gerando uma versão
do código que é chamada de **mutação**. Por exemplo, 
mutações podem ser geradas por meio das seguintes operações.

* Remoção ou duplicação de algum comando.
* Troca de operadores, por exemplo, trocar um operador de 
adição (+) por um operador de subtração (-). 
* Troca de constantes, por exemplo, `True` por `False`.

Como as mutações são realizadas de forma aleatória, elas possuem 
bugs. E, então, os testes existentes devem falhar ao serem 
executados sobre elas. Se isso não acontecer, podemos 
concluir que esses testes não são "bons" o suficiente.

Teste de mutação é uma técnica de teste caixa-branca,
pois o seu funcionamento requer conhecimento da estrutura 
interna do código das funções de um sistema. Conforme
afirmado, esse conhecimento é necessário para gerar
as mutações. 

Cobertura de mutações é uma métrica muito usada com esse tipo 
de teste. Ela é assim definida:

> cobertura de mutações = número de mutantes mortos / total de mutantes gerados

Diz-se que um mutante foi morto quando ele foi detectado
por algum teste existente. Assim, idealmente, gostaríamos
que a cobertura de mutações fosse sempre de 100%.

Um dos principais problemas de um teste de mutação é o seu 
elevado custo computacional. Em um sistema real, de médio porte, 
por exemplo, podem ser geradas milhares ou dezenas de milhares
de mutações, que vão demandar horas ou mesmo dias para serem 
testadas.

* * * 

```{=html}
<p>Voltar para a <a href="https://engsoftmoderna.info">página principal</a>.</p>
```
