# Domain-Driven Design (DDD): Um Resumo {.unnumbered}

## Introdução {.unnumbered}

Domain-Driven Design (DDD) é um conjunto de princípios para projeto 
de software, organizados e sistematizados em 2003, por Eric Evans, 
em um livro com o mesmo nome.

Os princípios defendidos por DDD têm, no seu conjunto, um objetivo 
central: permitir o desenvolvimento de sistemas cujo design é centrado 
em conceitos próximos e alinhados com um domínio de negócio.

O **domínio** de um sistema consiste da área e problema de negócio
que ele pretende  resolver. Neste artigo, para explicar DDD, vamos 
usar como exemplo um sistema para gerenciar uma biblioteca. Logo, 
esse problema -- gerenciamento de bibliotecas -- constitui o 
domínio do nosso sistema de exemplo.

DDD defende que os **desenvolvedores** devem ter um bom conhecimento
do domínio do sistema que eles desenvolvem. Esse conhecimento deve
ser obtido por meio de conversas e discussões frequentes com 
**especialistas no domínio** (ou negócio). Portanto, o design do sistema 
deve ser norteado para atender ao seu domínio. E não, por exemplo, 
apenas para se moldar a uma determinada tecnologia de programação. 
Ou seja, o design é dirigido pelo domínio, e não por frameworks, 
arquiteturas, linguagens de programação, etc.

DDD preconiza que a separação entre domínio e tecnologia deve ser 
promovida e expressa na arquitetura do sistema. Para tanto, padrões 
como Arquitetura em Camadas (estudado no 
[Capítulo 7](../cap7.html) podem ser usados.

É importante mencionar também que DDD se sobressai quando é usado
no design de sistemas para domínios mais complexos, cujas regras
de negócio são mais difíceis de serem imediatamente entendidas e
dominadas pelos desenvolvedores.


## Linguagem Ubíqua {.unnumbered}

**Linguagem Ubíqua** (ou **Linguagem Onipresente**) é um conceito 
central de DDD. Ela consiste de um conjunto de termos que 
devem ser plenamente entendidos tanto por especialistas no domínio
(usuários do sistema) como por desenvolvedores (implementadores 
do sistema).

Para um projeto de software dar certo, DDD defende que esses 
dois papeis -- especialistas no domínio e desenvolvedores -- devem 
falar a mesma língua, que vai constituir a chamada Linguagem 
Ubíqua do sistema. Essa ideia é ilustrada na seguinte figura:

A figura deixa claro que podem existir termos que só os 
especialistas de domínio conhecem. Já outros termos, de cunho 
tecnológico, são do conhecimento apenas dos desenvolvedores. 
Porém, existe um conjunto de termos que devem ser do conhecimento 
de ambos os papeis, os quais, no jargão de DDD, formam a Linguagem 
Ubíqua.

Os termos da Linguagem Ubíqua são usados com dois propósitos:

* Para possibilitar uma comunicação fluida entre desenvolvedores
e especialistas no domínio.

* Para nomear entidades do código do sistema, como classes, 
métodos, atributos, pacotes, módulos, tabelas de bancos de dados, 
rotas de APIs, etc.

Além de clarificar o significado dos termos da linguagem ubíqua, 
é importante que se definam os **relacionamentos** e **associações** 
que existem entre eles.

**Exemplo**: no nosso Sistema de Bibliotecas, a Linguagem Ubíqua 
inclui termos como os seguintes:

> Livro, Exemplar, ISBN, Bibliotecária, Usuário, Acervo,
> Reserva, Empréstimo, Multa, Catálogo

Por outro lado, alguns termos são de domínio apenas dos desenvolvedores, 
tais como proxy, observadores, cache, camadas, rotas, dentre outros. 
Existem ainda termos que são do conhecimento apenas de bibliotecárias, 
como certos formatos para definição de ISBNs, os quais não são 
usados nas bibliotecas brasileiras. 

Devemos definir também os relacionamentos e associações entre esses 
termos, como exemplificado a seguir:

* Um `Livro` pode ter um ou mais `Exemplares`.
* Uma `Reserva` pode ser feita para no máximo três `Livros`.
* Existem três tipos de `Usuário`: `Aluno`, `Professor` e `Externo`.
* O `Acervo` da biblioteca é formado por um conjunto de `Livros`. 

Para documentar de forma visual esses relacionamentos pode ser usado
um **Diagrama de Classes** de UML, conforme estudamos 
no [Capítulo 4](../cap4.html).

## Objetos de Domínio {.unnumbered}

DDD foi proposto pensando em sistemas implementados em linguagens
orientadas a objetos. Então, quando se define o design desses 
sistemas, alguns tipos importantes de objetos se destacam. 
Dentre eles, DDD lista os seguintes: Entidades, Objetos de Valor, 
Serviços, Agregações, Fábricas e Repositórios. 


Esses tipos de objetos de domínio devem ser entendidos como as 
"ferramentas conceituais" que um projetista deve lançar mão para 
projetar com sucesso um determinado sistema. Iremos comentar 
sobre cada um deles a seguir.

### Entidades e Objetos de Valor {.unnumbered}

Uma **entidade** é um objeto que possui uma identidade única, que
o distingue dos demais objetos da mesma classe. Por exemplo,
cada `Usuário` da nossa biblioteca é uma entidade, cujo 
identificador é o seu número de matrícula na universidade.

Por outro lado, **objetos de valor** (*value objects*) não possuem
um identificador único. Assim, eles são caracterizados apenas por seu 
estado, isto é, pelos valores de seus atributos. Por exemplo,
o `Endereço` de um Usuário da biblioteca é um objeto de valor.
Veja que se dois dois `Endereços` tem exatamente os mesmos valores 
para `rua`, `número`, `cidade`, `CEP`, etc, eles são considerados 
idênticos.

Outros exemplos de objetos de valor incluem: `Moeda`, `Data`,
`Fone`, `Email`, `Hora`, etc.

#### Por que distinguir entidades e objetos de valor?#### {.unnumbered}

Entidades são objetos mais importantes e devemos, por exemplo, 
projetar com cuidado como eles serão persistidos e depois
recuperados de um banco de dados. Devemos também tomar mais
cuidado com o ciclo de vida de entidades. Por exemplo, podem
existir regras que governam a criação e remoção de entidades.
No caso de nosso sistema de bibliotecas, provavelmente, não
se pode remover um `Usuário` do sistema se ele tiver um
`Empréstimo` de livros ainda pendente.

Já objetos de valor são mais simples. E também eles devem ser 
imutáveis, ou seja, uma vez criados, não deve ser possível alterar 
seus valores internos. Por exemplo, para alterar o `Endereço` 
de um `Usuário` devemos abandonar o objeto antigo e criar um objeto 
com o `Endereço` novo. Os benefícios de objetos imutáveis 
foram discutidos no [Capítulo 9](../cap9.html)

Resumindo: entidades são definidas por sua identidade; objetos
de valor são definidos por seus atributos.

### Serviços {.unnumbered}

Existem certas operações importantes do domínio que não se
encaixam em entidades e objetos de valor. Assim, o ideal
é criar objetos específicos nos quais essas operações sejam
implementadas. No jargão de DDD, esses objetos são chamados
de **serviços**. Em alguns sistemas, é comum ver esses
objetos sendo chamados também de gerenciadores ou controladores.

A assinatura das operações de um objeto de serviço podem incluir
entidades e objetos de valor. No entanto, objetos de serviço
não devem possuir estado, isto é, eles devem ser **stateless**. 
Por isso, eles não costumam ter atributos, mas apenas métodos.

Serviços normalmente são implementados como **Singletons**, ou seja,
possuem uma única instância durante a execução do sistema.
Mais detalhes sobre esse padrão de projeto no 
[Capítulo 6](../cap6.html).

**Exemplo**: no nosso Sistema de Bibliotecas, podemos ter um
serviço que implementa as seguintes operações:

```
class ServicoDeEmprestimo {
  ...
  public void emprestarLivro(Usuario, Livro) {...}
  public void devolverLivro(Usuario, Livro)  {...}
  ...
```

Na primeira operação, realiza-se o empréstimo de um `Livro` 
para um `Usuário`. Na segunda operação, um `Usuário` devolve 
um `Livro` que ele tenha sob empréstimo. 

Ambas as operações não são específicas nem de `Usuário`, 
nem de `Livro`. Logo, a recomendação de criar um objeto de
serviço para acomodá-las.

### Agregados {.unnumbered}

**Agregados** (*agregates*)  são coleções de entidades e objetos 
de valor. Ou seja, algumas vezes não faz sentido raciocinar sobre
entidades e objetos de valor de forma individual ou atômica. 
Em vez disso, temos que pensar em grupos de objetos para ter uma
visão consistente com o domínio que estamos modelando.

Um agregado possui um objeto raiz, que deve ser uma entidade.
Externamente, o agregado é acessado a partir dessa raiz.
A raiz, por sua vez, referencia os objetos internos do agregado, ]
mas eles não devem ser visíveis para o resto do sistema.

Como formam um todo coerente, agregados são persistidos em 
conjunto, com um todo, em bancos de dados.

**Exemplo**: `Usuários` do sistema de bibliotecas podem
realizar `Empréstimos` de `Livros`. Portanto, um `Empréstimo`
possui um Usuário (que é uma entidade), uma data de realização
(que é um objeto de valor) e uma lista de `Itens Emprestados`.
Cada `Item Emprestado` contém informações sobre um certo `Livro`
que foi emprestado e sua data de devolução (estamos pressupondo
que alguns livros devem ser devolvidos mais rapidamente que
outros, por exemplo).

Logo, `Empréstimo` e `Itens de Empréstimo` formam um agregado.
Isto é, uma entidade única do ponto de vista conceitual. 
`Empréstimo` é a raiz do agregado e `Itens Emprestados`
são os seus objetos internos, que não podem ser manipulados sem 
passar antes pela raiz.

Observe que `Itens Emprestados` referenciam `Livros`, porém
esses últimos não fazem parte do agregado, pois eles têm vida
própria, isto é, eles existem independentemente de estarem
emprestados ou não.

### Fábricas {.unnumbered}
