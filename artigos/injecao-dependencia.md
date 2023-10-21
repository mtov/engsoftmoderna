
# O que é Injeção de Dependência?

## Introdução

Injeção de Dependência não faz parte dos padrões de projeto do livro 
GoF. Porém, a solução é frequentemente listada como um padrão que 
poderia ser incluído em uma possível segunda edição do livro.

A ideia de Injeção de Dependência é bastante simples e quase que uma 
aplicação literal do seu nome. Vamos então explicá-la em quatro
passos:

1. Suponha que uma classe `A` depende de uma classe `PagtoPIX`:

```
class A {
   PagtoPIX pagto; // A depende de PagtoPIX
   ...
}
```

2. No entanto, para seguir a ideia do padrão, a classe `A` não deve 
instanciar diretamente objetos desse tipo, como em:

```
class A {
   PagtoPIX pagto = new PagtoPIX();
   ... 
}
```

3. Em vez disso, `A` deve receber essa dependência por meio
de um construtor:

```
class A {
   PagtoPIX pagto;

   A(PagtoPIX pagto) { // injeção de dependência via construtor
      this.pagto = pagto;
   }
   ...
}
```

ou então receber a dependência por meio de um método `set`:

```
class A {
   PagtoPIX pagto;

   void setPagto(PagtoPIX pagto) { // injeção de dependência via setter
      this.pagto = pagto;
   }
   ...
}
```

Logo, agora fica fácil entender o nome do padrão: as dependências
de uma classe são **injetadas** nela, seja por meio de chamadas 
do seu construtor ou por meio de chamadas de um setter. 

4. Na verdade, o mais recomendado é que o código de `A` use uma 
interface para a classe concreta `PagtoPIX`. Ou seja, em vez de 
usar `PagtoPIX` (uma classe), deve-se usar `ServicoPagto` 
(uma interface):

```
class A {
   ServicoPagto pagto;   // dependência para uma interface 

   A(ServicoPagto pagto) {
      this.pagto = pagto;
   }
   ...
}
```

ou 

```
class A {
   ServicoPagto pagto; 

   void setPagto(ServicoPagto pagto) { 
      this.pagto = pagto;
   }
   ...
}
```

Ou seja: quando usamos Injeção de Dependência devemos fazer uso 
do princípio de projeto **Prefira Interfaces a Classes Concretas**, 
que estudamos no 
[Capítulo 5](https://engsoftmoderna.info/cap5.html#princ%C3%ADpio-de-invers%C3%A3o-de-depend%C3%AAncias).

Para concluir, as vantagens de Injeção de Dependência são:

* Injeção de Dependência torna mais fácil mudar a dependência 
concreta (`PagtoPIX`) usada por uma classe. No nosso exemplo, 
`A` é uma classe que precisa realizar pagamentos. Para isso, 
ela faz uso de uma classe `PagtoPIX`. Amanhã, no entanto, 
podemos  decidir que os pagamentos serão processados por uma classe 
`PagtoCartaoCredito`. Para isso, basta que `PagtoPIX` e 
`PagtoCartaoCredito` implementem a mesma interface `ServicoPagto`.
       
* Injeção de Dependência torna mais fácil o teste da classe `A`, 
pois podemos *mockar* mais facilmente a dependência para `ServicoPagto`. 
Por exemplo, em vez de um serviço de pagamento real 
(`PagtoPIX` ou `PagtoCartaoCredito`), podemos usar um serviço de pagamento 
fictício, que apenas emule alguns pagamentos. Para 
isso, basta que esse serviço fictício implemente a interface `ServicoPagto`. 
Se você ainda não sabe o que é um mock, recomendamos a leitura
da seção do [Capítulo 8](https://engsoftmoderna.info/cap8.html#mocks) 
sobre o assunto.
 

## Frameworks para Injeção de Dependência

Uma desvantagem de Injeção de Dependência é que a responsabilidade
por criar as dependências -- isto é, instanciar os objetos que serão 
passados para a classe -- é transferida para os seus clientes, 
como no seguinte exemplo:

```
class Main {
   void main() {
      ServicoPagto pagto = new PagtoPIX();  // instancia dependência
      A a = new A(pagto);   // injeta dependência na classe A
      ...
  } 
  ...
}
```

No entanto, existem frameworks que poupam esse trabalho extra por
parte dos clientes. Basicamente, eles assumem a responsabilidade 
de criar as dependências e injetá-las nas classe de destino.

De um modo genérico, costuma funcionar assim:

```
class A {
   ServicoPagto pagto;

   @Inject // anotação disponibilizada pelo framework
   A(ServicoPagto pagto) { 
      this.pagto = pagto;
   }
   ...
}
```

A anotação `@Inject` indica que a classe `A` quer fazer uso de
Injeção de Dependência. E que, portanto, as dependências do 
seu construtor deverão ser criadas e injetadas pelo framework 
de injeção de dependências.

No entanto, devemos declarar a classe dos objetos 
que devem ser criados toda vez que o framework precisar chamar um 
construtor anotado com `@Inject`. Isso pode acontecer em um arquivo 
XML, um outro tipo de arquivo ou mesmo em um método específico. 
Em qualquer caso, a ideia é declarar uma tabela com duas colunas: 
interface e classe concreta.

No nosso exemplo, essa tabela deve incluir a linha 
`(ServicoPagto, PagtoPIX)`. Essa linha 
define que objetos do tipo `PagtoPIX` deverão ser instanciados e 
injetados em todas as classes que precisarem de dependências do 
tipo `ServicoPagto`. 

Por fim, no cliente, para instanciar um objeto de uma classe que 
usa `@Inject`, não usamos mais o operador `new`, mas sim um 
método do próprio framework, como em:

```
class Main {
   void main() {
      A a = DIF.getInstance(A.class);
      ...
  } 
}
```

Ou seja, `getInstance` é um método que instancia classes 
que usam Injeção de Dependência. O nosso framework de injeção 
de dependência (DIF) entende então que:

* A classe `A` faz uso de injeção de dependência, pois seu 
construtor foi anotado com `@Inject`.

* Antes de instanciar um objeto da classe `A`, o framework 
deve criar os objetos (dependências) usados pelo construtor 
dessa classe. No caso, esses objetos são de classes que 
implementam a interface `ServicoPagto`.

* Mas qual classe que implementa `ServicoPagto` deve ser 
instanciada? Para isso, o framework consulta o arquivo de 
configuração e descobre que `ServicoPagto` está mapeada 
para `PagtoPIX`, conforme explicamos anteriormente.

* Então o framework instancia um objeto do tipo `PagtoPIX` 
e um objeto do tipo `A` . Ao instanciar esse último objeto, 
ele também passa o objeto do tipo `PagtoPIX` como parâmetro 
de seu construtor.

A explicação que acabamos de apresentar foi baseada no 
[Guice](https://github.com/google/guice), 
um framework de injeção de dependências para Java, desenvolvido 
pelo Google. No entanto, existem outros frameworks semelhantes, 
tanto para Java como para outras linguagens.

## Exercícios {.unnumbered}

1\. Como explicamos no [Capítulo 6](https://engsoftmoderna.info/cap6.html#introdu%C3%A7%C3%A3o),
padrões de projeto são classificados em padrões criacionais,
estruturais e comportamentais. Em qual dessas categorias você classificaria
Injeção de Dependência? Justifique brevemente.

2\. Injeção de Dependência, muitas vezes, é comparada com padrão de projeto
Fábrica. Qual a desvantagem de configurar dependências por meio de fábricas?
Para responder, compare os seguintes códigos:

 ```
 class A {
   IB b;
   A(IB b) { 
     this.b = b; // injeção de dependência 
   }
 }
 ```

 ```
 class A {
   IB b;
   A() { 
     this.b = IB_Factory.getInstance(); // fábrica
   }
 }
 ```

3\. Qual a relação entre Injeção de Dependência (padrão de projeto) e Inversão
de Dependência (princípio de projeto)? Para saber mais sobre Inversão de 
Dependência, consulte o [Capítulo 5](https://engsoftmoderna.info/cap5.html#princ%C3%ADpio-de-invers%C3%A3o-de-depend%C3%AAncias).

4\. Por que costuma-se dizer que Injeção de Dependência pode, em certos casos,
violar a propriedade de Ocultamento de Informação? Para ilustrar a sua resposta
use como exemplo a classe `Estacionamento` da Seção 5.3.1 do 
[Capítulo 5](https://engsoftmoderna.info/cap5.html#exemplo-1) do livro.

* * * 

```{=html}
<p>Voltar para a lista de <a href="./artigos.html">artigos</a>.</p>
```
