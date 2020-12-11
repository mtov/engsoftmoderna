
# O que é Injeção de Dependência?   {.unnumbered}

Injeção de Dependência não faz parte dos padrões de projeto do livro 
GoF. Porém, a solução é frequentemente listada como um padrão que 
poderia ser incluído em uma possível segunda edição do livro.

A ideia de Injeção de Dependência é bastante simples e quase que uma 
aplicação literal do seu nome. Vamos então explicá-la em quatro
passos:

1. Suponha que uma classe `A` dependa de uma outra classe `B`:

```
class A {
   B b; // A depende de B
}
```

2. No entanto, para seguir a ideia do padrão, a classe `A` não deve 
instanciar diretamente -- isto é, no seu código --- objetos do 
tipo `B`, como em:

```
class A {
   B b = new B();  // instanciação incompatível com injeção de dependência 
}
```

3. Em vez disso, a classe `A` deve receber essa dependência por meio
de um construtor:

```
class A {
   B b;
   A(B b) { // injeção de dependência via construtor
      this.b = b;
   }
}
```

ou então receber a dependência por meio de um método `set`:

```
class A {
   B b;
   void setB(B b) { // injeção de dependência via setter
      this.b = b;
   }
}
```

Logo, agora fica fácil entender o nome do padrão: as dependências
de uma classe são **injetadas** nela, seja por meio de chamadas 
do seu construtor ou por meio de chamadas de um setter. 

4. Na verdade, o mais recomendado é que o código de `A` use uma interface (isto é, 
uma abstração) para a classe concreta `B`. Ou seja, em vez de usar `B` (uma 
classe concreta), deve-se usar `IB` (uma interface):

```
class A {
   IB b;   // dependência para uma interface IB
   A(IB b) {
      this.b = b;
   }
}
```

ou 

```
class A {
   IB b;  // dependência para uma interface IB
   void setterB(IB b) {
      this.b = b;
   }
}
```

Ou seja: quando usamos Injeção de Dependência devemos fazer uso do princípio 
de projeto **Prefira Interfaces a Classes Concretas**, que estudamos no 
[Capítulo 5](https://engsoftmoderna.info/cap5.html).

Para concluir, as vantagens de Injeção de Dependência são:

* Injeção de Dependência torna mais fácil mudar a dependência concreta (`B`) 
usada por uma classe `A`. Por exemplo, `A` pode ser uma classe que precisa enviar
mails. Para isso, ela faz uso de uma classe `B1`. Amanhã, no entanto, podemos 
decidir que os mails serão enviados por uma classe `B2`. Para isso, basta que `B1` e `B2` implementem
a interface `IB`.
       
* Injeção de Dependência torna mais fácil o teste da classe `A`, pois podemos *mockar*
mais facilmente a dependência para `B`. Por exemplo, em vez de um serviço de mail real 
(`B1` ou `B2`), podemos usar um serviço de mail fictício, que apenas emule o envio 
de uma mensagem simples. Para isso, basta que esse serviço fictício implemente a 
interface `IB`. Se você ainda não sabe o que é um mock, recomendamos a leitura
do [Capítulo 8](https://engsoftmoderna.info/cap8.html).
 

## Frameworks para Injeção de Dependência {.unnumbered}

Uma desvantagem de Injeção de Dependência é que a responsabilidade por criar as
dependências -- isto é, instanciar os objetos que serão passados para a classe
-- é transferida para os seus clientes, como no seguinte exemplo:

```
class Cliente {
  void foo() {
     IB b = new B1();  // instancia dependência
     A a = new A(b);   // injeta dependência na classe A
     ...
  } 
}
```

No entanto, existem frameworks que evitam que os clientes tenham esse trabalho extra.
Basicamente, eles assumem a responsabilidade de criar as dependências
e injetá-las nas classe de destino.

De um modo genérico, costuma funcionar assim:

```
class A {
   IB b;

   @Inject // anotação disponibilizada pelo framework
   A(IB b) { 
      this.b = b;
   }
}
```

A anotação `@Inject` indica que a classe `A` quer fazer uso de
Injeção de Dependência. E que, portanto, as dependências do seu construtor
deverão ser criadas e injetadas pelo framework de injeção
de dependências.

No entanto, algum desenvolvedor deverá declarar a classe dos objetos que devem
ser criados toda vez que o framework precisar chamar um construtor anotado com
`@Inject`. Isso pode acontecer em um arquivo XML, um outro tipo de arquivo ou mesmo em
um método específico. Em qualquer caso, a ideia é declarar uma tabela
com duas colunas: interface e classe concreta.

No nosso exemplo, essa tabela deve incluir a linha `(IB, B1)`. Essa linha 
define que objetos do tipo `B1` deverão ser instanciados e injetados 
em todas as classes que precisarem de dependências do tipo `IB`. 

Por fim, o cliente, quando precisar instanciar um objeto de uma classe que 
usa `@Inject`, não precisará mais chamar o operador `new`, mas sim um método 
do próprio framework, como em:


```
class Cliente {
  void foo() {
     A a = DIF.getInstance(A.class);
     ...
  } 
}
```

Ou seja, `getInstance` é um método que instancia classes que usam Injeção de
Dependência. O nosso framework de injeção de dependência (DIF)
entende então que:

* A classe `A` faz uso de injeção de dependência, pois seu construtor foi
anotado com `@Inject`.

* Antes de instanciar um objeto da classe `A`, o framework deve criar os
objetos (dependências) usados pelo construtor dessa classe. No caso,
esses objetos são de classes que implementam a interface `IB`.

* Mas qual classe que implementa `IB` deve ser instanciada? Para isso, 
o framework consulta o arquivo de configuração e descobre que `IB` 
está mapeada para `B1`, conforme explicamos anteriormente.

* Então o framework instancia um objeto do tipo `B1` e um objeto do 
tipo `A` . Ao instanciar esse último objeto ele também passa o objeto 
do tipo `B1` como parâmetro de seu construtor.

A explicação que acabamos de apresentar foi baseada no 
[Guice](https://github.com/google/guice), 
um framework de injeção de dependências para Java, desenvolvido pelo Google. 
No entanto, existem outros frameworks semelhantes, tanto para Java como 
para outras linguagens.

## Exercícios {.unnumbered}

1. Como explicamos no [Capítulo 6](https://engsoftmoderna.info/cap6.html),
padrões de projeto são classificados em padrões criacionais,
estruturais e comportamentais. Em qual dessas categorias você classificaria
Injeção de Dependência? Justifique brevemente.

1. Qual a relação entre Injeção de Dependência (padrão de projeto) e Inversão
de Dependência (princípio de projeto). Para saber mais sobre Inversão de 
Dependência, consulte o [Capítulo 5](https://engsoftmoderna.info/cap5.html).

2. Por que costuma-se dizer que Injeção de Dependência pode, em certos casos,
violar a propriedade de Ocultamento de Informação? Para ilustrar a sua resposta
use como exemplo a classe `Estacionamento` da Seção 5.3.1 do 
do [Capítulo 5](https://engsoftmoderna.info/cap5.html) do livro.

* * * 

Voltar para a lista de [artigos](./artigos.html).
