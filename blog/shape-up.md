# ShapeUp: Uma possível alternativa a Scrum? {.unnumbered}

## Introdução

ShapeUp é um novo método para desenvolvimento de software, que está
sendo proposto pela [Basecamp](https://basecamp.com/),  a empresa por
trás do software de gerenciamento de projetos de mesmo nome. O método
é descrito em um [livro](https://basecamp.com/shapeup) aberto, de
autoria de Ryan Singer, que é um dos principais gerentes de produto
da empresa. Segue uma imagem da capa do livro:

![Capa do livro](./figs/shapeup-cover.png){width=60%}

## Principais Conceitos

Para apresentar Shape Up, vamos usar algumas analogias com outros
métodos ágeis, principalmente com Scrum.

Um ciclo de desenvolvimento em Shape Up é composto por três etapas:

* Primeiro, temos uma fase de projeto *up front*, chamada de
**shape**. Claro, esse projeto é mais simples do que em Waterfall
(isto é, não é um *big design up front*). Porém, a ideia é que todo
projeto de desenvolvimento de software precisa de uma coordenação de
mais alto nível, que defina as features que serão implementadas, crie
limites para as mesmas e avalie os riscos e benefícios. Tudo isso é
feito nessa fase de *shape*. Como ela é central no método -- e dá nome
para ele -- iremos comentar mais sobre ela daqui a pouco, em uma seção
separada.

* Depois da fase de *shape* começa um sprint propriamente dito, que
eles chamam de **ciclos**. Porém, esses ciclos são mais longos do que
os sprints de Scrum, tendo uma duração de seis semanas. Segundo o
autor, seis semanas é um tempo suficiente para implementar algo
relevante, mas sem impor um forte deadline aos trabalhos do time.

* Finalizado um ciclo, segue um período de calmaria, de duas semanas,
que os autores chamam de **cool-down period**. A ideia é que os
desenvolvedores devem usar esse período para respirar um pouco. E
aproveitar para realizar outras tarefas, como corrigir bugs, aplicar
refactorings, estudar um nova tecnologia, implementar uma prova de
conceito, etc. 

Por fim, em ShapeUp, os times são menores do que os times Scrum, 
sendo formados  por um designer de UI e, no máximo, dois
desenvolvedores.


## Shape  {.unnumbered}

Shape é a fase principal do método e que dá nome a ele. A ideia é
proporcionar uma solução de meio termo, entre um planejamento
detalhado (como em Waterfall) e um planejamento mais vago e abstrato
(como pode acontecer, por exemplo, quando adota-se Scrum). A próxima
figura ilustra o nível de detalhe que deve ser objeto da fase de
shape.

![Fase de Shape](./figs/shapeup-fig1.png)

O livro não detalha os responsáveis pela fase de shape, mas sugere que
devem ser desenvolvedores e gerentes de nível sênior. Além disso, é
importante mencionar que a fase de shape pode acontecer em paralelo
com os ciclos de seis semanas e o período de cool-down.

O resultado da fase de shape é um **pitch**, isto é,  um documento
simplificado que propõe uma nova funcionalidade para um sistema.
Esse documento deve incluir as seguintes informações:

* Descrição do problema que espera-se resolver com a nova funcionalidade.

* Quanto tempo pretende-se gastar com a implementação dessa funcionalidade. O
autor chama esse tempo de **apetite**. Veja então que uma funcionalidade pode
demandar  menos de seis meses (um ciclo). Pode-se, por exemplo, ter
funcionalidades de dois meses.

* Uma descrição em alto nível da solução proposta. Como o autor é 
originalmente um designer, os exemplos de soluções mostrados no livro
são descrições (ou sketches) de mais alto nível de telas e
interfaces.

* Limitações e esclarecimentos. Na verdade, o autor usa o termo **no
go's** para limitações que serão aceitas na solução a ser
implementada. E o termo **rabbit holes** para designar os 
impasses que podem ocorrer no  momento da implementação (e então já
propor soluções para eles na fase de shape). O objetivo final é evitar
que o time se preocupe e perca tempo com essas questões.

Por fim, gera-se um conjunto de pitches, que vão para o que o autor
chama de **bet table**. Basicamente, os pitches são distribuídos para um
grupo de tomadores de decisão, que escolhem e definem aqueles que de
fato serão implementados no próximo ciclo. Essa decisão é tomada de
forma assíncrona, via troca de mensagens e discussões em uma ferramenta de
gerência de projetos (no caso, o próprio BaseCamp). E, por fim, 
em uma curta reunião final e síncrona, que deve durar poucas horas. No caso da
BaseCamp, opinam sobre os pitches as seguintes pessoas: o CEO da
empresa, o CTO da empresa, um desenvolvedor sênior e um estrategista de
produtos.

Terminada essa reunião, os pitches são distribuídos para os times. E
começa-se o ciclo de seis semanas.

Também não existe um backlog de pitches. Veja o que os autores dizem sobre esse fato:

> If we decide to bet on a pitch, it goes into the next cycle to
build. If we don’t, we let it go. There’s nothing we need to track or
hold on to. What if the pitch was great, but the time just wasn’t
right? Anyone who wants to advocate for it again simply tracks it
independently—their own way—and then lobbies for it six weeks later. 

Ou seja, na verdade, parece o que não existe é um backlog local. Mas
cada tomador de decisão pode ter seu backlog local de pitches 
que ele pretende propor e defender na próxima *bet table*.

## Conclusão {.unnumbered}

ShapeUp tem diferenças importantes para métodos como Scrum:

* Existe uma fase dedicada para planejamento e projeto (*shape*).

* Não existem reuniões diárias, revisões e retrospectivas.

* Não existem artefatos como backlogs e quadros Scrum ou Kanban.

* Os times possuem um tamanho mínimo: um designer e um ou dois
desenvolvedores.

* Não existem papeis semelhantes àqueles de Scrum Master e Product
Owner. No entanto, estrategistas de produtos podem ser consultados
para definir os pitches e também podem fazer parte da *bet table*.

* Os times não têm autonomia para definir os pitches
do próximo ciclo. Ou seja, eles recebem os pitches já prontos
e modelados (*shaped*).

* Os times continuam autônomos para decidir 
como os pitches serão implementados, no intervalo de seis semanas.

