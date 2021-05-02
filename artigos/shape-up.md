
# Shape Up: Uma Possível Alternativa a Scrum? {.unnumbered}

## Introdução {.unnumbered}

Shape Up é um novo método para desenvolvimento de software que está
sendo proposto pela [Basecamp](https://basecamp.com/),  a empresa por
trás do software de gerenciamento de projetos de mesmo nome. O método
é descrito em um [livro](https://basecamp.com/shapeup) aberto, de
autoria de Ryan Singer, que é um dos principais gerentes de produto
da empresa. Segue uma imagem da capa do livro:

![Capa do livro](./figs/shapeup-cover.jpg){width=45%}

## Principais Conceitos {.unnumbered}

Para apresentar Shape Up, vamos usar algumas analogias com outros
métodos ágeis, principalmente com Scrum. Se quiser saber
um pouco mais sobre métodos ágeis, você pode consultar o 
[Capítulo 2](https://engsoftmoderna.info/cap2.html) do livro.

Um ciclo de desenvolvimento em Shape Up é composto por três etapas:

* Primeiro, temos uma fase de projeto *up front*, chamada de
**shaping**. Claro, esse projeto é mais simples do que em Waterfall
(isto é, não é um *big design up front*). Porém, a ideia é que todo
projeto de desenvolvimento de software precisa de uma coordenação de
mais alto nível, que defina as funcionalidades que serão implementadas, crie
limites para elas e avalie os seus riscos e benefícios. Tudo isso é
feito nessa fase de *shaping*. Como ela é central no método -- e dá nome
para ele -- iremos comentar mais sobre ela daqui a pouco, em uma seção
separada.

* Depois da fase de *shaping* começa um sprint propriamente dito, que
eles chamam de **ciclos**. Porém, esses ciclos são mais longos do que
os sprints de Scrum, tendo uma duração de seis semanas. Segundo o
autor, seis semanas é um tempo suficiente para implementar algo
relevante, mas sem impor um forte deadline aos trabalhos do time.

* Finalizado um ciclo, segue um período de calmaria, de duas semanas,
que os autores chamam de período de **cool-down**. A ideia é que os
desenvolvedores devem usar esse período para respirar um pouco. E
aproveitar para realizar outras tarefas, como corrigir bugs, aplicar
refactorings, pagar uma dívida técnica, estudar um nova tecnologia, 
implementar uma prova de conceito, etc. 

Por fim, em Shape Up, os times são menores do que os times de Scrum, 
sendo formados  por um designer de UI e, no máximo, dois
desenvolvedores.


## Fase de Projeto Inicial (Shaping)  {.unnumbered}

Shaping é a fase principal do método e que dá nome a ele. A ideia é
proporcionar uma solução de meio termo, entre um planejamento
detalhado (como em Waterfall) e um planejamento mais vago e abstrato
(como pode acontecer, por exemplo, quando adota-se Scrum). A próxima
figura ilustra o nível de detalhe que deve ser objeto da fase de
shaping.

![Fase de Shaping](./figs/shapeup-fig1.png)

O livro não detalha os responsáveis pela fase de shaping, mas sugere que
devem ser desenvolvedores e gerentes de nível sênior. Além disso, é
importante mencionar que o shaping pode acontecer em paralelo
com os ciclos de seis semanas e o período de cool-down. Por exemplo,
em paralelo com um determinado período de cool-down, realiza-se o shaping
do ciclo seguinte.

O resultado da fase de shaping é um **pitch**, isto é, um documento
simplificado que propõe uma nova funcionalidade para um sistema.
Esse documento deve incluir as seguintes informações:

* Descrição do problema que espera-se resolver com a nova funcionalidade.

* Quanto tempo pretende-se gastar com a implementação dessa funcionalidade. O
autor chama esse tempo de **apetite**. Veja então que uma funcionalidade pode
demandar menos de seis semanas (um ciclo). Pode-se, por exemplo, ter
funcionalidades de duas semanas.

* Uma descrição em alto nível da solução proposta. Como o autor é 
originalmente um designer, os exemplos de soluções mostrados no livro
são descrições (ou sketches) de mais alto nível de telas e
interfaces.

* Limitações e esclarecimentos. Na verdade, o autor usa o termo **no
go's** para limitações que serão aceitas na solução a ser
implementada. E o termo **rabbit holes** para designar os 
impasses que podem ocorrer no  momento da implementação (e então já
propor soluções para eles na fase de shaping). O objetivo é evitar
que o time se preocupe e perca tempo com essas questões.

Por fim, gera-se um conjunto de pitches, que vão para o que o autor
chama de **bet table**. Basicamente, os pitches são distribuídos para um
grupo de tomadores de decisão, que escolhem e definem aqueles que de
fato serão implementados no próximo ciclo. Essa decisão é tomada de
forma assíncrona, via troca de mensagens e discussões em uma ferramenta de
gerência de projetos (no caso, o próprio Basecamp). E, por fim, 
em uma curta reunião final e síncrona, que deve durar poucas horas. No caso da
Basecamp, as seguintes pessoas participam de uma *bet table*: o CEO da
empresa, o CTO da empresa, um desenvolvedor sênior e um estrategista de
produtos.

Terminada essa reunião, os pitches são distribuídos para os times. E
começa-se o ciclo de seis semanas.

Veja então que não existe um backlog de pitches, conforme comenta o 
autor:

> If we decide to bet on a pitch, it goes into the next cycle to
build. If we don’t, we let it go. There’s nothing we need to track or
hold on to. What if the pitch was great, but the time just wasn’t
right? Anyone who wants to advocate for it again simply tracks it
independently—their own way—and then lobbies for it six weeks later. 

Ou seja, na verdade, o que não existe é um backlog global. Mas
cada tomador de decisão pode ter seu backlog local de pitches 
que ele pretende propor e defender na próxima *bet table*.

Por fim, Shape Up defende a ideia de "tempo fixo, mas escopo aberto".
Isto é, os ciclos têm uma duração bem definida (por exemplo, 6 semanas).
Porém, os times têm flexibilidade para adaptar o escopo do que será,
de fato, implementado no ciclo. Veja que, no início de um ciclo, eles 
recebem um pitch, que é uma especificação de requisitos relativamente
aberta e flexível.

## Conclusão {.unnumbered}

Shape Up tem diferenças importantes para métodos como Scrum:

* Existe uma fase dedicada para planejamento e projeto (*shaping*).

* Não existem eventos como reuniões diárias, revisões e retrospectivas.

* Não existem artefatos como backlogs e quadros Scrum ou Kanban.

* Os times possuem um tamanho mínimo: um designer e um ou dois
desenvolvedores.

* Não existem papéis semelhantes àqueles de Scrum Master e Product
Owner. No entanto, estrategistas de produto podem ser consultados
para modelar os pitches e também podem fazer parte da *bet table*.

* Os times não têm autonomia para definir os pitches do próximo ciclo. 
Ou seja, eles recebem os pitches já prontos e modelados (*shaped*).
Porém, os times continuam autônomos para decidir 
como os pitches serão implementados no intervalo de seis semanas.

* Os times têm autonomia para adaptar o escopo de um pitch
à duração prevista do ciclo. Já em Scrum, o escopo do sprint é fixado
logo no seu início, durante a reunião de planejamento do sprint.

* Ciclos são um pouco mais longos que os sprints de Scrum. Por exemplo,
um ciclo pode durar 6 semamas, enquanto um sprint dura, no máximo, um
mês e, frequentemente, menos do que isso. Além disso, os ciclos são
seguidos de um período de cool down, que não envolve a implementação
de novas funcionalidades.

#### Para Saber Mais {.unnumbered}

Se quiser saber mais sobre Shape Up, além do livro do Ryan Singer, 
recomendamos uma [palestra](https://youtu.be/CsgrTWtuBuE) que fizemos 
para o evento MPS Talks, incluindo também seus
[slides](https://speakerdeck.com/aserg_ufmg/melhores-praticas-para-desenvolvimento-remoto-de-software-mps-talks-softex).
Você pode ouvir também diversas entrevistas do Ryan
Singer para podcasts. Os links estão 
na própria página do [livro](https://basecamp.com/shapeup).

## Exercícios {.unnumbered}

1. Qual a diferença entre a fase de *shaping* e o planejamento do sprint 
(*sprint planning*) em Scrum?

2. Em Shape Up, o que acontece quando um ciclo termina mas o time não consegue implementar o que foi especificado no *pitch*? Para responder, consulte o Capítulo 8 
do [livro](https://basecamp.com/shapeup) que descreve o método, seção "The circuit breaker".

3. A Basecamp -- empresa proponente de Shape up -- sempre teve 
diversos times trabalhando de forma remota. E, recentemente, ela 
anunciou que mesmo após a pandemia, continuará a ser uma empresa 
100% remota. Qual a principal característica que torna Shape Up 
um método adequado para times que trabalham de forma remota?

4. O período de Cool Down -- existente em Shape Up -- não é uma 
novidade em métodos ágeis. Por exemplo, em Extreme Programming 
(XP) existe uma prática parecida, mas com um nome diferente. 
Qual é esse nome adotado em XP? Se necessário, consulte o 
[Capítulo 2](https://engsoftmoderna.info/cap2.html) 
do livro texto, seção 2.3.3.

* * * 

Voltar para a lista de [artigos](./artigos.html).