# Construindo Aplicações com uma Arquitetura Limpa {.unnumbered}

## Introdução {.unnumbered}

**Arquitetura Limpa** (*Clean Architecture*) é um padrão arquitetural proposto
por Robert Martin -- mais conhecido como Uncle Bob -- com o objetivo de 
promover a implementação de sistemas que favorecem reusabilidade de código,
coesão, independência de tecnologia e testabilidade. Se quisermos adotar a 
classificação do [Capítulo 7](https://engsoftmoderna.info/cap7.html), 
a Arquitetura Limpa pode ser considerada como uma arquitetura em camadas.

Normalmente, Arquitetura Limpa é ilustrada por meio da seguinte figura
(a qual foi copiada de um [post](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) do "The Clean Code Blog").

![Camadas de uma Arquitetura Limpa](./figs/arquitetura-limpa.png){width=75%}

A seguir, vamos comentar sobre cada um das camadas da arquitetura.

## Entidades e Casos de Estudo {.unnumbered}

No centro da arquitetura, temos as classes responsáveis pelas regras de negócio, 
que podem ser de dois tipos:

**Entidades** são classes comuns a vários sistemas da empresa. Suponha, por
exemplo, uma universidade com sistemas acadêmico, financeiro, extensão, etc.
Todos esses sistemas têm que lidar com classes como `Aluno`, `Professor`, `Curso`,
`Departamento`, etc. Essas classes são então chamadas de Entidades. Além de dados, entidades
podem implementar regras de negócio genéricas. Por exemplo, uma regra da universidade
define que um `Professor` deve pertencer a exatamente um `Departamento`.

Já as classes da camada **Casos de Uso** implementam regras de negócio um
pouco menos genéricas e, normalmente, relativas a um único sistema. 
Por exemplo, o sistema acadêmico do nosso exemplo 
pode ter uma classe  `DiarioDeClasse` que armazena a lista de objetos 
do tipo `Aluno` matriculados em 
uma `Disciplina` de um dado `Curso` que está sendo ofertada em um determinado 
semestre. Uma regra de negócio define que um `Aluno` 
somente pode ser incluído em um `DiarioDeClasse` se tiver cursado os 
pré-requisitos da sua `Disciplina`. 

Para evitar qualquer tipo de confusão, gostaríamos de comentar que 
o nome casos de uso em uma Arquitetura Limpa não tem relação,
pelo menos direta, com casos de uso para especificação de requisitos 
e, menos ainda, com diagramas de casos de uso da UML, tal como 
estudamos no [Capítulo 3](https://engsoftmoderna.info/cap3.html).
 
## Adaptadores {.unnumbered}

Na terceira camada, de dentro para fora, temos classes e interfaces
chamadas de **Adaptadores**. A função delas é converter dados de um 
formato para outro.

Suponha, por exemplo, que o sistema use uma API REST para comunicação
com seus clientes. As classes adaptadoras serão então 
responsáveis por implementar os *endpoints* REST da API. Isto é, elas
devem receber as requisições e encaminhá-las para os casos de uso 
correspondentes. E, também, fazer o caminho inverso: receber os resultados 
retornados pelos casos de uso e convertê-los em documentos JSON 
que serão enviados para os clientes.

Se o sistema for implementado usando-se um framework MVC Web, os 
controladores pertencerão a essa camada.

## Frameworks Externos {.unnumbered}

Na camada mais externa, temos classes pertencentes a bibliotecas e frameworks 
externos (de terceiros), as quais podem ser responsáveis por persistência, 
construção de interfaces com usuários, envio de mails, integração com 
outros sistemas, etc.

Por exemplo, a universidade do nosso exemplo pode possuir 
um sistema para gerenciamento de cursos de extensão, o qual aceita 
que o pagamento dos cursos seja realizado por meio de cartões de crédito. 
Para isso, o sistema usa um serviço de pagamentos de terceiros, que oferece 
algumas classes para processamento de pagamentos. Logo, essa classes
ficam na camada mais externa de uma Arquitetura Limpa.

No livro [Arquitetura Limpa](https://dl.acm.org/doi/book/10.5555/3175742), 
veja como essa camada é descrita:

> Todos os detalhes ficam na camada de frameworks e drivers.
> A Web é um detalhe. O banco de dados é um detalhe. Mantemos
> essas tecnologias na camada mais externa porque é onde elas
> podem fazer menos mal.


## Regra da Dependência {.unnumbered}

Em uma Arquitetura Limpa, as classes de um nível X não devem conhecer nenhuma 
classe de um nível Y mais externo. No seu livro, Uncle Bob afirma categoricamente:

> O nome de um elemento declarado em uma camada externa não deve ser 
> mencionado pelo código de uma camada interna. Isso inclui funções, classes, 
> variáveis e qualquer outro elemento de código.

Assim, em uma Arquitetura Limpa, as camadas centrais são mais estáveis -- menos
sujeita a mudanças -- do que as camadas mais externas. Por exemplo, as
entidades de um sistema raramente precisam ser modificadas. 
Sobre os casos de uso, é verdade que eles, às vezes, precisam ser mantidos.
Porém, queremos evitar que essas mudanças sejam motivadas por mudanças 
nas tecnologias adotadas na aplicação, como bancos de dados, frameworks 
e bibliotecas. 

Por isso, a Regra de Dependência garante que entidades e casos de uso
sejam classes "limpas" de qualquer tecnologia ou adaptadores implementados
nas camadas mais externas.

## Invertendo o Fluxo de Controle {.unnumbered}

Em uma Arquitetura Limpa, fluxos de controle de "fora para dentro" são 
implementados de forma "natural", pois eles seguem o mesmo sentido 
da Regra de Dependência.

No entanto, em alguns casos, um caso de uso pode ter que chamar um método 
de uma classe de uma camada mais externa. Para ficar mais claro, suponha 
que um caso de uso precise enviar um mail. Antes de mais nada vamos supor 
que existe uma classe adaptadora `MailServiceImpl` com um método `send:

```
package Adaptadores;

public class MailServiceImpl {
  public void send(String msg);
}
```

No entanto, veja que esse exemplo implica em um fluxo de fora para dentro: 
o caso de uso (mais interno) tem que chamar um método de uma classe 
adaptadora (mais externa), o que contraria a regra da dependência!

A solução implica em ter uma interface na camada de caso de uso chamada
`MailServiceInterface`, com um método `send(String msg)`. 

```
package CasosDeUso;

public interface MailServiceInterface {
  void send(String msg);
}

// outras classes da camada Casos de Uso
```


Como `MailServiceInterface` pertence à camada Caso de Uso, as outras classes dessa camada 
podem chamar `send` sem violar a Regra de Dependência.

Prosseguindo, a classe adaptadora `MailServiceImpl` deve implementar
a interface `MailServiceInterface`. 

```
package Adaptadores;

import CasosDeUso.MailServiceInterface;

public class MailServiceImpl implements MailServiceInterface {
  public void send(String msg);
}
```

Essa implementação não viola a Regra de Dependência, pois uma classe mais 
externa (`MailServiceImpl`) está dependendo de um elemento de código de 
uma camada mais interna. No caso, esse elemento é uma interface 
(`MailServiceInterface`).

# Conclusão {.unnumbered}

As recomendações principais de uma Arquitetura Limpa são as seguintes:

* Ao implementar uma aplicação, pense nas suas Entidades, que são classes
que armazenam principalmente dados e que poderão ser reusadas em
outros sistemas que você construir no futuro.

* Depois, pense nos Casos de Uso, que vão implementar regras de negócio envolvendo
as Entidades de seu sistema. Mas torne as classes que representam Entidades
e Casos de Uso "limpas" de qualquer tecnologia. Lembre-se a "a Web é um detalhe;
o banco de dados é um detalhe".

* Pense também nas classes Adaptadoras, que vão funcionar como portas de entrada
e saída, para comunicação entre as classes internas e o mundo externo.

Seguindo essas recomendações, você vai produzir uma arquitetura que separa
dois tipos de interesses (ou requisitos): interesses de negócio
e interesses de tecnologia. E assim, será então mais fácil adaptar seu sistema
às novas tecnologias que, com certeza, vão surgir.

### Para Saber Mais {.unnumbered}

Em breve!

## Exercícios {.unnumbered}

Em breve!


* * * 

Voltar para a lista de [artigos](./artigos.html).
